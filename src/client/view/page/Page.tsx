import React from 'react';
import './Page.scss';

const Page : React.FC = props => {
    return (
        <div className={`page`}>
            {props.children}
        </div>
    )
}
export default Page;