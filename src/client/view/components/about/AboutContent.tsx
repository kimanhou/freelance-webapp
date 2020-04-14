import React, { useEffect, useState } from 'react';
import PersonContact from '../contact/PersonContact';
import './AboutContent.scss';

interface IAboutContentProps {
    activeContact ?: PersonContact;
}

const AboutContent : React.FC<IAboutContentProps> = props => {
    const [fadeInClassName, setFadeInClassName] = useState("");
    useEffect(() => {
        setFadeInClassName("fade-in");
        setTimeout(() => {
            setFadeInClassName("")
        }, 1000);
    }, [props.activeContact]);


    if(props.activeContact != null) {
        return (
            <div className={`about-content ${fadeInClassName}`}>
                <p>Something about {props.activeContact.getName()}</p>
            </div>
        );
    }
    return (
        <div className={`about-content ${fadeInClassName}`}>
            <p>Hi there !</p>
            <p>We are Kim Anh and Mark, and we are awesome.</p>
        </div>
    );
}

export default AboutContent;