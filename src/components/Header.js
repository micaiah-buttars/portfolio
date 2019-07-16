import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Micaiah Buttars</strong><br />
                    Web Developer  | 
                    UX Designer | DevMountain Alumnus
                    </h1>
                    
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
