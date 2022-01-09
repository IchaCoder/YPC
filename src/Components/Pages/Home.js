import React from 'react';
import Intro from '../Intro';
import Navbar from '../Navbar';
import Mobilemenu from '../Mobilemenu'
import Footer from '../Footer';


const Home = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <Mobilemenu />
            <Footer />
        </>
    );
}

export default Home;
