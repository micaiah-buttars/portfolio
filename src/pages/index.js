import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import airbnb1 from '../assets/images/fulls/airbnb1.png'
import airbnb2 from '../assets/images/fulls/airbnb2.png'
import airbnb3 from '../assets/images/fulls/airbnb3.png'
import ontarget1 from '../assets/images/fulls/ontarget1.png'
import ontarget2 from'../assets/images/fulls/ontarget2.png'
import ontarget3 from '../assets/images/fulls/ontarget3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSketch, faCss3Alt, faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = "Micaiah Buttars - Portfolio"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>
                    <div className='planets'>
                        <div className='solar-syst'>
                            <div className='sun'></div>
                            <div className='mercury-line'></div>
                            <div className='mercury'></div>
                            <div className='venus'></div>
                            <div className='earth'></div> 
                            <div className='mars'></div>
                            <div className='jupiter-inner'></div>
                            <div className='jupiter-outer'></div>
                            <div className='jupiter'></div>
                            <div className='saturn'></div>
                            <div className='uranus'></div>
                            <div className='neptune-line'></div>
                            <div className='neptune'></div>
                        </div>
                    </div>

                <div id="main">
                    <section id="one">
                        <header className="major">
                        </header>
                        <p> 
                        <h2 className='my-name'>I'm <span>Micaiah Buttars</span>,</h2>
                        a Web Developer and UX Designer from Salt Lake City, Utah.
                            <br/><br/>
                        My long-standing appreciation of design and interest in human psychology is what initially led me to pursue UX Design, which then sparked a desire to know how to build out and code the designs I made.
                            <br/><br/>
                        As a culmination of my interests in art, music, video games, and my knack for trying to make <br/>
                        creative endeavours into realities; I’m currently in the process of teaching myself C++ to make a video game from scratch.     
                        </p>
                    </section>

                    <section id="two">
                        <h2>Recent Projects</h2>

                        <div className='project'>
                            <h1>Airbnb Clone</h1>
                            <span>May 2019 |</span>
                            <span>Web Development |</span>
                            <label><FontAwesomeIcon icon={faReact}/> React</label>
                            <label><FontAwesomeIcon icon={faCss3Alt}/> CSS</label>
                            <label><FontAwesomeIcon icon={faSketch}/> Sketch</label>
                            <br/><br/>
                            <p>
                                <span>Hosted project can be found <a href='http://138.68.247.136:4444/#/' target='_blank' rel="noopener noreferrer">here</a>.</span>
                                <br/>
                                Alongside Lauren Irish and Spencer Vorhees, my classmates at DevMountain,
                                <br/>
                                we faithfully recreated Airbnb's desktop website to demonstrate our abilities as full stack developers
                                by using a blend of outside technologies &mdash; such as react-image-lightbox, and Airbnb's own react-dates &mdash;
                                as well as our own homebrewed functionalities, such as the on-hover effects of the listing view images.
                            </p>
                            <div className='images-container'>
                                <img src={airbnb1}/>
                                <img src={airbnb2}/>
                                <img src={airbnb3}/>
                            </div>
                        </div>
                            <br/>
                        <div className='project'>
                            <h1>OnTarget</h1>
                            <span>April 2019 &mdash; Present |</span>
                            <span>Web Development |</span>
                            <label><FontAwesomeIcon icon={faReact}/> React</label>
                            <label><FontAwesomeIcon icon={faCss3Alt}/> CSS</label>
                            <label><FontAwesomeIcon icon={faNodeJs}/> NodeJs</label>
                            <br/><br/>
                            <p>
                                <span>Hosted project can be found <a href='http://142.93.21.22:3557/#/' target='_blank' rel="noopener noreferrer">here</a>.</span>
                                <br/>
                                OnTarget began as a personal project at DevMountain intended to assess my skills
                                with the basics of HTML, JavaScript, and React.
                                It has moved beyond that assessment into a mobile responsive web app that I am fully developing.
                                <br/>
                                <br/>
                                As the child of an educator who had a specific need, this project was designed to meet the needs of teachers that work with students with behavioral concerns.
                                OnTarget seeks to streamline the paper/pencil data keeping process for teachers and paraprofessionals.
                                By digitizing this process, valuable time is saved, and student behavioral data is immediately available at a teacher's fingertips.
                                This allows educators to better assess the effectiveness of a student's behavior plan, and easily spot behavioral patterns in a given interval.
                                <br/>
                                <br/>
                                OnTarget will be in beta testing at South Cache Middle School, Hyrum, UT during the 2019-20 school year.
                            </p>
                            <div className='images-container'>
                                <img src={ontarget1}/>
                                <img src={ontarget2}/>
                                <img src={ontarget3}/>
                            </div>
                        </div>

                        {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
                    
                    </section>

                    <section id="three">
                        <h2 id='contact'>Get In Touch</h2>
                        <p>Please feel free to reach out. I am more than happy to answer any project related questions or inquiries.</p>
                        <div className="row">
                            <div >
                                <form name='contact' method="post" data-netlify='true' netlify-honeypot='address' netlify>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                        <div className="address-field"><input name="address" autocomplete="off"/></div>
                                    </div>
                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message" /></li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </section>
                    

                </div>

            </Layout>
        )
    }
}

export default HomeIndex