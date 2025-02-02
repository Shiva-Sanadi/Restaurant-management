import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Reservation = () => {

  const navigate = useNavigate();

    const [state, setState] = useState({ partysize:"", date:"", time:"", name:"", email: "", phone:"", });
       
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevValues) => ({
          ...prevValues,
          [name]: value
        }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(state);
        // console.log(JSON.stringify({partysize:state.partysize, date:state.date, time:state.time, name:state.name, email:state.email, phone:state.phone}))
      const response = await fetch("http://localhost:5000/api/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({partysize:state.partysize, date:state.date, time:state.time, name:state.name, email:state.email, phone:state.phone})
      });
      const json = await response.json()
      console.log(json);
  
      if (!json.success) {
        alert("Enter valid Credentials")
      }
      if (json.success) {
        alert("reservation successfull")
        // localStorage.setItem("authToken",json.authToken);
        // console.log(localStorage.getItem("authToken"))
        navigate("/");
      }
      };
  return (
    <>
        <div className="reservation contact-col col-sm-12 col-lg-6">
        <h1> Make A RESERVATION</h1>
        <h2>To help us find the best table for you, Select the perfect Party Size, Date and Time of your Reservation</h2>
      <form onSubmit={handleSubmit} method='POST'>
      <div className='form-control'>
          <label>Party Size</label>
          <input type="number" name="partysize" value={state.partysize} onChange={handleInputChange}/>
          {/* <label>Select an option:</label>
				  <select  value={state.partysize} onChange={handleInputChange}>
            <option  value="option 1">1 Guests</option>
            <option  value="option 2"> 2 Guests</option>
            <option  value="option 3">3 Guests</option>
            <option  value="option 4">4 Guests</option>
            <option  value="option 5">5 Guests</option>
            <option  value="option 6">6 Guests</option>
            <option  value="option 7">7 Guests</option>
            <option  value="option 8">8 Guests</option>
            <option  value="option 9">9 Guests</option>
            <option  value="option 10">10 Guests</option>
            <option  value="option 11">11 Guests</option>
			    </select> */}
          </div>
        
          <div className='form-control'>
          <label>Date</label>
          <input type="date" name="date" placeholder='Date' value={state.date} onChange={handleInputChange} />
          </div>
          <div className='form-control'>
          <label>Time</label>
          <input type="time" name="time" placeholder='time' value={state.time} onChange={handleInputChange} />
          </div>
          <div className='form-control'>
          <label>Name</label>
          <input type="text" name="name" placeholder='Enter Name' value={state.name} onChange={handleInputChange} />
          </div>
          <div className='form-control'>
          <label>Email</label>
          <input type="text" name="email" placeholder='Enter Email' value={state.email} onChange={handleInputChange}/>
          </div>
        
          <div className='form-control'>
          <label>Phone</label>
          <input type="number" name="phone" placeholder='Enter Phone number' value={state.phone} onChange={handleInputChange}/>
          </div>
          
          <button  name="submit" value="submit" type="submit" className="hero-btn red-btn">Reserve Now</button>
        
      </form>
    </div>
  
    </>
  );
}

export default Reservation;