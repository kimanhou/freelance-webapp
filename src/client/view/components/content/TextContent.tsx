import React from 'react';
import './TextContent.scss';

const TextContent : React.FC = props => {
    return (
        <div className={`text-content`}>
            {props.children}
        </div>
    )
}
export default TextContent;