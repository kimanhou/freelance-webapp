import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RouteModel from '../../RouteModel';
import ContactBar from '../components/contact/ContactBar';
import ContactContent from '../components/contact/ContactContent';
import PersonContact from '../components/contact/PersonContact';
import Page from './Page';

const Contact : React.FC = props => {
    const mark = new PersonContact("Mark", RouteModel.contactUser.getLink("mark"), "+44 7 123 456 789", "mark@gmail.com", "https://www.linkedin.com/in/markpoussard/", "20 Bacon Street, E2 6DY London, United Kingdom");
    const kimAnh = new PersonContact("Kim Anh", RouteModel.contactUser.getLink("kim-anh"), "+44 7 987 654 321", "chicken@gmail.com", "https://www.linkedin.com/in/kanguyenlu/", 'Unicorn House, 3 Plough Yard, EC2A 3LP London, United Kingdom');
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