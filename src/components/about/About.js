import React from 'react';
import './about.css';
import cesalogo from '../../assets/cesa.png';
import csilogo from '../../assets/csi.png'

const About = () => {
    return (
        <section className='about' id='about'>
            <h1 className="heading">about us</h1>
            <div className='row'>
                <div className="content">
                    <h3>CESA</h3>
                    <p>As a member of the Computer Society of India committee, you'll enjoy networking
                        opportunities, skill development, access to the latest trends, career advancement
                        prospects, community contribution, recognition, and valuable resources</p>
                    <a href="#"><button className='btn'>JOIN US</button></a>
                </div>
                <div className="image">
                    <img src={cesalogo} alt="cesalogo" />
                </div>
                <div className="content">
                    <h3>CSI</h3>
                    <p>The main objectives of the Computer Society of India (CSI)
                         are to promote and advance computer science, facilitate
                          knowledge sharing, foster ethical practices, and 
                          contribute to the growth of the IT industry in India.</p>
                    <a href="#"><button className='btn'>JOIN US</button></a>
                </div>
                <div className="image">
                    <img src={csilogo} alt="cesalogo" />
                </div>
            </div>

        </section>
    )
}

export default About
