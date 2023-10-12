import React from 'react'
import './sectiontwo.css'
import imageOne from './data1.png'
import imageTwo from './data2.png'
import imageThree from './data3.png'
import imageFour from './data4.png'
import imageFive from './data5.png'
import imageSix from './data6.png'
import imageSeven from './7.png'
import blur3 from './fade.png'
import blur4 from './fade2.png'
import { Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const SectionTow = () => {


useEffect(() => {
    AOS.init();
    }, [])
  return (
    <div>
        <section className='sectioTwo'>
            <h3>Some Works 👩‍🏭</h3>

            <div className='blur'>
            <img src={blur3} alt="" />
            </div>

            <div className='blur2'>
            <img src={blur4} alt="" />
            </div>
            <div className='imageflex'>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <p>Web App: Fully Functional and responsive Music Website </p>
                    <Link className='seeMore' to={'https://thatsongs.com/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://thatsongs.com/'}><img src={imageFive}alt="" /></Link>
                </div>


                <div data-aos="fade-up" data-aos-duration="1000">
                    <p>Web App: Fully Functional Mutltiple User Role Website </p>
                    <Link className='seeMore' to={'https://bilding.vercel.app/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://bilding.vercel.app/'}><img src={imageSeven}alt="" /></Link>
                </div>


                <div data-aos="fade-up" data-aos-duration="1000">
                    <p>Web App: A fully well developed funtional and responsive Construction website for PRIME PROJECT CONSTRUCTION</p>
                    <Link className='seeMore' to={'https://primeprojectsconstruction.com/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://primeprojectsconstruction.com/'}><img src={imageOne}alt="" /></Link>
                </div>



                <div data-aos="fade-up" data-aos-duration="1000">
                    <p>Web App: Resposive Website for Financial Website</p>
                    <Link className='seeMore' to={'https://oceancapitals.net/index.php'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://oceancapitals.net/index.php'}><img src={imageSix}alt="" /></Link>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <p>Web App: Nice responsive Construction website for Nolani Consult</p>
                    <Link className='seeMore' to={'https://nolaniconsult.com/#home'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link to={'https://nolaniconsult.com/#home'}><img src={imageTwo}alt="" /></Link>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <p>Web App: Responsive Construction website for Max Alzon</p>
                    <Link className='seeMore' to={'https://maxalzon.com/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link to={'https://maxalzon.com/'}><img src={imageThree}alt="" /></Link>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <p>Web App: Scalable and responsive web app for GENZ </p>
                    See Website <i class="uil uil-arrow-up-right"></i>
                    <img src={imageFour}alt="" />
                </div>

            </div>
        </section>
    </div>
  )
}

export default SectionTow