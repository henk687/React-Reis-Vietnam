import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import { FeaturesDataThree, FeaturesDataTwo } from '../data/FeaturesData'
import { SliderDataHanoi } from '../data/SliderData'


const Afbeeldingen = () => {
    return (
        <>
            <Features {...FeaturesDataTwo}/>
            <Hero slides={SliderDataHanoi} />
            <Features {...FeaturesDataThree}/>
        </>
    )
}

export default Afbeeldingen
