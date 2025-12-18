// src/pages/Aboutus.js
import React,{useState} from 'react'
import aboutapi from '../apis/aboutapi';
import { NavLink, Link } from 'react-router-dom';
import '../index.css';

const Aboutus = () => {
    const [aboutdata, setAboutdata] = useState(aboutapi);
    // console.log(setAboutdata);s
  return (
    <>
        <section className='common-section our-services'>
        <h1 className='main-heading'>About us</h1>
        <div className='container mb-5 mt-1'>
          <div className='row m-0 p-0'>
            <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
              <img src='./images/bg.jpg' alt='aboutusImg'/>
            </div>

            <div className='col-12 col-lg-6 our-services-list'>

                {
                  aboutdata.map((curElem)=>{
                    const {id, title, info} = curElem;
                    return(<>
                            <div className='row our-services-info' key={id}>
                                <div className='col-1  our-services-number' key={id}>{id}</div>
                              <div className='col-10 our-services-data'>
                                <h2>{title}</h2>
                                <p className='main-hero-para'>{info}</p>
                              </div>
                          </div>
                    </>)
                  })
                }
                
                <br/>
                <button className='hero-btn'><Link to={'/'}> Learn More</Link></button>
            </div>
          </div>
        </div>
      </section>

                        
    </>
  )
}

export default Aboutus;