import React from 'react'
import FirstPage from '../COMPONENTS/FirstPage'
import Footer from '../COMPONENTS/Footer'
import AboutMe from '../COMPONENTS/AboutMe'
import Education from '../COMPONENTS/Education'
import Experience from '../COMPONENTS/Experience'
import Achivements from '../COMPONENTS/Achivements'
import Certifications from '../COMPONENTS/Certifications'

const Home = () => {
  return (
    <div>
        <FirstPage/>
        <AboutMe/>
        <Education/>
        <Experience/>
        <Achivements/>
        <Certifications/>
        <Footer/>
    </div>
  )
}

export default Home