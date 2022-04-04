import React, { Component } from 'react';
import { newUserDetail } from "../actions/userDetailAction";
import {connect} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";

 class UserLists extends Component {
   
  render() {
  
    return (
      <div>{this.props.users.map(user=>(
        <div key={uuidv4()} style={{border:"2px solid black",padding:"1rem"}}>
        <li>Name:{user.fullName}</li>
        <li>email:{user.email}</li>
        <li>gender:{user.gender}</li>
        <li>Department:{user.department}</li>
        <li>PhoneNumber:{user.phone}</li>
        <li>Description:{user.description}</li>
        </div>
      ))}</div>
    )
  }
}
const mapStateToProps = (state)=>({
    users:state.userDetails.users
  })

  UserLists.propTypes ={
    users: PropTypes.arrayOf(
      PropTypes.exact({
        fullName: PropTypes.string,
        email: PropTypes.string,
        gender: PropTypes.string,
        department: PropTypes.string,
        phone: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }
 
export default connect(mapStateToProps,{newUserDetail})(UserLists);