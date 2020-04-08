import React from 'react';
import NavigationBar from '../navigation/NavigationBar';
import { useHistory } from 'react-router-dom'
import './AppHeader.scss';

interface IHeaderProps{
    isIndex : boolean;
}

const AppHeader : React.FC<IHeaderProps> = props => {
    const history = useHistory();
    const goToHomePage = () => {
        history.push("/");
    }
    const isPointerClassName = (props.isIndex) ? "" : "pointer";

    return (
        <div className={`header`}>
          <h1 className={`website-title ${isPointerClassName}`} onClick={goToHomePage}>{`Kim Anh & Mark`}</h1>
          <NavigationBar isVerticallyCentered={props.isIndex}/>
        </div>
    )
}
export default AppHeader;