import React, { Component } from 'react'
import {useStore} from './store'

function Preview(props) {
    const open =  useStore(state => state.open)
    
        return (
            <div>
                <h1>Hello World</h1>
        <div>{console.log(open)}</div>
            </div>
        )
    
}

export default Preview;
