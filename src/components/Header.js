import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSketch, faHtml5, faCss3Alt, faJs, faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Micaiah Buttars</strong><br /></h1>
                    <span>Web Developer | UX Designer</span>
                    <br/>
                    <div className='fa-icons'>
                        <div className='fa-icon'>
                            <FontAwesomeIcon icon={faSketch} size='lg'/>
                            <label className='icon-label'>&#8226; Sketch</label>
                        </div>
                        <div className='fa-icon'>
                            <FontAwesomeIcon icon={faHtml5} size='lg'/>
                            <label className='icon-label'>&#8226; HTML 5</label>
                        </div>
                        <div className='fa-icon'>
                            <FontAwesomeIcon icon={faCss3Alt} size='lg'/>
                            <label className='icon-label'>&#8226; CSS 3</label>
                        </div>
                        <div className='fa-icon'>
                            <FontAwesomeIcon icon={faJs} size='lg'/>
                            <label className='icon-label'>&#8226; Javascript</label>
                        </div>
                        <div className='fa-icon'>
                            <FontAwesomeIcon icon={faReact} size='lg'/>
                            <label className='icon-label'>&#8226; React</label>
                        </div>
                        <div className='fa-icon'>
                            <FontAwesomeIcon icon={faNodeJs} size='lg'/>
                            <label className='icon-label'>&#8226; NodeJS</label>
                        </div>
                    </div>


                </div>
                
                <Footer />
            </header>
        )
    }
}

export default Header
