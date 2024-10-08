import React from 'react'
import './sectiontwo.css'
import imageOne from './data1.png'
import imageTwo from './data2.png'
import imageThree from './data3.png'
import imageFour from './data4.png'
import imageFive from './Screenshot (42).png'
import imageSix from './data6.png'
import imageSeven from './7.png'
import imageEight from './Screenshot (153).png'
import imageNine from './quils.png'
import imageTen from './ten.png'
import imageEleven from './11.png'
import imageTwleve from './12.png'
import imageThirteen from './13.png'
import imageFourtheen from './voice.png'
import back1 from './back.png'
import back2 from './back2.png'



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
                    <Link className='seeMore' to={'https://creve.live/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://creve.live/'}><img src={imageFive}alt="" /></Link>
                </div>


                <div data-aos="fade-up" data-aos-duration="1000">
                    <Link className='seeMore' to={'https://voicechats.vercel.app/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://voicechats.vercel.app/'}><img src={imageFourtheen}alt="" /></Link>
                </div>


                <div data-aos="fade-up" data-aos-duration="1000">
                    <Link className='seeMore' to={'https://quill-umber.vercel.app/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://quill-umber.vercel.app/'}><img src={imageNine}alt="" /></Link>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <Link className='seeMore' to={'https://welearnapi.fun/swagger/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://welearnapi.fun/swagger/'}><img src={back1}alt="" /></Link>
                </div>


                <div data-aos="fade-up" data-aos-duration="1000">
                    <Link className='seeMore' to={'https://algoca.vercel.app/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://algoca.vercel.app/'}><img src={imageEight}alt="" /></Link>
                </div>


                <div data-aos="fade-up" data-aos-duration="1000">
                    <Link className='seeMore' to={'https://sineverseproject.onrender.com/swagger/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://sineverseproject.onrender.com/swagger/'}><img src={back2}alt="" /></Link>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <Link className='seeMore' to={'https://tuitionaid.vercel.app/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://tuitionaid.vercel.app/'}><img src={imageTen}alt="" /></Link>
                </div>


                <div data-aos="fade-up" data-aos-duration="1000">
                    <Link className='seeMore' to={'https://food-grab-web.vercel.app/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://food-grab-web.vercel.app/'}><img src={imageEleven}alt="" /></Link>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <Link className='seeMore' to={'https://bmp-inovations.vercel.app/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://bmp-inovations.vercel.app/'}><img src={imageThirteen}alt="" /></Link>
                </div>


                <div data-aos="fade-up" data-aos-duration="1000">
                    <Link className='seeMore' to={'https://bilding.vercel.app/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://bilding.vercel.app/'}><img src={imageSeven}alt="" /></Link>
                </div>


                <div data-aos="fade-up" data-aos-duration="1000">
                    <Link className='seeMore' to={'https://www.genz-square.com/'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link to={'https://www.genz-square.com/'}><img src={imageFour}alt="" /></Link>
                </div>


                <div data-aos="fade-up" data-aos-duration="1000">
                    <Link className='seeMore' to={'https://smartchangeweb.vercel.app/dashboard'}>See Website <i class="uil uil-arrow-up-right"></i></Link>
                    <Link  to={'https://smartchangeweb.vercel.app/dashboard'}><img src={imageTwleve}alt="" /></Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SectionTow