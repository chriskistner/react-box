import React, { Component } from 'react';
import MessageRow from './MessageRow.js';

export default class InBox extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className="container">
                displayedBooks.map(mail => {return <MessageRow key= {mail.id} addBook={() => this.props.addToCart(book.id)} {...book}/>})}
            </div>
        )
    }
}