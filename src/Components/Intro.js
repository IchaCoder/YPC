import React from 'react';
import hero from '../images/Surface Pro 8 - 1.png'
import hero2 from '../images/Surface Pro 8 - 2.png'

const Intro = () => {
    return (
        <>
            <div className='intro'>
                <div className='text'>
                    <h1>We are the best</h1>
                    <h1>We are <span style={{color: "#ff4500"}}>YPC</span></h1>
                    <p>
                        Effortless web development & re-branding tailored to your needs 
                    </p>
                </div>
                <div className="hero" style={{position: "relative",}}>
                    <img src={hero} alt="hero-vector" className='vector' />
                </div>
            </div>
            <img src={hero2} alt="vector" className='hero2' />
        </>
    );
}

export default Intro;
