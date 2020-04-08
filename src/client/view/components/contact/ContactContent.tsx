import React from 'react';

interface IContactContentProps {
    tel : string;
    email : string;
}

const ContactContent : React.FC<IContactContentProps> = props => {
    return (
        <div>
            <p>Tel : {props.tel}</p>
            <p>Email : {props.email}</p>
        </div>
    );
}

export default ContactContent;