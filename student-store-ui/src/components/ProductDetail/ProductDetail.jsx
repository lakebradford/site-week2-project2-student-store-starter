
import "./ProductDetail.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState(null);

  //Call the api and retrieve the information using the ID
  useEffect(() => {
    axios
      .get(`http://localhost:3001/store/${id}`)
      .then((response) => {
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  //if there is no information passed down, we do not display anything
  if (productDetails == null) {
    return;
  }
  //setting variables so we can display the product information
  // const { name, price, description, image } = productDetails.product;
  const { name, price, description, image } = productDetails;

  return (
    <button id = "detail-page">
      <h2>{name}</h2>
      <img src={image} />
      <p>Price: ${price}</p>
      <p> Description: {description}</p> 
      
    </button>
  );
};

export default ProductDetail;