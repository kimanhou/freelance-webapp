import React from 'react';
import './ContactBar.scss';
import ContactLink from './ContactLink';
import PersonContact from './PersonContact';

interface IContactBarProps{
    contacts : PersonContact[];
    updateContent : (activeContact : PersonContact) => void;
}

const ContactBar : React.FC<IContactBarProps> = props => {

    return (
        <div className={`contact-bar`}>
            {props.contacts.map(contact => <ContactLink person={contact} updateContent={props.updateContent}/>)}
        </div>
    )
}
export default ContactBar;