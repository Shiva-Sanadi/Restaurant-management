// src/pages/Contacts.js
import React, { useState } from 'react'
import '../index.css';

const Contacts = () => {

    const [data , setData] = useState({name:"" ,email:"", phone:"", message:""});
      
    // const userContact = async () => {
    //     try{
    //         // '/contact'
    //         const res = await fetch('/getdata',{
    //             method: 'GET',
    //             headers: {
    //                 "Content-Type":"application/json"
    //             },
    //         });
    //         const userData = await res.json();
    //         console.log(userData);
    //         setData({...data, name:userData.name, email:userData.email, phone:userData.phone, message:userData.message});

    //         if(!res.status === 200){
    //             const error = new Error(res.error);
    //             throw error;
    //         }

    //     } catch(err){
    //         console.log(err);
            
            
    //     }
    // }

    // useEffect(() =>{
    //     userContact();
    // },[]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // or
        // const {value, name} = e .target;
        //  setData({...data,[name] : value});
        // or
        setData((preValue) => {
            console.log(preValue)
            return{
                ...preValue,
                [name]: value,
            };
        })
    }

    // ========================== send data to backend =========================

    const handleSubmit= async (e)=>{
        e.preventDefault();

        // const {name, email, phone, message} = data;
        const res = await fetch("http://localhost:5000/api/contact",{
            method:"POST",
            headers: { 
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name:data.name, email:data.email, phone:data.phone, message:data.message })
        });
        
        const userData = await res.json();
        console.log(userData);

        if(!userData.success){
            console.log("message not send")
        }else{
            alert("data submitted");
            setData({...data,message:""});
        }
  
    }

    


  return (
    <>
    
    <section className='contactus'>
    <h1> Contact Us</h1>
        <section className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600685992!2d77.35073145480995!3d12.95451701428898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1670168904332!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
    
        <section className="contact-us">
            <div className="row">
                <div className="contact-col">
                    <div>
                        <i className="fa fa-home"></i>
                        <span>
                            <h5>XYZ Road,ABC Building</h5>
                            <p>Bangalore,Karnataka,IN</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <span>
                            <h5>+1 9876543210</h5>
                            <p>Monday to Saturday 10AM to 6PM</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <span>
                            <h5>anc@nhhcdh.com</h5>
                            <p>Email us your query</p>
                        </span>
                    </div>
                </div>
                <div className="contact-col">
                    <form  onSubmit={handleSubmit} method="POST" >
                        <input type="text" name="name" onChange={handleChange} value={data.name} placeholder="Enter Your Name" required/>
                        <input type="email" name="email" onChange={handleChange} value={data.email} placeholder="Enter Email Id" required/>
                        <input type="Number" name="phone" onChange={handleChange} value={data.phone} placeholder="Phone Number" required/>
                        <textarea name="message"  rows="8" onChange={handleChange} value={data.message} placeholder="Message" required></textarea>
                        <button type="submit" className="hero-btn red-btn" >Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </section>
    </>
  )
}

export default Contacts;