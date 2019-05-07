import React from 'react'

import CSS from './CSS'

const Icon = props => {
    switch(props.name){
        case 'CSS':
            return <CSS {...props}/>
        // case 'html':
        //     return <HTML {...props}/>
        // case 'javascript':
        //     return <JS {...props}/>
        // case 'react':
        //     return <React {...props}/>
        default:
            return;
    }
}

export default Icon