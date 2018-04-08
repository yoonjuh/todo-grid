import React from 'react';
import SideBar from './SdideBar';
import Header from './Header';
import Realtors from './Realtors';
import Features from './Features';
import Story from './Story';
import Homes from './Homes';
import Gallery from './Gallery';
import Footer from './Footer';

const App = () => (
  <div className="container">
    <SideBar />
    <Header />
    <Realtors />
    <Features />
    <Story />
    <Homes />
    <Gallery />
    <Footer />
  </div>
);

export default App;
