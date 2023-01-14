import React from 'react';
import Category from '../../components/Category/Category';
import Banner from '../../components/Slider/Banner';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner />
            <Category />
        </div>
    );
};

export default Home;