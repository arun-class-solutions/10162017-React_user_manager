import React, { Component } from "react";
import axios from "axios";

class EditUser extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: ""
    }
  }

  componentDidMount() {
    const userId = this.props.match.params.id;

    axios.request({
      method: "GET",
      url: "http://myapi-profstream.herokuapp.com/api/ab1ed4/persons/" + userId
    })
    .then((response) => {
      this.setState(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <div className="small-container">
        	<h1>User Manager</h1>

        	<div>
        		<a href="#" className="btn btn-primary">Back</a>
        	</div>
        </div>

        <div className="small-container margin-top-20">
        	<div className="well">
        		<div className="bold">
        			First Name
        		</div>
        		<div className="margin-top-20">
        			<input name="firstname" type="text" className="form-control" value={this.state.firstname} />
        		</div>
        		<div className="bold margin-top-20">
        			Last Name
        		</div>
        		<div className="margin-top-20">
        			<input name="lastname" type="text" className="form-control" value={this.state.lastname} />
        		</div>
        		<div className="bold margin-top-20">
        			Username
        		</div>
        		<div className="margin-top-20">
        			<input name="username" type="text" className="form-control" value={this.state.username} />
        		</div>
        		<div className="bold margin-top-20">
        			Email
        		</div>
        		<div className="margin-top-20">
        			<input name="email" type="text" className="form-control" value={this.state.email} />
        		</div>
        		<div className="margin-top-20 txt-right">
        			<a href="#" className="btn btn-default">Cancel</a>
        			<button type="submit" className="btn btn-primary">Edit User</button>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default EditUser;
