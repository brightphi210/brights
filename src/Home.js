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
      <SectionThree />

    </div>
  )
}

export default Home