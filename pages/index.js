import React from "react";
import axios from "axios";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { useRouter } from "next/dist/client/router";
import { Container } from "react-bootstrap";

const Index = ({ ProductData }) => {
  const router = useRouter();
  return (
    <div>
      <Banner />
      <div className="best-product-wrap">
        <Container>
          <h3>Product</h3>
          <div className="row bp-row">
            {ProductData.map((product) => (
              <div
                className="col-md-6 col-lg-4 col-xl-3 bp-col"
                key={product.id}
              >
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
    </div>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const res = await axios.get(`https://fakestoreapi.com/products`);
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
