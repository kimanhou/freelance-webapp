import React from 'react';
import NavigationBar from '../navigation/NavigationBar';

interface IHeaderProps{
    centerNavigationBar : boolean;
}

const AppHeader : React.FC<IHeaderProps> = props => {
    return (
        <div className={`header`}>
          <h1>{`Kim Anh & Mark`}</h1>
          <NavigationBar isVerticallyCentered={props.centerNavigationBar}/>
        </div>
    )
}
export default AppHeader;