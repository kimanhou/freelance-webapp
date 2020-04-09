import React from 'react';
import './ContactContent.scss';
import PersonContact from './PersonContact';

interface IContactContentProps {
    activeContact : PersonContact;
}

const ContactContent : React.FC<IContactContentProps> = props => {
    return (
        <div className='contact-content'>
            <p>Tel : {props.activeContact.getTel()}</p>
            <p>Email : {props.activeContact.getEmail()}</p>
        </div>
    );
}

export default ContactContent;