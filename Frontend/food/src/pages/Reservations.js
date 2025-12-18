import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
const Reservations = () => {

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
        <div className="reservation">
  <div className="reservation-content">
    
    <div className="reservation-text">
      <h1>Make a Reservation</h1>
      <p>
        Reserve your table in advance and enjoy a delightful dining experience
        with perfect ambiance, delicious food, and exceptional service.
      </p>
    </div>

    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-control">
          <label>Party Size</label>
          <input type="number" name="partysize" onChange={handleInputChange} />
        </div>

        <div className="form-control">
          <label>Date</label>
          <input type="date" name="date" onChange={handleInputChange} />
        </div>

        <div className="form-control">
          <label>Time</label>
          <input type="time" name="time" onChange={handleInputChange} />
        </div>

        <div className="form-control">
          <label>Name</label>
          <input type="text" name="name" onChange={handleInputChange} />
        </div>
      </div>

      <div className="form-control">
        <label>Email</label>
        <input type="email" name="email" onChange={handleInputChange} />
      </div>

      <div className="form-control">
        <label>Phone</label>
        <input type="number" name="phone" onChange={handleInputChange} />
      </div>

      <button type="submit" className="hero-btn">
        Reserve Now
      </button>
    </form>

  </div>
</div>

  
    </>
  );
}

export default Reservations;