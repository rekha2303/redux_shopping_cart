import React from "react";
import Header from "../components/Header";
import currencyFormatter from "currency-formatter";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Home = () => {
    const { products } = useSelector((state) => state.ProductsReducer);
    //const details = useSelector(state => state.ProductsReducer.items.find(item => item.id === id))
    
    console.log(products);
    return (
    <div>
      
        <div className="container mtb-30">
            <div className="row"> 
            {products.map((product) => (
                    <div className="col-3" key={product.id}>
                        <div className="card">
                            <div className="product_img" >
                                <Link to={`details/${product.id}`}/>

                                <img src={`/images/${product.image}`} alt="image_name" />
                                </div> 
                                <div className="row" >
                                    <div className="col-6">
                                        <div className="product_name">

                                            <b> Name: </b> {product.name} </div>

                <div className="col-6">
                    <div className="product_price">
                     <b> Price: </b>  {currencyFormatter.format(product.price, { code: 'USD' })} </div> 
                     </div> 
                     <div className="col-6">
                            <div className="product_discount_price" >
                                <b> Discount: </b> {product.discountPrice}% </div> 
                                </div> 
                                <div className="col-6">
                                     <div className="product_discount_price">
                                <b> Discount Price: </b> {currencyFormatter.format(product.price, { code: 'USD' })} 
                                </div>
                                 </div> 
                                 <div className="col-6">
                                     <div className="product_quantity">
                                                                       <b> Quantity: </b> {product.quantity}
                 </div> 
                 </div> 
                 <div className="col-6">
                      <div className="product_description">
                                                            <b> Description: </b> {product.desc} 
                    </div> 
                    </div> 
                    <div className="col-6">
                        <div className="button">
                                <button className="btn1"> Add in Cart </button> 
                                <button className="btn2">Delete form the Cart
                                 </button> 
                        </div >
                    </div> 
                </div >
                </div>
                </div>
                </div>
            ))
        } 
        </div> 
        </div> 
        </div>
    );
};
export default Home;