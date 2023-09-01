import React, { useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import $ from 'jquery';
import About from './components/about/About';
import Events from './components/events/Events';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
function App()  {
 
    // select button element and add a click event to it
   
    useEffect(() => {
      // Handle .fa-bars click
      $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
      });
      
      // Handle window load and scroll
      $(window).on('load scroll', function() {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
  
        // Check the scroll position and update the header's styling
        if ($(window).scrollTop() > 30) {
          $('.header').css({
            'background': '#6c5ce7',
            'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)'
          });
        } else {
          $('.header').css({
            'background': 'none',
            'box-shadow': 'none'
          });
        }
      });
      
      // Cleanup to unbind the events when the component is unmounted
      return () => {
        $('.fa-bars').off('click');
        $(window).off('load scroll');
      };
    }, []); 
  
  return (
   <div className='App'>
     <Home />
     <About />
     <Events />
     <Team />
     <Contact />
   </div>
  );
}

export default App;
