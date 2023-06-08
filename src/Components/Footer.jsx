import React from 'react'

//reusable component
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Ansari Umer. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer