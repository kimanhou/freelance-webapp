import React from 'react';
import { useHistory } from 'react-router-dom';
import './NavigationLink.scss';

interface INavigationLinkProps{
    to : string;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    // const history = useHistory();
    const doNavigate = () => {
        // history.push(props.to);
    }
    return (
        <div className={`navigation-link`} onClick={doNavigate}>
            {props.children}
        </div>
    )
}
export default NavigationLink;