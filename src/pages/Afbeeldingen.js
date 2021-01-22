import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import { FeaturesDataThree } from '../data/FeaturesData'
import { SliderData, SliderDataHanoi } from '../data/SliderData'


const Afbeeldingen = () => {
    return (
        <>
            <Hero slides={SliderDataHanoi} />
            <Features {...FeaturesDataThree}/>
            <Hero slides={SliderData}/>
        </>
    )
}

export default Afbeeldingen
