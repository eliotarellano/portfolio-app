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
        if (theme === 'light') {
            const body = document.querySelector("body");
            body.classList.add('home-light','bg-light');
        } else if (theme === 'dark') {
            const body = document.querySelector("body");
            body.classList.add('home-dark','bg-dark');
        }
    },[]);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            const body = document.querySelector("body");
            body.classList.add('home-dark','bg-dark');
            body.classList.remove('home-light','bg-light');
        } else if (theme === 'dark') {
            setTheme('light');
            const body = document.querySelector("body");
            body.classList.add('home-light','bg-light');
            body.classList.remove('home-dark','bg-dark');
        }
    };

    const contextData = {
        theme: theme,
        toggler: toggleTheme,
    };

    return (
        <div className={theme !== 'dark' ? 'app home-light bg-light' : 'app home-dark bg-dark'}>
            <Context.Provider value={contextData}>
                <PublicRoute />
                <ToggleTheme />
            </Context.Provider>      
        </div>
    );
}

export default App;
