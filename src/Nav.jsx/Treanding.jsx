import React from 'react'
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import TreandingData from './Treandingdet'
import '../App.css'

const Treanding = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <div className="col-lg-3 fw-bold">
          <h5>Featured Products</h5>
        </div>
        <div className="row">

          {TreandingData.map((v, i) => (
            <div className="col-sm-3 col-md-4 col-lg-3 mt-3 text-center " key={v.id} >

              <Card className=''>
                {/* <Card.Img variant="top " src={v.image} /> */}
                <Link to={`/Treanding/${v.id}`}>
                  <img src={v.image} alt="" className='img-fluid' />
                </Link>
                <Card.Body>
                  <Card.Title className='tre fs-6 text-start text-lowercase fw-medium'>{v.details}</Card.Title>
                  <Card.Title className='fs-5 text-start'>{v.Brand}</Card.Title>
                  <div className="div d-flex gap-5 my-3">
                  <Card.Title className='fs-5 mt-1'>₹{v.price}</Card.Title>

                  <Link to={`/Treanding/${v.id}`} className='bt' >View Details </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      </div>

    </>
  )
}

export default Treanding


