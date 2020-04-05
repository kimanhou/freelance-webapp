import React from 'react';
import Image from '../media/Image';
import Title from '../header/Title';
import TextContent from '../content/TextContent';

interface IProjectItemProps{
    name : string;
    description : string;
    imageUrl : string;
}

const ProjectItem : React.FC<IProjectItemProps> = props => {
    return (
        <div className={`project-item`}>
            <Image className={`project-item-img`} url={props.imageUrl} border/>
            <Title>{props.name}</Title>
            <TextContent>{props.description}</TextContent>
        </div>
    )
}
export default ProjectItem;