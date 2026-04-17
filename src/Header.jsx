import React from 'react'
// import icon from '/public/favicon.svg';
import { Link } from 'react-router-dom';
import './App.css'

const Header = () => {
    return (
        <>
            <div className="container-fluid py-1 ">
                <div className="hero container">
                    <div className="row">
                        <div className="col-lg-4  ">
                           <img className=' d-flex' src="https://themewagon.github.io/stylish/images/main-logo.png" alt=""  />
                        </div>
                        <div className=" col-lg-7 mt-3 ">
                            <ul className=' d-flex justify-content-between'>
                                <li className=' list-unstyled'><Link 
                                    to={'/'}
                                    className='text-dark text-decoration-none fs-6' >Home</Link></li>
                                <li className=' list-unstyled'><Link
                                    to={'/about'}
                                    className='text-dark text-decoration-none fs-6' >Men</Link></li>
                                <li className=' list-unstyled'><Link
                                    to={'/iteam'}
                                    className='text-dark text-decoration-none fs-6' >Girls</Link></li>
                                <li className=' list-unstyled'><Link
                                    to={'/Form'}
                                    className='text-dark text-decoration-none fs-6' >Add cart</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header