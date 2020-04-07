import React from 'react';
import NavigationBar from '../navigation/NavigationBar';
import { useHistory } from 'react-router-dom';
import './AppHeader.scss';

interface IHeaderProps{
    centerNavigationBar : boolean;
}

const AppHeader : React.FC<IHeaderProps> = props => {
    const history = useHistory();
    const goToHomePage = () => {
        history.push("/");
    }

    return (
        <div className={`header`}>
          <h1 className={`website-title`} onClick={goToHomePage}>{`Kim Anh & Mark`}</h1>
          <NavigationBar isVerticallyCentered={props.centerNavigationBar}/>
        </div>
    )
}
export default AppHeader;