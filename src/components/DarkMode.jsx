import React, { useState, useEffect } from 'react';
import '../darkMode.css';


function DarkMode() {
        const [theme, setTheme] = useState('light');
        const toggleTheme = () => {
            if (theme === 'light') {
                setTheme('dark');
            } else {
            setTheme('light');
            }
        };

        useEffect(() => {
            document.body.className = theme;
        }, [theme]);

        return (
            <div className={`App ${theme}`}>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
            );
    }

    export default DarkMode;