import React from 'react';

interface HeaderProps {
    title: string;
}
// function Header() {
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title} Ecoleta</h1>
        </header>
    );
}

export default Header;