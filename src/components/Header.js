import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faSketch, faHtml5, faCss3Alt, faJs} from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Micaiah Buttars</strong><br /></h1>
                    <span>Web Developer | UX Designer</span>
                    <br/>
                    <FontAwesomeIcon icon={faSketch}/>
                    <FontAwesomeIcon icon={faHtml5}/>
                    <FontAwesomeIcon icon={faCss3Alt}/>
                    <FontAwesomeIcon icon={faJs}/>


                </div>
                
                <Footer />
            </header>
        )
    }
}

export default Header
