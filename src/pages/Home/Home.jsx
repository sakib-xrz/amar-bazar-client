import React from 'react';
import Category from '../../components/Category/Category';
import Heading from '../../components/Heading/Heading';
import Banner from '../../components/Slider/Banner';
import Trending from '../../components/Trending/Trending';

const Home = () => {
    return (
      <div className="space-y-10">
        <Banner />
        <div>
          <Heading name={"Product"} span={"Category"} />
          <Category />
        </div>
        <div>
          <Heading name={"Trending"} span={"Product"} />
          <Trending />
        </div>
      </div>
    );
};

export default Home;