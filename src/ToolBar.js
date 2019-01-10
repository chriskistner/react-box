import React, { Component } from 'react';

export default class ToolBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addLabel: 'default',
            removeLabel: 'default'
        }
    }

    countUnreadMessages = () => {
        const unread = this.props.inBox.filter(mail => mail.read === false);
        return unread.length
    }

    handleAddLabel = (event) => {
        this.props.addLabel(event.target.value);
        this.setState({
            addLabel: 'default'
          })
      };

    handleRemoveLabel = (event) => {
        this.props.removeLabel(event.target.value);
        this.setState({
            removeLabel: 'default'
        })
    };

    render() {
        return (
        <div className="row toolbar">
            <div className="col-md-12">
                <p className="pull-right">
                    <span className="badge badge">{this.countUnreadMessages()}</span>
                    unread messages
                </p>

                <a onClick={this.props.toggleForm} className="btn btn-danger" >
                <i className="fa fa-plus"></i>
                </a>

                <button className="btn btn-default" onClick={this.props.handleSelectAll}>
                    <i className="fa fa-check-square-o"></i>
                </button>

                <button onClick={this.props.markAsRead} className="btn btn-default">
                    Mark As Read
                </button>

                <button onClick={this.props.markAsUnread}className="btn btn-default">
                    Mark As Unread
                </button>

                <select name="addLabel" className="form-control label-select" value={this.state.addLabel} onChange={this.handleAddLabel}>
                    <option value="default">Apply label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <select name="removeLabel" className="form-control label-select" value={this.state.removeLabel} onChange={this.handleRemoveLabel}>
                    <option value="default">Remove label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <button onClick={this.props.deleteMessage} className="btn btn-default">
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
        )
    }
}