import React from 'react';
import Page from './Page';
import ContactBar from '../components/contact/ContactBar';
import ContactContent from '../components/contact/ContactContent';
import { useLocation } from 'react-router-dom';
import PersonContact from '../components/contact/PersonContact';
import RouteModel from '../../RouteModel';

const Contact : React.FC = props => {
    const location = useLocation();
    const myArray = location.pathname.split('/');
    const activeTab = myArray[myArray.length-1];

    const mark = new PersonContact("Mark", RouteModel.contactUser.getLink("mark"), "+44 7 123 456 789", "mark@gmail.com");
    const kimAnh = new PersonContact("Kim Anh", RouteModel.contactUser.getLink("kim-anh"), "+44 7 987 654 321", "chicken@gmail.com");

    var tel = "";
    var email = "";
    if (activeTab == "mark") {
        tel = mark.getTel();
        email = mark.getEmail();
    }

    if (activeTab == "kim-anh") {
        tel = kimAnh.getTel();
        email = kimAnh.getEmail();
    }

    const contacts = [mark, kimAnh];

    return (
        <Page>
            <h2>Contact</h2>
            <ContactBar contacts={contacts}></ContactBar>
            <ContactContent tel={tel} email={email}></ContactContent>
        </Page>
    )
}
export default Contact;