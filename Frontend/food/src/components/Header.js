import React from 'react';

const Header = () => {
  return (<>
    <header>
            <section className='container main-hero-container'>
                <div className='row ' >
                    <div className='col-12 col-md-6 back  d-flex justify-content-center flex-column align-items-flex-start py-2 '>
                        <h1 className='display-2'>Enjoy Your Healthy <br/> and Delicious Food</h1>
                        <p className='main-hero-para'>loremssss  sssss sssss sddddd dddddsaa aaaa
                        vvvvvv vvvvvvv vvvv vvvv wwwww rdds
                        bbbb bbbbb bbbb bbbbb bbbbrrr rrrrr 
                        nnn nnn nnnnnnn nnnnnn sdddddd
                        bbb bbbb bsss sssssss ssss sssss rrrr </p>
                        <h3>Book Your Table Now</h3>
                           {/* <div className='button mt-2 bg-transferent'> */}
                           <button className="hero-btn" type="submit">Book a Table</button>
                           {/* </div>                   */}
                    </div>
                 {/*  -------------- main header right side -------*/}
                    <div className='col-12 col-md-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images '>
                        <img src='./images/bg3.jpg' alt='heroimg' className='img-fluid'/>
                        
                    </div>

                </div>
            </section>
        </header>
    </>)
}

export default Header;