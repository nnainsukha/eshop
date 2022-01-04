import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>{" "}
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div" className="fa-xs">
            {product.name}
          </Card.Title>
        </a>
        <Card.Text as="div" className="fa-xs">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as="h5" className="fa-xs">
          ₹{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
