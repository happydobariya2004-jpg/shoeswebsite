import React from 'react'

const Map = () => {
  return (
    <div className="container-fluid">
        <div className="container">
            <div className="col-lg-6">
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29371.212662359027!2d72.548352!3d23.0457344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1775013462228!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
        </div>
    </div>
  )
}

export default Map