import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import Listings from '../components/Listings'
import { FeaturesData } from '../data/FeaturesData'
import { InfoData, InfoDataTwo } from '../data/InfoData'
import { SliderData } from '../data/SliderData'


const Home = () => {
    return (
        <>
            <Hero slides={SliderData}/>
            <InfoSection {...InfoData}/>
            <Listings />
            <Features {...FeaturesData}/>
            <InfoSection {...InfoDataTwo}/>
        </>
    )
}

export default Home
