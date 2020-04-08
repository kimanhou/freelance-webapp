import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './ContactLink.scss';
import Dot from '../decoration/Dot';
import PersonContact from './PersonContact';

interface IContactLinkProps{
    person : PersonContact;
}

const ContactLink : React.FC<IContactLinkProps> = props => {
    const history = useHistory();
    const doNavigate = () => {
        history.push(props.person.getLink());
    }
    const location = useLocation();
    const isActive = location.pathname == props.person.getLink();
    const activeClassName = (isActive) ? "active" : "";
    return (
        <div className={`contact-link ${activeClassName}`} onClick={doNavigate}>
            {props.children}
            {props.person.getName()}
            {isActive === true && 
                <Dot />
            }
        </div>
    )
}
export default ContactLink;