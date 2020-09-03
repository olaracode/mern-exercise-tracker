import React, { Component } from 'react'
import axios from "axios"

export default class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    };
    errors = [];
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const user = {
            username: this.state.username
        }


        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
        })
    }
    render() {
        return (
            <div>
                  <h3>Create new user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username(in minutes)</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
