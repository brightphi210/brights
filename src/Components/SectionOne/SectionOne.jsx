import React from 'react'
import "./sectionOne.css"
import blur from './fade.png'
import blur2 from './fade2.png'
import blur3 from './fade.png'
import pics from './pics.png'
import profile  from './Profile.pdf'
import profile2  from './Profile2.pdf'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';


const SectionOne = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <section className='sectionOne'>
        <div data-aos="fade-up" data-aos-duration="3000">
          <h3>Hello 👋</h3>
          <h2>I'm a full-stack developer, <br /> Mobile Developer based in PH, Nigeria. 🇳🇬</h2>
          <p className='firstP'>I'm a creative full-stack developer, mobile developer  with a passion for creating innovative Web and mobile app and intuitive user experiences.</p>
          <p className='secP'>With over three years of experience in the field, I have a unique skill-set that allows me design and develop products that are both functional, usable and visually appealing. </p>
          <div className='btnClass'>
            <a href={profile2} download><button className='btn'>View CV/Resume </button></a>
            
            <div className='icons'>
              <Link to={"https://www.linkedin.com/in/chibuzor-philip12/"}><i class="uil uil-linkedin"></i></Link>
              <Link to={"https://twitter.com/chibuzorphilip7"}><i class="uil uil-twitter"></i></Link>
              <Link to={"https://github.com/brightphi210"}><i class="uil uil-github"></i></Link>
              <Link to={"https://wa.link/81xvap"}><i class="uil uil-whatsapp"></i></Link>
            </div>
          </div>
        </div>
        
        <div className='picSection' data-aos="fade-up" data-aos-duration="3000">
          <img src={pics} alt="" />
        </div>


        <div className='blur'>
          <img src={blur} alt="" />
        </div>

        <div className='blur2'>
          <img src={blur2} alt="" />
        </div>


      </section>
    </div>
  )
}

export default SectionOne
