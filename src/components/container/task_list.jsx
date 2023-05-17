import React from 'react';
import ContactComponent from '../pure/contact';
import { Contact } from '../../models/contact.class';

const TaskListComponent = () => {

    const defaultTask = new Contact('Vale', 'Calderon', 'vcalderon@gmail.com',false)

    return (
        <div>
            <div>
                Tu task:
            </div>
            <ContactComponent contact = {defaultTask}></ContactComponent>
        </div>
    );
};




export default TaskListComponent;
