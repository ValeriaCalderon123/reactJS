import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre: {contact.first_name}
            </h2>
            <h3>
                Descripcion: {contact.last_name}
            </h3>
            <h4>
                Email: {contact.email}
            </h4>
            <h5>
                Esta contacto esta: { contact.completed ? 'En linea' : 'No disponible' }
            </h5>
        </div>
    );
};

ContactComponent.propTypes = {
    //Se trata de una task
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;

