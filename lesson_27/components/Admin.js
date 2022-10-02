import {User} from './User.js';

export class Admin extends User{
    constructor(obj){
        super(obj);
    }

    getInfo(){
        return `Hello admin, ${this.name}.`
    }
}