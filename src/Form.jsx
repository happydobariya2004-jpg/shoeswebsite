import React from "react";
import { useLocation } from "react-router-dom";
import Header from './Header'
// import Header from "./components/Header";
const Login = () => {
  const location = useLocation();
  const product = location.state;

  return (
    <>
      <Header />
      <div className="container text-center mt-5">

        <h2>Add cart</h2>

        {product && (
          <div className="row">
            <div className="col-4">
            <img className="rounded-3" src={product.image} alt="" style={{ width: "200px" }}
            />
            <p>{product.brand}</p>
             <h4>{product.details}</h4>
            <p>₹{product.price}</p>
            <button className="bt">buy now</button>

            </div>
          
          </div>
        )}
      </div>
    </>
  );
};

export default Login;