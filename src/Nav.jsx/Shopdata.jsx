import React from "react";
import { useParams } from "react-router-dom";
import ShopData from "./Shopdet";
import '../App.css'
const ShopDetails = () => {
  const { id } = useParams();

  let product = ShopData.find((v) => v.id == id);

  return (
    <div className="container-fluid">
      <div className="container ">
        <div className="row">
          <div className="col-12 d-flex">
            <img className=" w-25 rounded-5 m-5" src={product?.image} alt="" />

            <div className="col-lg-6 col-sm-4 m-5" style={{ marginLeft: "100px" }}>
             
                <h2 className="fs-6 text-success">{product?.brand}</h2>
                 <h2>{product?.details}</h2>
                 {/* <h2>{product?.brand}</h2> */}
                 
              <h2>${product?.price}</h2>
              <h2 className="rating" style={{color:"#ff6b2b"}}>{product?.rating}</h2>
              <button className='text-light mb-1 border rounded-1' style={{ background: "#ff6b2b" }}>Hot Deal</button>
              <h6 className="fs-3"><del className='color text-danger fs-5'>₹4000</del>   ₹{product.price}</h6>



              <h6>select size <span className='text' style={{ color: "#ff6b22" }}>size chat</span></h6>
              {/* <div className="col-lg-7 justify-content-end d-flex mt-3"> */}
              <div className="d-flex gap-3 text-text-border-success-subtle">

                <span className="size1 border border-dark px-2 py-1 rounded-2 ">7</span>
                <span className="size1 border border-dark px-2 py-1 rounded-2">8</span>
                <span className="size1 border border-dark  px-2 py-1 rounded-2">9</span>
                <span className=" size1 border border-dark px-2 py-1 rounded-2">10</span>
              </div>
              <div className="col-6 d-flex gap-3 mt-4 ">
                <button className='border-1 rounded-2 d-flex fw-semibold'>Add Cart</button>

                <button className='border-1 rounded-2 d-flex fw-semibold'>Buy Now</button>


              </div>



            </div>

          </div>

          <div className="row " style={{ marginTop: "100px" }}>

            <div className="col-lg-3 col-sm-4 col-md-3">

              <img src="data:image/jpeg;base64,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" alt="" />
              <h6>Men strappy Floater sandals</h6>
              <p><del className="text-danger"> $3200</del> $1900</p>
            </div>
            <div className="col-lg-3  col-sm-4 col-md-3">
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqHOxSftVRu5LrEMoIyJRuLHUChmsuRUYCQc6QJgmb1XO7lXwjdH7X3EazJDVmNgd1JonMGf2gMO8pXY7o5mFI1qmfMBZZhagnZwabIbFg7GKu0LIlEZpQ-2nNBviLwOx47OOXlA&usqp=CAc" alt="" />
              <h6>unning / Sports shoe Grey with white sole</h6>
              <p><del className="text-danger"> $5200</del> $2900</p>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlK58_-Pd85yYTs2PdRxgXoR4dacSqFzfPQZwumhYCEIl45IiJRU5TxQ&s" alt="" />
              <h6>Slip-on / Walking shoes   Mix of green, yellow, white, and red</h6>
              <p><del className="text-danger"> $2200</del> $1100</p>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_gEyyG4sGOZE76zCFvgmEUe_QTLd7dokTTxPpkuIrS43B7GPe7ShVj29YJw_KZYr4f9VqQ&s" alt="" />
              <h6>lip-on / Walking shoe Light grey with white sole</h6>
              <p><del className="text-danger"> $4200</del> $3200</p>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default ShopDetails;