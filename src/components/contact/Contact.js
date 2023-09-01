import React from 'react';
import './contact.css';
import svg1 from '../../assets/Mention-rafiki.svg'

const Contact = () => {
  return (
    <section className="contact" id='contact'>
          <h1 className='heading'>Contact Us</h1>
          <div className="row">
            <div className="image">
                <img src={svg1} alt="" />
            </div>
            <div className="form-container">
                <form action="" >
                    <div className="inputBox">
                        <input type="text" placeholder='first name' />
                        <input type="text" placeholder='last name' />
                    </div>
                    <input type="email" placeholder='email'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
                    <input type="submit" value="send" />
                </form>
            </div>
          </div>
    </section>
  )
}

export default Contact
