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

//         Animal

// Herbivores    Predators

//               Bear   Crocodile


class Animal{
    constructor(animal){
        Object.assign(this, animal);
    }

    getInfo(){
        const LIs = Object.keys(this) // [name, icon]
            .map(key => `<li>${key} : ${this[key]}</li>`)
            .join(``);

        return `<ul>${LIs}</ul>`;
    }
}

class Herbivores extends Animal{
    constructor(animal) {
        super(animal);

        this.type = `herbivores`;
    }
    
}

class Predators extends Animal{
    constructor(animal) {
        super(animal);

        this.type = `predators`;
    }
    
}

class Bear extends Predators{
    constructor(animal){
        super(animal);

        this.setSpecies();
    }

    getSpeciesLatin(species){ `Panda`
        let latData = BEARS_SPECIES.find(item => item.species === species); // {} : undefined
        return latData ? ` (lat. ${latData.latin})` : ``;
    }

    setSpecies(){
        this.species += this.getSpeciesLatin(this.species);
    }
}

class Crocodile extends Predators{
    constructor(animal){
        super(animal);

        this.setSpecies();
    }

    getSpeciesScientific(species){
        let scientificData = CROCODILE_SPECIES.find(item => item.species === species); // {} : undefined
        
        return scientificData ? ` (scientific. ${scientificData.scientific})` : ``;
    }

    setSpecies(){
        this.species += this.getSpeciesScientific(this.species);
    }
}

const ANIMAL_NAMES = {
    bear: animal => new Bear(animal),
    crocodile: animal => new Crocodile(animal)
}

let animalsHerbivores = herbivores
    .map(animal => new Herbivores(animal))
    .map(animal => animal.getInfo())
    .join(``);

let animalsPredators = predators
    .map(animal => ANIMAL_NAMES[animal.name] ? ANIMAL_NAMES[animal.name](animal) : new Predators(animal))
    .map(animal => animal.getInfo())
    .join(``);

document.write(animalsHerbivores);
document.write(animalsPredators);

// SOLID

// class User{
//     constructor(){}

//     render(){}

//     renderCourses(){
//         return `<div class="courses">...</div>`;
//     }
// }

// class Student extends User{
//     constructor(){
//         super();
//     }
// }

// class Admin extends User{
//     constructor(){
//         super();
//     }

//     renderCourses(){
//         let rendered = super.renderCourses(); // 
//         return rendered + `<div></div>`;
//     }
// }