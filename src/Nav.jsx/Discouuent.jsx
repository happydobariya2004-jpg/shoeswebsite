import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";


const Discount = () => {

    return (
        <div className="container-fluid">
        <div className="container disc mt-5 mb-4 rounded-5 text-white ">
            <div className="row p-4">
                <div className="col-lg-8">
                    <h3 className="fw-bold text-dark">  <span className="off text-danger">10% OFF</span>  Discount Coupons</h3>
                    <p className="text-dark">Subscribe us to get 10% OFF on all the purchases</p>
                    
                </div>
                <div className="col-lg-3 m-3" >
                    <button className=" w-100  fs-4 text-light rounded-4" style={{ background: "#c4273b", border: "none" }} >Subscribe Now</button>
                </div>

            </div>
        </div>
        </div>
    );

};

export default Discount;


