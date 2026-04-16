import React from 'react'

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShopData from "./Shopdet";
import '../App.css'

const Shopping = () => {
  return (
    <>


   <div className="container-fluid">
      <div className="container ">
        <div className="col-lg-12 fw-bold">
          <h5>Featured Products</h5>
        </div>
        <div className="row">

          {ShopData.map((v, i) => (
            <div className="col-sm-3 col-md-4 col-lg-3  mt-3 text-center  " key={v.id} >
  
              <Card>
               <div className="imag">
                <Link to={`/Shopping/${v.id}`}>
                  <img src={v.image} alt="" className='img-fluid rounded-4'/>
                </Link>
                <Card.Body>
                  <Card.Title className='fs-6 text-start text-lowercase fw-medium'>{v.details}</Card.Title>
                  <Card.Title className='fs-5 text-start'>{v.brand}</Card.Title>
                  <div className="div d-flex gap-5 my-3">
                                   <Card.Title className='fs-5 mt-1'>₹{v.price}</Card.Title>
                 
                                   <Link to={`/Shopping/${v.id}`} className='bt' >View Details </Link>
                                   </div>
                </Card.Body>
                </div>
              </Card>
            </div>
            // </div>
            // </div>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}
export default Shopping