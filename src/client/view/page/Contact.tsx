import React, { useState, useEffect } from 'react';
import Page from './Page';
import ContactBar from '../components/contact/ContactBar';
import ContactContent from '../components/contact/ContactContent';
import PersonContact from '../components/contact/PersonContact';
import RouteModel from '../../RouteModel';
import './Contact.scss';
import { useLocation } from 'react-router-dom';

const Contact : React.FC = props => {
    const mark = new PersonContact("Mark", RouteModel.contactUser.getLink("mark"), "+44 7 123 456 789", "mark@gmail.com", "https://www.linkedin.com/in/markpoussard/", "Bacon Street");
    const kimAnh = new PersonContact("Kim Anh", RouteModel.contactUser.getLink("kim-anh"), "+44 7 987 654 321", "chicken@gmail.com", "https://www.linkedin.com/in/kanguyenlu/", 'Unicorn House');
    const contacts = [mark, kimAnh];

    const [activeContact, setActiveContact] = useState<PersonContact | undefined>();
    const updateContent = (activeContact : PersonContact) => {
        setActiveContact(activeContact);
    }

    const location = useLocation();
    useEffect(() => {
        if(location.pathname === RouteModel.contact.getLink()){
            setActiveContact(undefined);
        }
    })

    return (
        <Page>
            <ContactBar contacts={contacts} updateContent={updateContent}></ContactBar>
            <ContactContent activeContact={activeContact}></ContactContent>
        </Page>
    )
}
export default Contact;