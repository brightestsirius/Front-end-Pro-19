export class User{
    constructor(obj){
        Object.assign(this, obj);
        this.country = userCountry;
    }

    getInfo(){
        return `Hello, ${this.name}.`
    }
}

export let deafultUserName = `Petro`;

const userCountry = `Ukraine`;

export const firstFunc = value => secondFunc(value);
const secondFunc = value => Math.pow(value, 2);