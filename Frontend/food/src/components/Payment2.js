import './Payment.css'
import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
function Payment(props) {
    const { register,handleSubmit,formState:{errors}}=useForm();
    const navigate=useNavigate()
    const onFormSubmit=(userData)=>{
        axios.post("http://localhost:5000/payment",userData)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        console.log(userData)
        navigate('/')
    }
    return (
       
        <div id="re">
        <div className='container-fluid body'>
            <div className='row'>
            <div className="col-11 col-sm-8 col-md-4 mx-auto mt-5 mb-4">
                <form className='border p-4 shadow pyform' onSubmit={handleSubmit(onFormSubmit)}>
                  <div className='mb-3'>
                  <p className='display-5 '>Payment Details</p>
                  </div>
                  <hr />
                    {/* name on card */}
                    <div className="mb-3 ">
                        <label htmlFor="un" className="lbc"><em>Name on card</em></label>
                        <input type="text" id="un"  className="form-control com" placeholder="Name"{...register("username", { required: true, minLength: 6 ,maxLength:10})} />
                        {/* validation error msg for username */}
                        {errors.username?.type === 'required' && <p className='text-danger'>* Name on required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 6</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 10</p>}
                    </div>
                    
                    {/* email */}
                    <div className="mb-3 ">
                        <label htmlFor="email" className="lbc"><em>Email</em></label>
                        <input type="email" id="email" className="form-control com" placeholder="enter email"{...register("email", { required: true })} />
                        {/* validation error msg for email */}
                        {errors.email?.type === 'required' && <p className='text-danger'>* Email required</p>}
                    </div>
                    {/* card number */}
                    <div className="mb-3 ">
                        <label htmlFor="number" className="lbc"><em>Card number</em></label>
                        <input type="" id="number" className="form-control com" placeholder="1234 5678 435678" {...register("number", { required: true })} />
                        {/* validation error msg for number */}
                        {errors.number?.type === 'required' && <p className='text-danger'>* card number required</p>}
                    </div>
                    <div className="row ">
                    {/* Expiry Date */}
                    <div className="mb-3 col-6 col-sm-6 col-md-6">
                        <label htmlFor="Date" className="lbc"><em>Expiry Date</em></label>
                        <input type="" id="Date" className="form-control com" placeholder="MM/YYYY" {...register("number", { required: true })} />
                        {/* validation error msg for number */}
                        {errors.number?.type === 'required' && <p className='text-danger'>*  required</p>}
                    </div>
                    {/* cvv/cvc */}
                    <div className="mb-3 col-6 col-sm-6 col-md-6">
                        <label htmlFor="number" className="lbc"><em>CVV/CVC</em></label>
                        <input type="" id="number" className="form-control com" placeholder="*" {...register("number", { required: true })} />
                        {/* validation error msg for number */}
                        {errors.number?.type === 'required' && <p className='text-danger'>*  required</p>}
                    </div>
                    <div className=' mb-3 text-center'>
                        <button type="submit" className="btn btn-success"  >Confirm payment</button>  

                        </div> 
                    </div>
                           
        
                </form>
            </div>
            </div>
            </div>
        </div>
    )
  }
  
  export default Payment;

// //   css
// .body{
//     background-color: #0C4160	;
// }

// .pyform{
//     background-color: white;
//     font-family: 'Montserrat', sans-serif;
//     border-radius: 3px;
// }
// .com{
//     font-family: 'Montserrat', sans-serif;
//     background-color: #0C4160;
// }
// .lbc{
//     font-family: 'Montserrat', sans-serif;
// }