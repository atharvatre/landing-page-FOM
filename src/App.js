import React, { useState } from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import about1 from './images/100050994_2624745707781210_2870092933271388160_n.jpg'
import Footer from './components/Footer';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={about1} title='We are passionate about meditation, yoga, and relaxation. Our work involves innovation-led manufacturing of an eccentric range of products that facilitate ease in practicing yoga and meditation techniques for beginners as well as experts.' button='Discover Now'/>
      <Feature/>
      <Footer/>
    </div>
  );
}

export default App;
