import React, { useState } from 'react';
import RouteModel from '../../RouteModel';
import AboutBar from '../components/about/AboutBar';
import AboutContent from '../components/about/AboutContent';
import PersonContact from '../components/contact/PersonContact';
import Page from './Page';

const About : React.FC = props => {
    const mark = new PersonContact("Mark", RouteModel.aboutUser.getLink("mark"), "+44 7 123 456 789", "mark@gmail.com", "https://www.linkedin.com/in/markpoussard/", "20 Bacon Street, E2 6DY London, United Kingdom");
    const kimAnh = new PersonContact("Kim Anh", RouteModel.aboutUser.getLink("kim-anh"), "+44 7 987 654 321", "chicken@gmail.com", "https://www.linkedin.com/in/kanguyenlu/", 'Unicorn House, 3 Plough Yard, EC2A 3LP London, United Kingdom');
    const contacts = [mark, kimAnh];

    const [activeContact, setActiveContact] = useState<PersonContact | undefined>();
    
    const updateContent = (activeContact : PersonContact) => {
        setActiveContact(activeContact);
    }
    
    return (
        <Page>
            <h2>About</h2>
            <AboutBar contacts={contacts} updateContent={updateContent}></AboutBar>
            <AboutContent activeContact={activeContact}></AboutContent>
        </Page>
    )
}
export default About;