import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "./slices";
import { fulfilled } from "./slices";
console.log(fulfilled);

function ProductView() {
  const { id } = useParams();
  //const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const getVal = useSelector((state) => {
    return state.app;
  });
  const product = getVal.products;
  // let fetchProductInfo = async () => {
  //   try {
  //     const productInfo = await axios.get(
  //       `https://6461c1c2491f9402f4aa0565.mockapi.io/products/${id}`
  //     );
  //     setProduct(productInfo.data);
  //   } catch (error) {
  //     alert("Something went wrong");
  //   }
  // };

  useEffect(() => {
    // fetchProductInfo();
    dispatch(getAllProducts(id));
    console.log(dispatch(getAllProducts(id)));
  }, []);

  return (
    <div className="container text-center">
      <img src={product.imageLink} />
      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductView;
