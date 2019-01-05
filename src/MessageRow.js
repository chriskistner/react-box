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
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      };
    
    render() {
        return (
            <div>
                <div className={`row message ${this.state.hasRead} ${this.state.isSelected}`}>
                    <div className="col-xs-1">
                        <div className="row">
                            <div className="col-xs-2">
                                <input type="checkbox" checked='checked' onChange={this.handleChange} />
                            </div>
                            <div className="col-xs-2">
                                <i className={this.state.star}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-11">
                        {this.state.subject}
                    </div>
                </div>
                <div className="row message-body">
                    <div className="col-xs-11 col-xs-offset-1">
                        {this.state.body}
                    </div>
                </div>
            </div>
        )
    }
};