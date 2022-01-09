import React from 'react';
import { BsFacebook, FcGoogle,BsLinkedin  } from 'react-icons/all'

const Footer = () => {
    return (
        <footer>
            <section>
                <div>
                    <h5>FAQ</h5>
                    <h5>Reviews</h5>
                    <h5 >Blog post</h5>
                </div>
                <div>
                    <h5>Press</h5>
                    <h5>Privacy policy</h5>
                    <h5>Site</h5>
                </div>
                <div>
                    <h5>Career</h5>
                    <h5>Event</h5>
                    <h5>Affilliate link</h5>
                </div>

            </section>
            <div>
                <h4>Terms and conditions</h4>
                <h4>Advertising information</h4>
            </div>
            <div className='social-icons'>
                <BsFacebook />
                <FcGoogle />
                <BsLinkedin />
            </div>
        </footer>
    );
}

export default Footer;
