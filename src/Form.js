import React, { Component } from 'react';

class Form extends Component {
    static defaultProps = {
        onSave() { }
    }

    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSave(this.state.inputText);
        this.setState({ inputText: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    name="inputText"
                    value={this.state.inputText}
                    onChange={this.handleChange}
                />
                <button type="submit">save</button>
            </form>
        );
    }
}

export default Form;