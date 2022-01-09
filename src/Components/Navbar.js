import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import menuBtn from '../images/menu.png'

const buttons = ["Home", "About", "Services", "Reviews", "Contact"]

const Navbar = () => {
    const [id, setId] = useState(null);
    const {setIsMenuOpen} = useGlobalContext();

    const handleClick = (id) => {
        setId(id)
    };
    return (
        <div className='nav-flex'>
            <div className='logo'>YPC</div>
            <div className='menu-btn'>
                {buttons.map((btn,index)=> {
                    return <div key={index} onClick={()=> handleClick(index)} className={`${index === id && "active"}`}>{btn}</div>
                })}
            </div>
            <div className='menuBtn'>
                <img src={menuBtn} alt="menuBtn" onClick={()=> setIsMenuOpen(true)} />
            </div>
        </div>
    );
}

export default Navbar;
