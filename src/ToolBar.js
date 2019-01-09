import React, { Component } from 'react';

export default class ToolBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    countUnreadMessages = () => {
        const unread
    }

    handleAddLabel = (event) => {
        this.props.addLabel(event.target.value);
      };

    handleRemoveLabel = (event) => {
        this.props.removeLabel(event.target.value);
    };

    render() {
        return (
        <div className="row toolbar">
            <div className="col-md-12">
                <p className="pull-right">
                    <span className="badge badge">2</span>
                    unread messages
                </p>

                <button className="btn btn-default" onClick={this.props.handleSelectAll}>
                    <i className="fa fa-check-square-o"></i>
                </button>

                <button onClick={this.props.markAsRead} className="btn btn-default">
                    Mark As Read
                </button>

                <button className="btn btn-default">
                    Mark As Unread
                </button>

                <select className="form-control label-select" onChange={this.handleAddLabel}>
                    <option>Apply label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <select className="form-control label-select" onChange={this.handleRemoveLabel}>
                    <option>Remove label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <button className="btn btn-default">
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
        )
    }
}