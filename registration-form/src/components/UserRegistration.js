import React, { Component ,} from "react";
import { newUserDetail } from "../actions/userDetailAction";
import {connect} from "react-redux";



class UserRegistration extends Component {
  state = {
    fullName: "",
    email: "",
    gender: "",
    department: "",
    phone: "",
    description: "",
  };


  onChange = (e) => {
   
    this.setState({ ...this.state,[e.target.name]: e.target.value });
    
  };


  onSubmit = async(e) => {
    e.preventDefault();
 
    const userData = {
      fullName:this.state.fullName,
      email:this.state.email,
      gender:this.state.gender,
      department:this.state.department,
      phone:this.state.phone,
      description:this.state.description
    }
  

    await this.props.newUserDetail(userData);

    
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Registration Form</h1>
        <div>
          <label>Name :</label>
          <input
            type="text"
            value={this.state.fullName}
            name="fullName"
            onChange={this.onChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={this.state.email}
            name="email"
            onChange={this.onChange}
          />
        </div>
        <div>
          <label>Gender :</label>
          <label>
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={this.onChange}
              checked={this.state.gender === "male"}
            />
            <span>Male</span>
          </label>
          <label>
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={this.onChange}
              checked={this.state.gender === "female"}
            />
            <span>Female</span>
          </label>
          <label>
            <input
              type="radio"
              value="others"
              name="gender"
              onChange={this.onChange}
              checked={this.state.gender === "others"}
            />
            <span>Others</span>
          </label>
        </div>
        <div>
          <label>
            Degree :
            <select defaultValue="----" name="department" onChange={this.onChange}>
              <option value="BE" >BE</option>
              <option value="Bsc" >Bsc</option>
              <option value="BCom" >Bcom</option>
            </select>
          </label>
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="number"
            value={this.state.phone}
            name="phone"
            onChange={this.onChange}
          />
        </div>
        <div>
          <label>Descripition:</label>
          <textarea
            value={this.state.description}
            name="description"
            onChange={this.onChange}
          />
        </div>
        <button style={{padding:"1rem"}}type="submit">Submit</button>
     
      </form>
    );
  }
}

const mapStateToProps = (state)=>({
  user:state.userDetails.user
})


  


export default connect(mapStateToProps,{newUserDetail})(UserRegistration);
