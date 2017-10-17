import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "./actions/users";
import { bindActionCreators } from "redux";

class EditUser extends Component {
  componentDidMount() {
    this
    .props
    .userActions
    .getOneUser(this.props.match.params.id);
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
        			<input name="firstname" type="text" className="form-control" value={this.props.users.oneUser.firstname} />
        		</div>
        		<div className="bold margin-top-20">
        			Last Name
        		</div>
        		<div className="margin-top-20">
        			<input name="lastname" type="text" className="form-control" value={this.props.users.oneUser.lastname} />
        		</div>
        		<div className="bold margin-top-20">
        			Username
        		</div>
        		<div className="margin-top-20">
        			<input name="username" type="text" className="form-control" value={this.props.users.oneUser.username} />
        		</div>
        		<div className="bold margin-top-20">
        			Email
        		</div>
        		<div className="margin-top-20">
        			<input name="email" type="text" className="form-control" value={this.props.users.oneUser.email} />
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

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
