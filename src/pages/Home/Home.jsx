import React from 'react';
import Category from '../../components/Category/Category';
import Heading from '../../components/Heading/Heading';
import Banner from '../../components/Slider/Banner';
import Grid from '../../components/Product/Grid';
import mobile from "../../assets/mobile/mobile-01.jpg"

const products = [
  {
    name: "Oppo A15s",
    img: mobile,
    price: 9450
  },
  {
    name: "Oppo A15s",
    img: mobile,
    price: 9450
  },
  {
    name: "Oppo A15s",
    img: mobile,
    price: 9450
  },
  {
    name: "Oppo A15s",
    img: mobile,
    price: 9450
  },
]

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
          <div className="container mx-auto p-5 grid grid-cols-12 md:gap-10">
            {products.map((product, i) => (
              <Grid
                key={i}
                img={product.img}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Home;