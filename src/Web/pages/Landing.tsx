import React from 'react'
import Hero from '../components/Hero'
import CategoriesSection from '../components/CategoriesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import FeaturedProffesionals from '../components/FeaturedProffesionals'
import Testimonials from '../components/Testimonials'
import ProSection from '../components/ProSection'

const Landing:React.FC = () => {
  return (
    <div>
        <Hero/>
        <CategoriesSection/>
        <div id='works'>
        <HowItWorksSection/>
        </div>
       <div id='top-pros'>
       <FeaturedProffesionals/>
       </div>
       
        <Testimonials/>
        <ProSection/>
    </div>
  )
}

export default Landing
