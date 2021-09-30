import axios from "axios";
import React from "react";
import ProductCard from "../../components/ProductCard";
import { Container } from "react-bootstrap";
const productCatagory = (props) => {
  const { ProductData } = props;
  return (
    <div className="best-product-wrap">
      <Container>
        <div className="row bp-row">
          {ProductData.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3 bp-col" key={product.id}>
              <ProductCard
                title={product.title}
                cost={product.price}
                imageUrl={product.image}
                id={product.id}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default productCatagory;

export const getServerSideProps = async (context) => {
  const { productCatagory } = context.params;
  const res = await axios.get(
    `https://fakestoreapi.com/products/category/${productCatagory}`
  );
  const ProductData = await res.data.map((product) => ({
    id: product.id,
    ...product,
  }));
  return {
    props: {
      ProductData: ProductData,
    },
  };
};
