import React, { Component } from 'react';

export default class MessageRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewing: false,
        }
    };

    toggleBody = () => {
        this.setState({
            viewing: !this.state.viewing
        })
    };

    toggleRead = () => {
        return this.props.read ? "read" : "unread";
    }

    toggleSelected = () => {
        return this.props.selected ? "selected" : null;
    }

    handleSelectStatus = () => {
        return this.props.selected ? true : false
    }

    handleStarStatus = () => {
        const activeStar = 'star fa fa-star';
        const notStar = 'star fa fa-star-o';
        if(this.props.starred) {
            return activeStar
        } else { return notStar}
    };

    handleMessageBody = () => {
        const viewMessage = (
            <div className="row message-body">
                <div className="col-xs-11 col-xs-offset-1">
                    {this.props.body}
                </div>
            </div>
        )
        return this.state.viewing ? viewMessage :  null
    };

    generateTags = () => {
        const tags = this.props.labels;
        return tags.map(target => (<span className="label label-warning">{target}</span>))
    }
    
    render() {
        return (
            <div>
                <div className={`row message ${this.toggleRead()} ${this.toggleSelected()}`}>
                    <div className="col-xs-1">
                        <div className="row">
                            <div className="col-xs-2">
                                <input type="checkbox" checked={this.handleSelectStatus()} name="isSelected" onChange={() => this.props.toggleSelection(this.props.id)} />
                            </div>
                            <div className="col-xs-2">
                                <i name="starred" className={this.handleStarStatus()} onClick={() => this.props.toggleStar(this.props.id)}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-11" name="viewing" onClick ={this.toggleBody}>
                        {this.generateTags()}
                        {this.props.subject}
                    </div>
                </div>
                {
                    this.handleMessageBody()
                }
            </div>
        )
    };
};