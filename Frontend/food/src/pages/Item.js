import React, { useContext } from "react";
import { CartContext } from "./Cart";
import '../index.css';
//
// used props here
const Item = ({ id, image, name, quantity, price }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div class="product-img" key={id}>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          {/* <h2>{category}</h2> */}
          {/* <p>{description}</p> */}

          <div className="add-minus-quantity">
            <h1>
              <span class="material-symbols-outlined" onClick={() => decrement(id)}>remove</span>
            </h1>
            <input type="text" placeholder={quantity} />
            <h1>
              <span
                class="material-symbols-outlined" onClick={() => increment(id)}>add</span>
            </h1>
          </div>

          <div className="remove">
            <div class="price">
              <h3>
                {price}
                <span class="material-symbols-outlined">currency_rupee</span>
              </h3>
            </div>

            <div className="remove-item">
              <h1>
                <span
                  class="material-symbols-outlined" onClick={() => removeItem(id)}>close</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
