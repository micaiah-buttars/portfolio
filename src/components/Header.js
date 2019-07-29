import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Micaiah Buttars</strong><br /></h1>
                    <span>Web Developer | UX Designer</span>
                    <br/>
                    <span>Salt Lake City, UT</span>
                </div>
                
                <Footer />
            </header>
        )
    }
}

export default Header
