import React from 'react';
import SideBarLink, { ISideBarLinkProps } from './SideBarLink';
import './SideBar.scss';

interface ISideBarProps{
    links : ISideBarLinkProps[];
}

const SideBar : React.FC<ISideBarProps> = props => {
    return (
        <div className={`side-bar`}>
            {props.links.map(linkProps => <SideBarLink {...linkProps}/>)}
        </div>
    )
}
export default SideBar;