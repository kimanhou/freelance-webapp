import React from 'react';
import './Image.scss';

interface IImageProps{
    url : string;
    className ?: string;
    border ?: boolean;
}

const Image : React.FC<IImageProps> = props => {
    const className = (props.className != null) ? props.className : "";
    const imageBorder = (props.border === true) ? "image-border" : "";
    return (
       <img className={`image ${imageBorder} ${className}`} src={props.url} />
    )
}
export default Image;