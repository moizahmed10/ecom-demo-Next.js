import React, { useState } from "react";
import axios from "axios";
import * as style from "../../styles/ProductDetails.module.css";
import { Container } from "react-bootstrap";

const productDetails = (props) => {
  const { product } = props;
  return (
    <div className={style.featuredItemsWrap}>
      <Container>
        <div className={style.featuredItemsContentWrap}>
          <h4>{product.title}</h4>
          <div className="row">
            <div className="col-lg-6">
              <div className={style.featItemsImgWrap}>
                <div className={style.featItemsImg}>
                  <img src={product.image} alt={product.title} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={style.featuredItemsContent}>
                <h4>Description</h4>
                <p>{product.description}</p>
                <p>
                  <b>Category : </b>
                  {product.category}
                </p>
                <p>
                  <b>Rating : </b>
                  {product.rating.rate}
                </p>

                <div className={style.featItemsImgContent}>
                  <h4>${product.price}</h4>
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default productDetails;

export const getServerSideProps = async (context) => {
  const { productid } = context.params;
  const res = await axios.get(`https://fakestoreapi.com/products/${productid}`);
  const product = await res.data;
  if (Object.keys(product).length) {
    return {
      props: {
        product: product,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
