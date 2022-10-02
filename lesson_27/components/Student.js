import {User} from './User.js';

export default class Student extends User{
    constructor(obj){
        super(obj);
    }

    getInfo(){
        return `Hello student, ${this.name}.`
    }
}