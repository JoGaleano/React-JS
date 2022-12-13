import React from 'react';
import { Contact } from '../models/contact.class';
import { status } from '../models/status';
import ContactComponent from '../components/pure/Contact';


const ListContact = () => {
    const defaultContact = new Contact("Maria","Galeano","galeano@gmail.com",status.conectado);

    return (
        <div>
            <div>
                <h1>Contactos</h1>
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};





export default ListContact;
