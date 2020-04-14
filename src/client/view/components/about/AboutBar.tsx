import React from 'react';
import './AboutBar.scss';
import AboutLink from './AboutLink';
import PersonContact from '../contact/PersonContact';

interface IAboutBarProps{
    contacts : PersonContact[];
    updateContent : (activeContact : PersonContact) => void;
}

const AboutBar : React.FC<IAboutBarProps> = props => {

    return (
        <div className={`about-bar`}>
            {props.contacts.map(contact => <AboutLink person={contact} updateContent={props.updateContent}/>)}
        </div>
    )
}
export default AboutBar;