import React from 'react';
import './events.css';
import img1 from '../../assets/sv.jpg';
import img2 from '../../assets/bob.png';
import img3 from '../../assets/seminar.png'

const Events = () => {
    return (
        <section className="events" id='events'>
            <h1 className="heading">OUR RECENT EVENTS</h1>
            <div className="row">
                <div className="image">
                    <img src={img1} alt="" />
                </div>
                <div className="content">
                    <h3>SHROUDED VALOR</h3>
                    <p>Introducing "SHROUDED VALOR" - an event organized by CESA to celebrate India's Independence Day.</p>
                        <a href="#"><button className='btn'>READ MORE</button></a>
                </div>
            </div>
            <div className="row">
                
                <div className="content">
                    <h3>Battle of Brains</h3>
                    <p>Introducing a program for students to develop C programming language skills and create related programs..</p>
                        <a href="#"><button className='btn'>READ MORE</button></a>
                </div>
                <div className="image">
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className="row">
            <div className="image">
                    <img src={img3} alt="" />
                </div>

                <div className="content">
                    <h3>Seminar</h3>
                    <p>Introducing a program for students to develop C programming language skills and create related programs..</p>
                        <a href="#"><button className='btn'>READ MORE</button></a>
                </div>
               
            </div>
        </section>
    )
}

export default Events
