import React from 'react';
import './Dot.scss';

const Dot : React.FC = props => {
    return (
        <span className={`decoration-dot`}>
            <span className={`decoration-dot-content`}>
                .
            </span>
        </span>
    )
}
export default Dot;