import React from 'react';
import peaceLogo from '../imgs/PeaceLogo.png';

function Header() {
    return (
        <header>
            <h1>Bingo da Paz</h1>
            <img src={ peaceLogo } alt="Peace Logo" width="100px" />
        </header>
    );
}

export default Header;