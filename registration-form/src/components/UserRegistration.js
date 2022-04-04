import React, { Component } from "react";
import { newUserDetail } from "../actions/userDetailAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const genderArray = [
  { value: "male", displayGender: "Male", id: 1 },
  { value: "female", displayGender: "Female", id: 2 },
  { value: "others", displayGender: "Others", id: 3 },
];

const department = [
  { value: "Computer Science", id: 1 },
  { value: "Biology", id: 2 },
  { value: "Physics", id: 3 },
];

class UserRegistration extends Component {
  state = {
    fullName: "",
    email: "",
    gender: "",
    department: "",
    phone: "",
    description: "",
    validator: false,
    userFindingError: "",
    emailError: false,
    error: false,
  };

  validateEmail(email) {
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        emailError: false,
        email: email,
      });
    } else {
      this.setState({
        error: true,
        emailError: true,
      });
    }
  }
/**
 * @function addingDetails
 * @param 
 * sending new registerd user to the array by checking various condition.
 */

  addingDetails = () =>{
    const userData = {
      fullName: this.state.fullName,
      email: this.state.email,
      gender: this.state.gender,
      department: this.state.department,
      phone: this.state.phone,
      description: this.state.description,
    };
    if (this.state.error === false) {
      if (
        this.state.fullName.length > 0 &&
        this.state.email.length > 0 &&
        this.state.gender.length > 0 &&
        this.state.department.length > 0 &&
        this.state.phone.length > 0 &&
        this.state.description.length > 0
      ) {
        const findingUser = this.props.users.find(
          ({ email }) => email === this.state.email
        );
        //console.log("finding user ==",findingUser)
        if (findingUser) {
          this.setState({ userFindingError: "* User already registered" });
        } else {
          this.setState({ userFindingError: "* Registered Successfully" });
          this.props.newUserDetail(userData);
        }
      }
    }
  }

 /**
  * @function onChange
  * @param {*} e 
  * change the state value according to user input.
  */
  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    // if(e.target.name==='email'){
    //   this.validateEmail(e.target.value)
    // }
  };

  /**
   * @function onSubmit
   * @param {*} e
   * Submit the form 
   */

  onSubmit = async (e) => {
    e.preventDefault();

    this.setState({ validator: true });

    await this.validateEmail(this.state.email);

    await this.addingDetails()
    this.setState({ error: false });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Registration Form</h1>
        <p style={{ color: "red" }}>{this.state.userFindingError}</p>
        <div>
          <label>Name :</label>
          <input
            type="text"
            value={this.state.fullName}
            name="fullName"
            onChange={this.onChange}
          />
          {this.state.validator && this.state.fullName.length <= 0 && (
            <div>
              <p className="errorhandle">Enter the Name</p>
            </div>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.onChange}
          />
          {this.state.validator && this.state.email.length <= 0 && (
            <div>
              <p className="errorhandle">Enter Email</p>
            </div>
          )}
          {this.state.emailError && (
            <span style={{ color: "red" }}>
              Please Enter valid email address
            </span>
          )}
        </div>
        <div>
          <label>Gender :</label>

          {genderArray.map((gender) => (
            <label key={gender.id}>
              <input
                type="radio"
                value={gender.value}
                name="gender"
                onChange={this.onChange}
                checked={this.state.gender === gender.value}
              />
              <span>{gender.displayGender}</span>
            </label>
          ))}
          {this.state.validator && this.state.gender.length <= 0 && (
            <div>
              <p className="errorhandle">Select gender</p>
            </div>
          )}
        </div>
        <div>
          <label>
            Degree :
            <select
              defaultValue="----"
              name="department"
              onChange={this.onChange}
            >
              {department.map((names) => (
                <option key={names.id} value={names.value}>
                  {names.value}
                </option>
              ))}
            </select>
          </label>
          {this.state.validator && this.state.department.length <= 0 && (
            <div>
              <p className="errorhandle">Enter the Department</p>
            </div>
          )}
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="number"
            value={this.state.phone}
            name="phone"
            onChange={this.onChange}
          />
          {this.state.validator && this.state.phone.length <= 0 && (
            <div>
              <p className="errorhandle">Enter the Phone</p>
            </div>
          )}
        </div>
        <div>
          <label>Descripition:</label>
          <textarea
            value={this.state.description}
            name="description"
            onChange={this.onChange}
          />
          {this.state.validator && this.state.description.length <= 0 && (
            <div>
              <p className="errorhandle">Enter the description</p>
            </div>
          )}
        </div>
        <button style={{ padding: "1rem" }} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userDetails.users,
});

UserRegistration.propTypes = {
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
  newUserDetail:PropTypes.func
};

export default connect(mapStateToProps, { newUserDetail })(UserRegistration);

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { newUserDetail } from "../actions/userDetailAction";

// function UserRegistration() {
//   const genderArray = [
//     { value: "male", displayGender: "Male", id: 1 },
//     { value: "female", displayGender: "Female", id: 2 },
//     { value: "others", displayGender: "Others", id: 3 },
//   ];
//   const department = [
//     { value: "Computer Science", id: 1 },
//     { value: "Biology", id: 2 },
//     { value: "Physics", id: 3 },
//   ];

//   const [userValues, setUserValues] = useState({
//     fullName: "",
//     email: "",
//     gender: "",
//     phone: "",
//     department: "",
//     description: "",
//   });

//   const [validator,setValidator] =useState(false)

//   const userDetails = useSelector((state) => state.userDetails.users);

//   const dispatch = useDispatch();

//   // console.log("userDetails===", userDetails);
//   const onChange = (e) => {
//     setUserValues({ ...userValues, [e.target.name]: e.target.value });
//     //console.log("onCHnage===",e.target.value)
//   };

//   //console.log("Submit values ====", userDetails)
//   const onSubmit = (e) => {
//     setValidator(true)
//     e.preventDefault();
//     dispatch(newUserDetail(userValues));
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <h1>Register Form</h1>
//       <div>
//         <label>Name:</label>
//         <input type="text" onChange={onChange} name="fullName" />
//         {validator && userValues.fullName.length <= 0 ? (
//             <div>
//               <p className="errorhandle">Enter the Name</p>
//             </div>
//           ) : null}
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" onChange={onChange} name="email" />
//         {validator && userValues.email.length <= 0 ? (
//             <div>
//               <p className="errorhandle">Enter the Name</p>
//             </div>
//           ) : null}
//       </div>
//       <div>
//         <label>Gender:</label>
//         {genderArray.map((gender) => (
//           <label key={gender.id}>
//             <input
//               type="radio"
//               value={gender.value}
//               name="gender"
//               onChange={onChange}
//               checked={userValues.gender === gender.value}
//             />
//             <span>{gender.displayGender}</span>
//           </label>
//         ))}
//          {validator && userValues.gender.length <= 0 ? (
//             <div>
//               <p className="errorhandle">Enter the Name</p>
//             </div>
//           ) : null}
//       </div>
//       <div>
//         <label>Department :</label>
//         <select defaultValue="----" name="department" onChange={onChange}>
//           {department.map((names) => (
//             <option key={names.id} value={names.value}>
//               {names.value}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label>Phone:</label>
//         <input type="number" onChange={onChange} name="phone" />
//       </div>
//       <div>
//         <label>Description:</label>
//         <textarea onChange={onChange} name="description" />
//       </div>

//       <button type="submit" style={{ padding: "1rem" }}>
//         {" "}
//         Submit
//       </button>
//     </form>
//   );
// }

// export default UserRegistration;
