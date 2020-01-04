import React, { useContext } from 'react';
import './ToggleTheme.css';
import Context from '../../context/Context';

const ToggleTheme = (props) => {
    const contextData = useContext(Context);
    return (
        <div className="toggle-theme">
            <div className="container-theme-toggler" onClick={contextData.toggler}>
                <div className="theme-toggler">
                    {contextData.theme === 'light' 
                        ? <i className="fas fa-moon"></i>
                        : <i className="far fa-circle"></i>
                    }
                </div>
            </div>
        </div>
    )
};

export default ToggleTheme