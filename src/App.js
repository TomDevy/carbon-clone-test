import React from 'react';
import Navbar from './assets/Navbar/Navbar';
import Home from './assets/Home/Home';
import Footer from './assets/Footer/Footer';
import Dropmenu from './assets/Dropmenu/Dropmenu';
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Dropmenu />
      <Home/>
      <Footer />
    </>
  );
}

export default App;