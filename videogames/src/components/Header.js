import React from 'react';

const Header = (props) => {
    const name = props.name
    
    return (
        <div>
            <h1>{name}</h1>
            <p>Welcome to the Wilders !!! And Hello my Favorite Teacher :) Give me points :))</p>
        </div>
    );
};

export default Header;