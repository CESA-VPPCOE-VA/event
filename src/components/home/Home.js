import React from 'react';
import Navbar from '../navbar/Navbar';
import './home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
    <section id='home' className='home'>
           <h1 className="banner">CESA & CSI VPPCOE</h1>
           <h3 className="slogan">You have a vision.We have a team to get you there</h3>
           <a href="#"><button>Get started</button></a>
           
           <div className="wave wave1"></div>
           <div className="wave wave2"></div>
           <div className="wave wave3"></div>

           <div className="fas fa-cog nut1"></div>
           <div className="fas fa-cog nut2"></div>

    </section>
    </div>
  )
}

export default Home
