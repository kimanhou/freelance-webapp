import React, { useState } from 'react';
import Page from './Page';
import ContactBar from '../components/contact/ContactBar';
import ContactContent from '../components/contact/ContactContent';
import PersonContact from '../components/contact/PersonContact';
import RouteModel from '../../RouteModel';
import './Contact.scss';

const Contact : React.FC = props => {
    const mark = new PersonContact("Mark", RouteModel.contactUser.getLink("mark"), "+44 7 123 456 789", "mark@gmail.com");
    const kimAnh = new PersonContact("Kim Anh", RouteModel.contactUser.getLink("kim-anh"), "+44 7 987 654 321", "chicken@gmail.com");
    const undefinedContact = new PersonContact("", "", "", "");
    const contacts = [mark, kimAnh];

    const [activeContact, setActiveContact] = useState<PersonContact>(undefinedContact);
    const updateContent = (activeContact : PersonContact) => {
        setActiveContact(activeContact);
    }

    return (
        <Page>
            <h2>Contact</h2>
            <ContactBar contacts={contacts} updateContent={updateContent}></ContactBar>
            <ContactContent activeContact={activeContact}></ContactContent>
        </Page>
    )
}
export default Contact;