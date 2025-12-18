import React, { useState } from "react";
// import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import '../index.css';

const Registers = () => {
const navigate = useNavigate();

  const [show, setShow] = useState(false); //toggle btn

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevValues) => ({
      ...prevValues, //spread operator
      [name]: value,
    }));
    // or
    // setState({...state, [name]:value});
  };
  // register function
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // "/register"
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:state.name, email:state.email, password:state.password, confirm_password:state.confirm_password, phone:state.phone}),
    });
    const data = await response.json();
    console.log(data);
    

    if (!data.success) {
      alert("Enter valid Credentials");
    }else{
      navigate("/login");
    }

    //==================== OR ===================
  //     const {name, email, password} = state;
  //     // console.log(state);
  //     if(name && email && password){
  //       axios.post("http://localhost:5000/api/createuser",state)
  //       .then(res => console.log(res))

  //             }
  //             else{
  //               return(
  //               alert('invalid input')

  //               )
  //             }
  };

  if (!show) {
    return (
      <>
        <div className="register  col-sm-12 col-lg-6">
          <div className="container">
            <button
              className="navbar-toggler close-btn fas fa-times"
              type="button"
              onClick={() => setShow(!show)}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="close-btn fas fa-times "></span> */}
            </button>
          </div>
          <h1> Registration</h1>
          <form onSubmit={handleSubmit} method="POST">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={state.name}
              onChange={handleInputChange}
              required
            />

            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={state.email}
              onChange={handleInputChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={state.phone}
              onChange={handleInputChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={state.password}
              onChange={handleInputChange}
              required
            />

            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Your Password"
              value={state.confirm_password}
              onChange={handleInputChange}
              required
            />

            <button type="submit" className="hero-btn red-btn">
              Submit
            </button>
            <Link to="/login" className="m-3 btn btn-primary">
              Login
            </Link>
          </form>
        </div>
      </>
    );
  } else {
    return navigate("/");
  }
};

export default Registers;
