import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './NavigationLink.scss';
import Dot from '../decoration/Dot';

interface INavigationLinkProps{
    to : string;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    const history = useHistory();
    const doNavigate = () => {
        history.push(props.to);
    }
    const location = useLocation();
    const isActive = location.pathname.startsWith(props.to);
    const activeClassName = (isActive) ? "active" : "";
    return (
        <div className={`navigation-link ${activeClassName}`} onClick={doNavigate}>
            {props.children}
            {isActive === true && 
                <Dot />
            }
        </div>
    )
}
export default NavigationLink;