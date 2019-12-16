import React from 'react';
import './NotFound.css';
import errorImg from '../../assets/images/error404.png';

const NotFoundComp = () => {
    return (
        <div className="not-found-comp">
            <img className="not-found-img" src={errorImg} alt="404: Page not found"/>
        </div>
    )
}

export default NotFoundComp;