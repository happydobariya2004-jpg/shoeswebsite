import React from 'react'
import Header from '../Header'
import Foter from '../Foter'
import Discouuent from './Discouuent'
import Shopping from './Shopping'
import Sec4 from './Sec4'
import TreandingData from './Treandingdata'
import Treanding from './Treanding'
import SaleTimer from './SalesTimer'

import '../App.css'
// import image from './public/card-image1(1).jpg'
const Home = () => {
  return (

    <>
    <Header/>
    <div className=" hero containerfluid">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          
          <div className="left">
          <img className='w-100 rounded-5 mt-5' src="https://themewagon.github.io/stylish/images/card-image1.jpg " alt="" />
         </div>
         <div className="left-1">
          <img className='w-100 rounded-5 mt-5' src="https://themewagon.github.io/stylish/images/card-item2.jpg" alt="" />
         </div>
          </div>

          <div className="col-lg-6">
            <div className="right">
          <img className='w-100 rounded-5 mt-4'  src="https://themewagon.github.io/stylish/images/card-image2.jpg"  alt="" />
          </div>
          <div className="right-1">
            <img className='w-100 rounded-5' src="https://themewagon.github.io/stylish/images/card-image3.jpg" style={{width:"500px",marginTop:"50px",borderRadius:"10%"}} alt="" />
          </div>
          
          </div>

      </div>
     
    </div>
    </div>
    <Discouuent/>
    <Shopping/>
    <Sec4/>
<SaleTimer/>
    <Treanding/>
    {/* <App/> */}
    <Foter/>
    </>
  )
}

export default Home