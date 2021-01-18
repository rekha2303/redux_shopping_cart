import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  console.log(products);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="product_img">
                <img src={`/images/${product.image}`} alt="image_name" />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="product_name">
                    <b>Name: </b>
                    {product.name}
                  </div>
                </div>

                <div className="col-3">
                  <div className="product_price">
                    <b>Price: </b>
                    {product.price}
                  </div>
                </div>
                <div className="col-6">
                  <div className="product_discount_price">
                    <b>Discount: </b>
                    {product.discountPrice}
                  </div>
                </div>
                <div className="col-6">
                  <div className="product_discount_price">
                    <b>Discount Price: </b>
                    {product.discountPrice}
                  </div>
                </div>
                <div className="col-6">
                  <div className="product_quantity">
                    <b>Quantity: </b>
                    {product.quantity}
                  </div>
                </div>
                <div className="col-6">
                  <div className="product_description">
                    <b>Description: </b>
                    {product.desc}
                  </div>
                </div>
                <div className="col-6">
                  <div className="product_description">
                    <button>Add in Cart</button>
                    <button style={{ margin: "10px" }}>
                      Delete form the Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
