import React from 'react';
import './NotFound.css';
import error404 from '../../assets/images/error404.png';

const NotFoundComp = () => {
    return (
        <div className="not-found-comp">
            <img className="not-found-img" src={error404} alt="404: Page not found"/>
        </div>
    )
}

export default NotFoundComp;