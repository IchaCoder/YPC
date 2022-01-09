import React, {useState} from 'react';
// import { Link } from 'react-router-dom'
import { AiFillCloseSquare } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion";
import { useGlobalContext } from '../context';
// import { useGlobalContext } from "../../context";

// Framer motion animation for the backdrop
const backdrop = {
    visible: { opacity: 1},
    hidden: { opacity: 0}
}

const body = {
    hidden: { x: -250 },
    visible: { x: 0 ,
        transition: {
            duration: .5,
            type: "spring",
            stiffness: 300
        }
    }
}

const buttons = ["Home", "About", "Services", "Reviews", "Contact"]

const Signin = () => {
    const [id, setId] = useState(null);
    const {isMenuOpen, setIsMenuOpen} = useGlobalContext()

    const handleClick = (id) => {
        setId(id)
    };

    const handleCloseMenu = (e) => {
        const neededClass = e.target.classList;
        if(neededClass.contains("log-modal-overlay")){
            setIsMenuOpen(false)
        }
    }

    
    return (
        <AnimatePresence exitBeforeEnter>
            {
                isMenuOpen && 
                <motion.div className={`log-modal-overlay`}
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={handleCloseMenu}
                >
                    <motion.div 
                        className="logIn-modal bg-white w-80 md:w-96 h-auto p-2 m-auto relative"
                        variants={body}
                        // This div doesnt need hidden and visible props as stated earlier
                    >
            <div className='nav-flex'>
                <div className='logo'>YPC</div>
                <div className='menu-btn menu-two'>
                    {buttons.map((btn,index)=> {
                        return <div key={index} onClick={()=> handleClick(index)} className={`${index === id && "active"}`}>{btn}</div>
                    })}
                </div>
                    <AiFillCloseSquare className='menuBtn2' onClick={()=> setIsMenuOpen(false)}/>
            </div>
                    
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Signin;
