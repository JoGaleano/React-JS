import { status } from '../models/status';

export class Contact{
    names = '';
    lastname = '';
    email= '';
    status = status.conectado;

    constructor(name,lastname, email, status){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.status = status;
    }
}