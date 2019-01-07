import React, { Component } from 'react';
import MessageRow from './MessageRow.js';

export default class InBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            opened: null
        }
    }

    render() {
        const messages = this.props.inBox;
        return(
            <div className="container">
                {messages.map(mail => {return <MessageRow toggleStar={this.props.toggleStar} key= {mail.id} {...mail}/>})}
            </div>
        )
    }
}