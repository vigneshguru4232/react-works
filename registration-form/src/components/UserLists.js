import React, { Component } from 'react';
import { newUserDetail } from "../actions/userDetailAction";
import {connect} from "react-redux";
import { v4 as uuidv4 } from 'uuid';

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
  
 
export default connect(mapStateToProps,{newUserDetail})(UserLists);