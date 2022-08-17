const herbivores = [
    {
        name: `rabbit`,
        icon: `🐰`
    },
    {
        name: `hamster`,
        icon: `🐹`
    },
    {
        name: `chick`,
        icon: `🐥`
    }
];

const BEARS_SPECIES = [
    {
        species: `Brown Bear`,
        latin: `Ursus arctos`
    },
    {
        species: `Asiatic Black Bear`,
        latin: `Ursus thibetanus`
    },
    {
        species: `Sloth Bear`,
        latin: `Melursus ursinus`
    },
    {
        species: `Giant panda Bear`,
        latin: `Ailuropoda melanoleuca`
    }
];

const CROCODILE_SPECIES = [
    {
        species: `Nile crocodile`,
        scientific: `Crocodylus niloticus`
    },
    {
        species: `Saltwater crocodile`,
        scientific: `Crocodylus porosus`
    },
    {
        species: `Dwarf crocodile`,
        scientific: `Osteolaemus tetraspis`
    },
    {
        species: `Cuban crocodile`,
        scientific: `Crocodylus rhombifer`
    }
];

const predators = [
    {
        name: `bear`,
        icon: `🐻`,
        species: `Brown Bear`
    },
    {
        name: `bear`,
        icon: `🐼`,
        species: `Giant panda Bear`
    },
    {
        name: `lion`,
        icon: `🦁`
    },
    {
        name: `crocodile`,
        icon: `🐊`,
        species: `Nile crocodile`
    }
];

String.prototype.toCapitalCase = function(){
    return this[0].toUpperCase() + this.slice(1).toLowerCase();
}

class Animal{
    constructor(animal){
        Object.assign(this, animal);
    }

    getInfo(){
        return Object.keys(this)
            .map(key => `${key.toCapitalCase()}: ${this[key]}`)
    }

    renderInfo(){
        document.write(`<ul>
            ${
                this.getInfo()
                    .map(li => `<li>${li}</li>`)
                    .join(``)
            }
        </ul>`);
    }
}

class Predator extends Animal{
    constructor(animal){
        super(animal);

        this.type = `predator`;
    }
}

class Herbivores extends Animal{
    constructor(animal){
        super(animal);

        this.type = `herbivores`;
    }

    getInfo(){
        return Object.keys(this)
            .map(key => `${key.toCapitalCase()}: ${this[key]}`)
            .map(str => str += `!`)
    }
}

class Bear extends Predator{
    constructor(animal){
        super(animal);

        this.name += ` (lat. ${this.getLatin(this.species)})`;
    }

    getLatin(species){
        return BEARS_SPECIES.find(item => item.species === species).latin;
    }
}

class Crocodile extends Predator{
    constructor(animal){
        super(animal);

        this.name += ` (scientific. ${this.getScientific(this.species)})`;
    }

    getScientific(species){
        return CROCODILE_SPECIES.find(item => item.species === species).scientific;
    }
}

const ANIMALS_NAMES = {
    bear: animal => new Bear(animal),
    crocodile: animal => new Crocodile(animal)
}

predators
    .map(animal => {
        return ANIMALS_NAMES[animal.name] ? ANIMALS_NAMES[animal.name](animal) : new Predator(animal);
    })
    .forEach(animal => animal.renderInfo());

herbivores
    .map(animal => {
        return ANIMALS_NAMES[animal.name] ? ANIMALS_NAMES[animal.name](animal) : new Herbivores(animal);
    })
    .forEach(animal => animal.renderInfo());


// SOLID

//       Plane

// Airliner   Aerobatic

// Boeing737   Extra330

// The Boeing 737 has a maximum crosswind component of 35 knots if the runway is perfectly dry, or 15 knots if the runway is wet.
// The Boeing 737: 108 to 215 passengers.

// Extra 330 has a maximum crosswind component of 14 knots if the runway is perfectly dry, or 12 knots if the runway is wet.

const CROSSWIND = 13;
const RUNAWAY = `dry`;

const planes = [
    {
        name: `Boeing 737`,
        type: `Airliner`,
        crosswind: {
            dry: 35,
            wet: 15
        },
        passengers: {
            min: 108,
            max: 215,
            current: 110
        }
    },
    {
        name: `Airbus 300`,
        type: `Airliner`,
        crosswind: {
            dry: 35,
            wet: 15
        },
        passengers: {
            min: 100,
            max: 215,
            current: 100
        }
    },
    {
        name: `Extra 330`,
        type: `Aerobatic`,
        crosswind: {
            dry: 14,
            wet: 12
        }
    }
];

class Plane{
    constructor(plane){
        Object.assign(this, plane);
    }

    takeoff(){
        let approveParams = this.approvedParams();
        let approved = approveParams.every(param => param === true);

        return `Takeoff for ${this.name} is ${approved ? `approved` : `not approved`}`;
    }

    approvedParams(){
        return [this.weatherParam()];
    }

    weatherParam(){
        let approve = true;

        switch(RUNAWAY){
            case `dry`:
                if(CROSSWIND>this.crosswind.dry) 
                    approve = false;
                    break;
            case `wet`:
                if(CROSSWIND>this.crosswind.wet) 
                    approve = false;
                    break;
        }

        return approve;
    }
}

class Airliner extends Plane{
    constructor(plane){
        super(plane);
    }

    passangerParam(){
        return this.passengers.current < this.passengers.min ? false : true;
    }

    approvedParams(){
        let params = super.approvedParams();
        params.push(this.passangerParam());

        return params;
    }

}

class Aerobatic extends Plane{
    constructor(plane){
        super(plane);
    }
}

const PLANES_CLASSES = {
    Airliner: plane => new Airliner(plane),
    Aerobatic: plane => new Aerobatic(plane)
}

planes
    .map(plane => PLANES_CLASSES[plane.type] ? PLANES_CLASSES[plane.type](plane) : new Plane(plane))
    .map(plane => {
        console.log(plane);
        return plane;
    })
    .forEach(plane => console.log(plane.takeoff()));