import React from 'react';
import './NavigationBar.scss';
import NavigationLink from './NavigationLink';
import RouteModel from '../../../RouteModel';

interface INavigationBarProps{
    isVerticallyCentered : boolean;
}

const NavigationBar : React.FC<INavigationBarProps> = props => {
    const centerVertically = (props.isVerticallyCentered)?"center-vertically":"";
    return (
        <div className={`navigation-bar ${centerVertically}`}>
            <div className={`navigation-bar-content`}>
                <NavigationLink to={RouteModel.work.getLink()}>
                    Work
                </NavigationLink>
                <NavigationLink to={RouteModel.about.getLink()}>
                    About
                </NavigationLink>
                <NavigationLink to={RouteModel.contact.getLink()}>
                    Contact
                </NavigationLink>
                <div className={`navigation-bar-underline`}/>
            </div>
        </div>
    )
}
export default NavigationBar;