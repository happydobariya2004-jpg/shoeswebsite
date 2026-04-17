import React from 'react'

const Foter = () => {
  let footer = [
    {
      title: "info",
      items: [
        "Track Your Order",
        "Our Blog",
        "Privacy policy",
        "Shipping",
        "Contact Us",
        "Help",
        "Community",
      ],
    },
    {
      title: "About",
      items: [
        " History",
        "Our Team",
        "Services",
        "Company",
        "Manufacture",
        "Wholesale",
        "Retail",
      ],
    },
    {
      title: "Women Shoes",
      items: [
        "Track Your Order",
        "Our Blog",
        "Privacy policy",
        "Shipping",
        "Contact Us",
        "Help",
        "Community",
      ],
    },
    {
      title: "Popular",
      items: [
        " Prices Drop",
        "New Products",
        "Best Sales",
        "Stores",
        "Login",
        "Cart",
      ],
    },
    {
      title: "Mens Collection",
      items: [
        "Delivery",
        "About Us",
        "Shoes",
        "Contact Us",

      ],
    },
    {
      title: "Get In Touch",
      items: [
        "Stylish Online Store 123 .",
        "Call us: (+91)9099661412",
        "stylishonstore@gmail.com"
      ],
      
    },


  ]
  return (
    <div className="container-fluid">
      <div className="container bg-secondary mt-5 p-3 rounded-1">
        <div className="row">
          {footer.map((v, i) => (
            <div className="col-lg-2 text-light text-start " key={i}>
              <h6 className='mt-3' style={{ color: "white" }}>{v.title}</h6>

              {v.items.map((item, v) => (
                <div className="main" style={{ textAlign: "start", fontSize: "15px" }} key={i}>
                  {/* <p>{item}</p> */}
                  <a className='link' >{item}</a>
                  
                </div>
                
                
              ))}
            </div>
            
          ))}
          <div className="icon gap-2 d-flex mt-5  ">
            <input type="" placeholder='Enter your email' />
            <button className='border bg-dark text-light'>subscribe</button>
  
         <p className='copy fs-6 mt-2 offset-5 '>@ copyright2024 stylish online store</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Foter