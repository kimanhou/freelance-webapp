import React from 'react';
import './NavigationBar.scss';
import NavigationLink from './NavigationLink';
import RouteModel from '../../../RouteModel';

const NavigationBar : React.FC = props => {
    return (
        <div className={`navigation-bar`}>
            <div className={`navigation-bar-content`}>
                <NavigationLink to={RouteModel.aboutUs.getLink()}>
                    About us
                </NavigationLink>
                <div className={`navigation-bar-underline`}/>
            </div>
        </div>
    )
}
export default NavigationBar;