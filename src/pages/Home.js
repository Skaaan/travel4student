import React from 'react';
import Countires from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Countires />
        </div>
    );
};

export default Home;