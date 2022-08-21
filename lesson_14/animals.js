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

class User{
    constructor(user){
        Object.assign(this, user);
    }

    render(){
        return `<div class="user">
            ...
            ${this.courses ? this.renderCourses() : ``}
        </div>`
    }

    renderCourses(){
        return `<div class="user__courses">...</div>`
    }
}

class Admin extends User{
    constructor(user){
        super(user);
    }

    renderCourses(){
        return `<div class="user__courses admin--info">...</div>`
    }
}

const ROLES = {
    student: user => new Student(user),
    admin: user => new Admin(user),
    lector: user => new Lector(user),
}

let render = users
    .map(user => ROLES[user.role] ? ROLES[user.role](user) : new User(user))
    .map(user => user.render())
    .join(``);

document.write(`<div class="users">${render}</div>`);