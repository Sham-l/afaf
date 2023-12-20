import React from 'react'
import Nav from '../base/Nav'
import IntroBody from './IntroBody'
import Spacer from '../utils_components/Spacer'
import AboutUs from './AboutUs'
const HomePage = () => {
  return (
    <div>
      <div className='container-main'>
        <Nav />
        <Spacer height={'clamp(30px,4vw,62px)'}/>
      </div>
      <IntroBody />
      <Spacer height={'clamp(30px,4vw,62px)'}/>
      <AboutText />
      <Spacer height={'clamp(30px,4vw,62px)'}/>
      <AboutUs/>
    </div>
  )
}

export default HomePage

function AboutText() {
  return (
    <p style={{textAlign:'center',textDecoration:'underline',fontSize:'clamp(16px,2vw,20px)',fontWeight:'500'}}>About Us</p>
  )
}