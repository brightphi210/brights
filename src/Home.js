import React from 'react'

import Header from './Components/Header/Header'
import SectionOne from './Components/SectionOne/SectionOne'
import SectionTow from './Components/SectionTwo/SectionTow'
import SectionThree from './Components/SectionThree/SectionThree'
import SectionFour from './Components/SectionFour/SectionFour'
const Home = () => {
  return (
    <div>
      <Header/>
      <SectionOne />
      <SectionTow />
      <SectionFour />
      <section className='experience'>
        <h3 className='exh3'>Work Experience 👩‍🏭</h3>
        <h2>Employment History</h2>

        <div className='exDiv1' data-aos="zoom-in-up" data-aos-duration="3000">
          <h3>Fullstack Developer(Django, React JS) - Crypto Smart(Part-time)</h3>
          <p>October 2023 - Present -Port Harcourt, Nigeria </p>
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

export default Home