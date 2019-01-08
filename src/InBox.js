import React, { Component } from 'react';
import MessageRow from './MessageRow.js';

export default class InBox extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const messages = this.props.inBox;
        console.log(messages)
        return(
            <div className="container">
                {messages.map(mail => {return <MessageRow toggleSelection={this.props.toggleSelection} toggleStar={this.props.toggleStar} key= {mail.id} {...mail}/>})}
            </div>
        )
    }
}