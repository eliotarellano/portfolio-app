import React, { useState, useEffect } from 'react';
import Context from './context/Context';
import PublicRoute from './components/public-route/PublicRoute';
import ToggleTheme from './components/toggle-theme/ToggleTheme';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        setTimeout((
            window.scrollTo(0, 0)
        ), 9000);
    });

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    const contextData = {
        theme: theme,
        toggler: toggleTheme,
    };

    return (
        <div className="app">
            <Context.Provider value={contextData}>
                <PublicRoute />
                <ToggleTheme />
            </Context.Provider>      
        </div>
    );
}

export default App;
