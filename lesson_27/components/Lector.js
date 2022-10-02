import {User} from './User.js';

export class Lector extends User{
    constructor(obj){
        super(obj);
    }

    getInfo(){
        return `Hello lector, ${this.name}.`
    }
}