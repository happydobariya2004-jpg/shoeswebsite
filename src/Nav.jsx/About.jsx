import React from 'react'
import Header from '../Header'
import Foter from '../Foter'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { allData } from './Alld'

const About = () => {
  return (
    <>
      <Header/>
      <div className="container-fluid">
      <h1 className='text-center'></h1>

      <div className="container">
        <div className="row">
          {allData.map((v, i) => (
            <div className="col-sm-3 col-md-4 col-lg-3 text-center mb-4" >
              
                <Link to={`/Iteam/${v.id}`}>
                  <img src={v.image} alt="" className='img-fluid rounded-4' />
                </Link>
                <Card.Body>

                  <Card.Title className='my-2'>{v.details}</Card.Title>
                  <Card.Title>${v.price}</Card.Title>
                  <Card.Title className='star mb-2' style={{ color: "green" }}>{v.rating}</Card.Title>


                  <Link to={`/iteam/${v.id}`} className='btn btn-success' >View Details </Link>
                </Card.Body>
      
            </div>
          ))}
        </div>
      </div>
      </div>



      <Foter />
    </>
  )
}

export default About