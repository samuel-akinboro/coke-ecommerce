import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({ id, title, image, price, rating, description }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    const alreadyInCart = basket.some(item => item.id === id);
    if(alreadyInCart){
      alert('this item as been added to cart previously')
    }else{
      dispatch({
        type: "PREVIEW_PRODUCT", 
        product: {
          show: true,
          id,
          title, 
          image, 
          description,
          rating,
          price,
        }
      })
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>₦</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p><StarRateIcon /></p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Buy Now</button>
    </div>
  );
}

export default Product;
