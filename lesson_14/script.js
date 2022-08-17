// class

// let Yana = {
//     name: `Yana`,
//     surname: `Shevchenko`,
//     yearOfBirth: 2000,
//     country: `Poland`
// };

// class Child{
//     constructor(obj){
//         // for(let key in obj){
//         //     this[key] = obj[key];
//         // }
//         Object.assign(this, obj);

//         this.setAge();
//         this.setFullName();
//     }

//     setFullName(){
//         if(this.name && this.surname)
//             this.fullName = `${this.name} ${this.surname}`;
//     }

//     getFullName(){
//         return `Fullname: ` + this.fullName ? this.fullName : this.name;
//     }

//     setAge(){
//         if(this.yearOfBirth){
//             this.age = new Date().getFullYear() - this.yearOfBirth;
//         }
//     }

//     getCountryName(){
//         return this.country ? this.country : `Ukraine`;
//     }

//     getCountry(){
//         return `Country: ${this.getCountryName()}`;
//     }

//     getInfo(){
//         let info = [this.getCountry(), this.getFullName()];
//         return info.join(`. `);
//     }
// }

// let someChild = new Child(); // {}.constructor()
// let girl = new Child({name: `Yana`}); // {}.constructor(`Yana`)
// Yana = new Child(Yana);

// console.log(someChild);
// console.log(girl);
// console.log(Yana);

// console.log(girl.getCountry());
// console.log(someChild.getCountry());
// console.log(Yana.getCountry());

// OOP

// const BEARS_FOOD = [
//     {
//         species: `Brown Bear`,
//         food: `🥩`
//     },
//     {
//         species: `Giant panda Bear`,
//         food: `🌱`
//     }
// ]

// const animals = [
//     {
//         name: `bear`,
//         icon: `🐻`,
//         species: `Brown Bear`
//     },
//     {
//         name: `bear`,
//         icon: `🐼`,
//         species: `Giant panda Bear`
//     }
// ];

// class Bear{
//     constructor(obj){
//         Object.assign(this, obj);
//     }

//     getIcon(){
//         return `Icon: ${this.icon}`;
//     }

//     getFood(species){
//         let bearFood = BEARS_FOOD.find(bear => bear.species === species); // {}, undefined
//         return bearFood ? bearFood.food : ``;
//     }

//     getInfo(){
//         let info = [];

//         this.food = this.getFood(this.species);

//         for(let key in this){
//             info.push(`${key}: ${this[key]}`);
//         }

//         console.log(info);

//         return info.join(`. `);
//     }
// }

// class Panda extends Bear{
//     constructor(bear){
//         super(bear);
//     }

//     getIcon(){
//         let bearIcon = super.getIcon(); // `Icon: 🐼`;
//         let info = [bearIcon, this.superPanda()]; // [`Icon: 🐼`, `I'm super Panda`];

//         return info.join(`! `) + `!`;
//     }

//     superPanda(){
//         return `I'm super Panda`;
//     }
// }

// let bears = animals
//     .map(bear => bear.species === `Giant panda Bear` ? new Panda(bear) : new Bear(bear));

// console.log(bears);

// bears
//     .forEach(bear => console.log(bear.getInfo()) );

// bears
//     .forEach(bear => console.log(bear.getIcon()));

// super

const cars = [
    {
        type: `BMW`,
        series: `X`,
        number: 8
    },
    {
        type: `BMW`,
        series: `X`,
        number: 5
    },
    {
        type: `Audi`,
        series: `A`,
        number: 3
    },
    {
        type: `Audi`,
        series: `A`,
        number: 5
    },
    {
        type: `Tesla`,
        series: `A`,
        number: 3
    }
];

class Car{
    constructor(obj){
        Object.assign(this, obj);
    }
}

class BMW extends Car{
    constructor(obj){
        super(obj);
    }
}

class Audi extends Car{
    constructor(obj){
        super(obj);
    }
}

class Tesla extends Car{
    constructor(obj){
        super(obj);
    }
}

const CARS_TYPES = {
    BMW: car => new BMW(car),
    Audi: function(car){ return new Audi(car) },
    Tesla: car => new Tesla(car)
}

let carsClass = cars
    .map(car => {
        return CARS_TYPES[car.type] ? CARS_TYPES[car.type](car) : new Car(car);
        // return CARS_TYPES[`BMW`] ? CARS_TYPES[`BMW`](car) : new Car(car);
    });

console.log(carsClass);

// get/set

// SOLID