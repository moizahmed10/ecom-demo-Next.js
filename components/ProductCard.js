import React from "react";
import { useRouter } from "next/dist/client/router";
const ProductCard = ({ imageUrl, title, cost, id, category }) => {
  const router = useRouter();
  return (
    <div className="best-product-slide">
      <div className="add-to-cart-btn">
        <button
          onClick={() => {
            router.push(`/details/${id}`);
          }}
        >
          View Detail
        </button>
      </div>
      <div className="best-seller-img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-price">
        <h6>{title}</h6>
        <p>$ {cost}</p>
      </div>
    </div>
  );
};

export default ProductCard;
