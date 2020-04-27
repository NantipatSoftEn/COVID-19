import React from 'react';
import Navbar from './Navbar';
import Container from './Container';
import CardChart from './CardChart';
import Footer from './Footer'
import Table from './Table'
const Main = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Navbar />
      <Container />
      <hr className="border-b-2 border-gray-400 my-8 mx-4" />
      <CardChart />
      <Table />
      <Footer />
    </div>
  );
};
export default Main;
