import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import { FeaturesDataFour, FeaturesDataThree, FeaturesDataTwo } from '../data/FeaturesData'
import { SliderDataSapa, SliderDataHanoi, SliderDataHalongbay } from '../data/SliderData'


const Afbeeldingen = () => {
    return (
        <>
            <Features {...FeaturesDataTwo}/>
            <Hero slides={SliderDataHanoi} />
            <Features {...FeaturesDataThree}/>
            <Hero slides={SliderDataSapa}/>
            <Features {...FeaturesDataFour}/>
            <Hero slides={SliderDataHalongbay}/>
        </>
    )
}

export default Afbeeldingen
