import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Dot from '../decoration/Dot';
import './SideBarLink.scss';

export interface ISideBarLinkProps{
    name : string;
    target : string;
}

export class SideBarLinkProp implements ISideBarLinkProps{
    name : string;
    target : string;

    constructor(name : string, target : string){
        this.name = name;
        this.target = target;
    }
}

const SideBarLink : React.FC<ISideBarLinkProps> = props => {
    const history = useHistory();
    const doNavigate = () => {
        history.push(props.target);
    }
    const location = useLocation();
    const isActive = location.pathname == props.target;
    const activeClassName = (isActive) ? "active" : "";
    return (
        <div className={`side-bar-link ${activeClassName}`} onClick={doNavigate}>
            {props.children}
            {props.name}
            {isActive === true && 
                <Dot />
            }
        </div>
    );
}
export default SideBarLink;