import React from 'react'
import Header from './Components/Header/Header'
import pics from './pics.png'
import './about.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import SectionThree from './Components/SectionThree/SectionThree'
const About = () => {

  useEffect(() => {
    AOS.init();
    }, [])
  return (
    <div>
      <Header />
      <section className='sectionOnea'>

        <div className='picSection' data-aos="fade-up" data-aos-duration="3000">
          <img src={pics} alt="" />
        </div>

        <div data-aos="fade-up" data-aos-duration="3000">
          <h3>About me 🧑</h3>
          <h2>I'm Bright C. Philip, a full-stack developer, mobile developer based in PH, Nigeria. 🇳🇬</h2>
          <p className='firstP'>I'm a creative full-stack developer, mobile developer  with a passion for creating innovative Web and mobile app and intuitive user experiences.</p>
          <p className='secP'>With over three years of experience in both web2 and web3 technology, I have a unique skill-set that allows me design and develop products that are both functional, usable and visually appealing. </p>
        </div>
      </section>

      <div className='main' data-aos="fade-up" data-aos-duration="3000">
        <p >
          Since the beginning of my career in developer, 
          I have worked on a wide range of projects, including websites, 
          mobile apps, and software applications. 
          I'm skilled in developing with django, DRF, React etc.
        </p>

        <p>
          In other to achieve a great work, I work closely with cross-functional 
          teams to define product requirements and develop high functional, 
          responsive, and scalabe products. I'm highly skilled in usability testing and 
          has a keen eye for detail, ensuring that all of my jobs meet the highest 
          standards of quality.
        </p>

        <p>
          In addition to my work in web/mobile development, I'm also deeply 
          committed to staying up-to-date on the latest trends and developments 
          in technology. I'm always looking for new ways to push the 
          boundaries of what is possible with these technologies, and constantly 
          seeking out opportunities to learn and grow as a developer.
        </p>

        <p>
          Overall, I'm a dedicated and driven professional with a strong passion 
          for creating exceptional products that meet the needs of users. My expertise 
          in development makes me a valuable asset to any team, and 
          my commitment to continuous learning ensures that I'm always at the forefront 
          of the industry.
        </p>
      </div>


      <section className='experience'>
        <h3 className='exh3'>Work Experience 👩‍🏭</h3>
        <h2>Employment History</h2>

        <div className='exDiv1' data-aos="zoom-in-up" data-aos-duration="3000">
          <h3>Fullstack Developer(Django, React JS) - Crypto Smart(Part-time)</h3>
          <p>October 2023 - Present -Port Harcourt, Nigeria </p>
        </div>


        <div className='exDiv1' data-aos="zoom-in-up" data-aos-duration="3000">
          <h3>Front-End Developer(React JS) - Bilding Construction(Contract)</h3>
          <p>September 2023 - Present -Port Harcourt, Nigeria </p>
        </div>

        <div className='exDiv1' data-aos="zoom-in-up" data-aos-duration="3000">
          <h3>Backend Developer(Django) - GENZ(Contract)</h3>
          <p>June 2023 - Present -Port Harcourt, Nigeria </p>
        </div>


        <div className='exDiv1' data-aos="zoom-in-up" data-aos-duration="3000">
          <h3>Full Stack Developer(Django, React JS) - BMP Inovations(Part-time)</h3>
          <p>Dec 2020 - Present - Port Harcourt, Nigeria </p>
        </div>

      </section>

      <SectionThree />
    </div>
  )
}

export default About
