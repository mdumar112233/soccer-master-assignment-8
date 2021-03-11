import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header-container'>
            <div  className='header-title'>
                {
                    props.logo ? <img src={props.logo} alt="logo"/> : <h2>Soccer Master League</h2>
                }
            </div>
            <div className="layer"></div>
        </div>
    );
};

export default Header;