import React, { useState, useEffect } from 'react';
import './ContactContent.scss';
import PersonContact from './PersonContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IContactContentProps {
    activeContact ?: PersonContact;
}

const ContactContent : React.FC<IContactContentProps> = props => {
    const [fadeInClassname, setFadeInClassname] = useState("");
    const [isPostalAddressVisible, setIsPostalAddressVisible] = useState("");
    useEffect(() => {
        setFadeInClassname("fade-in");
        setTimeout(() => {
            setFadeInClassname("")
        }, 1000);
    }, [props.activeContact]);

    const postalAddressAppears = () => {
        if (isPostalAddressVisible == "") {
            setIsPostalAddressVisible("visible");
        }
        else {
            setIsPostalAddressVisible("");
        }
    }

    if(props.activeContact != null) {
        return (
            <div className={`contact-content ${fadeInClassname}`}>
                <a href={props.activeContact.getLinkedin()} target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" /></a>
                <a href={`tel:${props.activeContact.getTel()}`} ><FontAwesomeIcon icon={['fas', 'phone']} size="2x" /></a>
                <a href={`mailto:${props.activeContact.getEmail()}?Subject=&body=`}><FontAwesomeIcon icon={['fas', 'at']} size="2x" /></a>
                <FontAwesomeIcon icon={['far', 'paper-plane']} size="2x" onClick={postalAddressAppears}/>
                <div className={`postal-address ${isPostalAddressVisible}`}>
                    <p>This is my postal address !</p>
                </div>
            </div>
        );
    }
    return (
        <div className={`contact-content ${fadeInClassname}`}>
            <p>Hi there !</p>
            <p>You can contact us at common@gmail.com or click on our name to reach us personally.</p>
        </div>
    );
}

export default ContactContent;