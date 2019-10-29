import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const headerStyle = {
        backgroundColor: 'silver',
        color: 'white',
        textAlign: 'center',
        margin: '0',
        padding: '10px'
    };

    const headerLinkWrapperStyle = {
        backgroundColor: 'black',
        textAlign: 'center',
        color: 'white'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <header>
            <h1 style={headerStyle}>Header</h1>
            <div style={headerLinkWrapperStyle}>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            </div>
        </header>
    );
}

export default Header;
