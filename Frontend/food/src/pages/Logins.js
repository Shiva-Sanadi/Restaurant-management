import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../index.css';

const Logins = () => {
  const [show, setShow] = useState(false); //toggle btn close button

  let navigate = useNavigate();

    const [state, setState] = useState({  email:"",password:"" });
       
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setState((prevValues) => ({
        ...prevValues,
        [name]: value
      }));
    };
  
    const handleSubmit = async(event) => {
      event.preventDefault();
      console.log(JSON.stringify({email:state.email, password:state.password}))
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email:state.email, password:state.password})
      });
      const json = await response.json()
      console.log(json);
  
      if (!json.success) {
        alert("Enter valid Credentials")
      }
      if (json.success) {
        localStorage.setItem("userEmail",state.email);
        localStorage.setItem("authToken",json.authToken);
        localStorage.setItem("userId",json.userId);
        console.log(localStorage.getItem("authToken"))
        navigate("/");
      }
      // console.log(state);
      // if(state.name && state.password){
      //         return(
      //       document.write(`Name= ${state.name} ,  Password=${state.password}`)
            
      //       )  // (` ${} `)  Template literal
      //         }
      //         else{
      //           return(
      //           alert('Invalid Data!')
                
      //           )
      //         }
     
    };
    if(!show){
      return (
        <>
       
         <div className="login  col-sm-12 col-lg-6"> 
            <div className='container'>
                          <button className="navbar-toggler close-btn fas fa-times" type="button" onClick={() => setShow(!show)} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="close-btn fas fa-times "></span> */}
                        </button>          
            </div>
              <h1> Log In</h1>
              
            <form onSubmit={handleSubmit} method='POST' target='_self'>
            
                <input type="email" name="email" placeholder='Enter Email Id' value={state.email} onChange={handleInputChange} required />
            
                <input type="password" name="password" placeholder='Enter Your Password' value={state.password} onChange={handleInputChange} required/>
    
                <div className='forgetpass'>
                  <Link href='#' className='forget-pass'>Forget Password?</Link>
                 </div>
                 <div className='signup-link'>Not Remember? 
                <Link to='/register'> Signup Now</Link>
                </div>
                
                <button type="submit" className="hero-btn red-btn" >Login</button>
              
               
              
            
            </form>
        </div>
    
        </>
      )
    }
 else{
  return navigate("/");
 }
}

export default Logins;