
import React from 'react'
import './sectionthree.css'
import { Link } from 'react-router-dom'

const SectionThree = () => {
  return (
    <div>
      <section className='sectionThree'>
        <h3>Contact 📞</h3>
        <h2>Got an interesting project?, let's work together!</h2>
        <div className='contactDiv'>
          <Link to={"mailto:chibuzorphilip2001@gmail.com"}><p>chibuzorphilip2001@gmail.com</p></Link>
          <p>+234 80944 22807</p>
          <Link to="https://wa.link/81xvap"> <p>whatsapp me</p></Link>
        </div>

        <hr />
        <p className='lastP'>© 2023 Bright C. Philip</p>
      </section>
    </div>
  )
}

export default SectionThree
