import React, { Component } from 'react';

export default class MessageRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subject: this.props.subject,
            body: this.props.body,
            star: this.props.starred ? 'star fa fa-star' : 'star fa fa-star-o',
            hasRead: this.props.read ? 'read' : 'unread',
            isSelected: this.props.selected ? 'selected' : null,
            viewing: false,
        }
    };

    handleChange = (event) => {
        console.log(event.target.name)
        this.setState({
          [event.target.name]: event.target.value
        })
      };

    toggleBody = () => {
        this.setState({
            viewing: !this.state.viewing
        })
    }

    handleMessageBody = () => {
        const viewMessage = (
            <div className="row message-body">
                <div className="col-xs-11 col-xs-offset-1">
                    {this.state.body}
                </div>
            </div>
        )
        return this.state.viewing ? viewMessage :  null
    }
    
    render() {
        return (
            <div>
                <div className={`row message ${this.state.hasRead} ${this.state.isSelected}`}>
                    <div className="col-xs-1">
                        <div className="row">
                            <div className="col-xs-2">
                                <input type="checkbox" checked={this.state.isSelected} name="checkBox" onChange={this.handleChange} />
                            </div>
                            <div className="col-xs-2">
                                <i name="star" className={this.state.star} onClick={this.handleChange}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-11" name="viewing" onClick ={this.toggleBody}>
                        {this.state.subject}
                    </div>
                </div>
                {
                    this.handleMessageBody()
                }
            </div>
        )
    };
};