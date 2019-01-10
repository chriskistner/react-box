import React, { Component } from 'react';

export default class ComposeForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subject: '',
            body: ''
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      };

    render() {
        return (
            <form className="form-horizontal well" onSubmit={(event) => {event.preventDefault()
            this.props.submitForm(this.state)}} >
            <div className="form-group">
                <div className="col-sm-8 col-sm-offset-2">
                    <h4>Compose Message</h4>
                </div>
            </div>
            <div className="form-group">
                <label for="subject" class="col-sm-2 control-label">Subject</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group">
                <label for="body" class="col-sm-2 control-label">Body</label>
                <div className="col-sm-8">
                    <textarea name="body" id="body" className="form-control" onChange={this.handleChange}></textarea>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-8 col-sm-offset-2">
                    <input type="submit" value="Send" className="btn btn-primary" />
                </div>
            </div>
        </form>
        )
    }
}

