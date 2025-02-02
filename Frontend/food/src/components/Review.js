import React,{useState} from 'react'
import reviewApi from "../apis/reviewapi";

const Review = () => {
  const [data, setData] = useState(reviewApi);
  console.log(setData);
  return (
    <>
        <section class="review" id="review">
          <h1 class="heading"> customer's <span>review</span></h1>
          <div class="box-container">
          {
            data.map((curelem)=>{
              const {id, para, image, name} = curelem;
              return(<>
                      <div class="box" key={id}>
                        <i class="fas fa-quote-left"></i>
                        <p>{para}</p>
                        <img src={image} class="user" alt=""/>
                        <h3>{name}</h3>
                        <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                        </div>
                  </div>
              </>)
            })
          }
            
          </div>
        </section>
    </>
  )
}

export default Review;