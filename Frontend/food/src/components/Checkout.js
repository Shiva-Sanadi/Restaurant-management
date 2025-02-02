import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const navigate = useNavigate(); 

    const [show, setShow] = useState(false); //toggle btn close button

    
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    zip: '',

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/Checkout",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({firstname:formData.firstname, lastname:formData.lastname, phone:formData.phone, address:formData.address, city:formData.city, state:formData.state, zip:formData.zip}),
    });
    const data = await response.json();
    console.log(data);
    

    if (!data.success) {
      alert("Enter valid Credentials");
    }else{
      navigate("/login");
    }

  //   axios
  //     .post('http://localhost:5000/api/checkout', formData)
  //     .then((response) => {
  //       console.log(response.data);
  //       // Reset the form
  //       setFormData({
  //         firstName: '',
  //         lastName: '',
  //         phone:'',
  //         address: '',
  //         city: '',
  //         street: '',
  //         zip: '',
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  };

 if(!show){
      return (
        <div className='Checkout'>
         <div className='container'>
                          <button className="navbar-toggler close-btn fas fa-times" type="button" onClick={() => setShow(!show)} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="close-btn fas fa-times "></span> */}
                        </button>          
            </div>
          <h2>Checkout Form</h2>
          <form onSubmit={handleSubmit} method='POST'>
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <br />

            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
            <br />
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <br />

            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <br />

            <label>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
            <br />

            <label>ZIP:</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
            <br />

            <button type="submit hero-btn">Submit</button>
          </form>
        </div>
      )
  }
  else{
    return navigate("/");
   }
};

export default CheckoutForm;
