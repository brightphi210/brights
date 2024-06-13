
import React from 'react'
import './sectionfour.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const SectionFour = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <section className='sectionFour'>
        <h3>SKills 🔰</h3>
        <div className='sectionFourDiv'>
          <div className='eachDiv' data-aos="fade-up" data-aos-duration="1000">
            <h2>Backend Dev</h2>
            <p><i class="uil uil-arrow-right"></i> Python</p>
            <p><i class="uil uil-arrow-right"></i> Django</p>
            <p><i class="uil uil-arrow-right"></i> Django Rest Framework</p>
            <p><i class="uil uil-arrow-right"></i> Rest Api</p>
            <p><i class="uil uil-arrow-right"></i> Superbase</p>
            <p><i class="uil uil-arrow-right"></i> Postgress</p>
          </div>

          <div className='eachDiv' data-aos="fade-up" data-aos-duration="1000">
            <h2>Frontend Dev</h2>
            <p><i class="uil uil-arrow-right"></i> React JS</p>
            <p><i class="uil uil-arrow-right"></i> Next JS</p>
            <p><i class="uil uil-arrow-right"></i> Redux</p>
            <p><i class="uil uil-arrow-right"></i> TailwindCSS</p>
            <p><i class="uil uil-arrow-right"></i> SASS</p>
            <p><i class="uil uil-arrow-right"></i> Daisy UI</p>
            <p><i class="uil uil-arrow-right"></i> React Native</p>
          </div>


          {/* <div className='eachDiv' data-aos="fade-up" data-aos-duration="1000">
            <h2>Mobile Development</h2>
            <p><i class="uil uil-arrow-right"></i> Figma</p>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default SectionFour