import React from 'react';
import RouteModel from '../../RouteModel';
import AboutContent from '../components/about/AboutContent';
import SideBar from '../components/sidebar/SideBar';
import { SideBarLinkProp } from '../components/sidebar/SideBarLink';
import Page from './Page';

const About : React.FC = props => {
    const links = [
        new SideBarLinkProp("Mark", RouteModel.about.mark.getLink()),
        new SideBarLinkProp("Kim Anh", RouteModel.about.kimAnh.getLink()),
    ];
    
    return (
        <Page>
            <h2>About</h2>
            <SideBar links={links}></SideBar>
            <AboutContent></AboutContent>
        </Page>
    )
}
export default About;