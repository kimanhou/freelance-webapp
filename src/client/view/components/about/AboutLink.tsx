import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PersonContact from '../contact/PersonContact';
import Dot from '../decoration/Dot';
import './AboutLink.scss';

interface IAboutLinkProps{
    person : PersonContact;
    updateContent : (activeContact : PersonContact) => void;
}

const AboutLink : React.FC<IAboutLinkProps> = props => {
    const history = useHistory();
    const doNavigate = () => {
        history.push(props.person.getLink());
        props.updateContent(props.person);
    }
    const location = useLocation();
    const isActive = location.pathname == props.person.getLink();
    const activeClassName = (isActive) ? "active" : "";
    return (
        <div className={`about-link ${activeClassName}`} onClick={doNavigate}>
            {props.children}
            {props.person.getName()}
            {isActive === true && 
                <Dot />
            }
        </div>
    )
}
export default AboutLink;