import Student from './Student.js';
import {Admin} from './Admin.js';
import {Lector} from './Lector.js';

export const users = [
    {
        name: `Jack`,
        role: `student`
    },
    {
        name: `Anna`,
        role: `admin`
    },
    {
        name: `Maks`,
        role: `lector`
    }
];

export const ROLES = {
    student: item => new Student(item),
    admin: item => new Admin(item),
    lector: item => new Lector(item)
};