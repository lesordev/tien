import React from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout/Layout";
import Products from "../components/Shop/Products";
import { addProduct } from "../redux/slice/product.slice";

export const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <Products />
      <button onClick={() => dispatch(addProduct({ hello: "luc" }))}>
        Click
      </button>
    </Layout>
  );
};
