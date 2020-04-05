import React from 'react';
import Page from './Page';
import ProjectItem from '../components/work/ProjectItem';

const Work : React.FC = props => {
    return (
        <Page>
            <h2>Work</h2>
            <ProjectItem name={`Project A`} imageUrl={`/projectA.png`} description={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam a euismod magna, at porttitor enim. Donec pharetra diam eu pellentesque dictum. 
                Cras rutrum felis at justo feugiat, non vestibulum orci mollis. In nisl mauris, euismod 
                vitae mattis in, facilisis sit amet ligula. Proin sapien eros, finibus id aliquam in, 
                volutpat ut felis. Praesent tincidunt lorem ac tempor tempus. Duis porttitor suscipit 
                ante vel dignissim.
            `}/>
        </Page>
    )
}
export default Work;