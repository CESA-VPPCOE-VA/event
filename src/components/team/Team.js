import React from 'react';
import './team.css';
import png1 from '../../assets/shantanu.jpg'
import png3 from '../../assets/pradnya.jpg'
import png2 from '../../assets/vinesh.jpg'
import png4 from '../../assets/yash_p.jpg'
import png5 from '../../assets/tanmay.jpg'
import png6 from '../../assets/sahil.jpg'
import png7 from '../../assets/yash_c.jpg'
import png8 from '../../assets/yash_d.jpg'
import png9 from '../../assets/subiya.jpg'


const Team = () => {
    return (
        <section className='team' id='team'>
            <h1 className='heading'>
                our Team
            </h1>
            <div className="row">
                <div className="card">
                    <div className="image">
                        <img src={png1} alt="" />
                    </div>
                    <div className="info">
                        <h3>Shantanu Vedante</h3>
                        <span>CESA Chairman</span>
                        <div className="icons">

                            <a href="#" className='fab fa-facebook-f'></a>
                            <a href="#" className='fab fa-twitter'></a>
                            <a href="#" className='fab fa-instagram'></a>
                        </div>
                    </div>
                </div>


                <div className="card">
                    <div className="image">
                        <img src={png2} alt="" />
                    </div>
                    <div className="info">
                        <h3>Vinesh Rathod</h3>
                        <span>CSI Chairman</span>
                        <div className="icons">
                            <a href="#" className='fab fa-facebook-f'></a>
                            <a href="#" className='fab fa-twitter'></a>
                            <a href="#" className='fab fa-instagram'></a>
                        </div>
                    </div>
                </div>


               
                <div className="card">
                    <div className="image">
                        <img src={png3} alt="" />
                    </div>
                    <div className="info">
                        <h3>Pradnya Bhoir</h3>
                        <span>Secretary</span>
                        <div className="icons">
                            <a href="#" className='fab fa-facebook-f'></a>
                            <a href="#" className='fab fa-twitter'></a>
                            <a href="#" className='fab fa-instagram'></a>
                        </div>
                    </div>
                </div>
             
                <div className="card">
                    <div className="image">
                        <img src={png4} alt="" />
                    </div>
                    <div className="info">
                        <h3>Yash Pimpalkar</h3>
                        <span>Technical Head</span>
                        <div className="icons">
                            <a href="#" className='fab fa-facebook-f'></a>
                            <a href="#" className='fab fa-twitter'></a>
                            <a href="#" className='fab fa-instagram'></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={png5} alt="" />
                    </div>
                    <div className="info">
                        <h3>Tanmay Sakpal</h3>
                        <span>Join Secretary</span>
                        <div className="icons">
                            <a href="#" className='fab fa-facebook-f'></a>
                            <a href="#" className='fab fa-twitter'></a>
                            <a href="#" className='fab fa-instagram'></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={png6} alt="" />
                    </div>
                    <div className="info">
                        <h3>Sahil Kuware</h3>
                        <span>Infra</span>
                        <div className="icons">
                            <a href="#" className='fab fa-facebook-f'></a>
                            <a href="#" className='fab fa-twitter'></a>
                            <a href="#" className='fab fa-instagram'></a>
                        </div>
                    </div>
                </div>
               

                <div className="card">
                    <div className="image">
                        <img src={png7} alt="" />
                    </div>
                    <div className="info">
                        <h3>Yash Chabukswar</h3>
                        <span>Documentation</span>
                        <div className="icons">
                            <a href="#" className='fab fa-facebook-f'></a>
                            <a href="#" className='fab fa-twitter'></a>
                            <a href="#" className='fab fa-instagram'></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image">
                        <img src={png8} alt="" />
                    </div>
                    <div className="info">
                        <h3>Yash Deosarkar</h3>
                        <span>Treasurer</span>
                        <div className="icons">
                            <a href="#" className='fab fa-facebook-f'></a>
                            <a href="#" className='fab fa-twitter'></a>
                            <a href="#" className='fab fa-instagram'></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={png9} alt="" />
                    </div>
                    <div className="info">
                        <h3>Subiya Sayyad</h3>
                        <span>Publicity</span>
                        <div className="icons">
                            <a href="#" className='fab fa-facebook-f'></a>
                            <a href="#" className='fab fa-twitter'></a>
                            <a href="#" className='fab fa-instagram'></a>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Team
