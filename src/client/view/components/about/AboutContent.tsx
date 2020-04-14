import React, { useEffect, useState } from 'react';
import PersonContact from '../contact/PersonContact';
import './AboutContent.scss';
import { Switch, Route } from 'react-router-dom';
import RouteModel from '../../../RouteModel';
import MarkAbout from './MarkAbout';
import KimAnhAbout from './KimAnhAbout';

interface IAboutContentProps {
}

const AboutContent : React.FC<IAboutContentProps> = props => {
    return (
        <Switch>
            <Route path={RouteModel.about.mark.getPath()}>
                <MarkAbout />
            </Route>
            <Route path={RouteModel.about.kimAnh.getPath()}>
                <KimAnhAbout />
            </Route>
            <Route path={RouteModel.about.getPath()}>
                <p>Default about</p>
            </Route>
        </Switch>
    );
}

export default AboutContent;