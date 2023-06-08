import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate('/')
  }

  return (
    <>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          For any inquiries or questions, please feel free to reach out to us using the contact details below:
        </p>
        <div className="contact-details">
          <p>Email: contact@example.com</p>
          <p>Phone: +91 1234-678-90</p>
          <p>Address: Jogeshwari, Mumbai, India</p>
        </div>
      </div>
      <button onClick={back}>Go Back</button>
    </>
  )
}

export default Contact