import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href='https://github.com/micaiah-buttars' className='icon'>
                            <FontAwesomeIcon icon={faGithub} size='lg'/>
                            <span className="label">Github</span>
                        </a></li>
                        <li><a href='#contact' className='icon'>
                            <FontAwesomeIcon icon={faEnvelope} size='lg'/>
                            <span className="label">Email</span>
                        </a></li>
                       
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
