import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import { FeaturesDataFive, FeaturesDataFour, FeaturesDataSix, FeaturesDataThree, FeaturesDataTwo } from '../data/FeaturesData'
import { SliderDataSapa, SliderDataHanoi, SliderDataHalongbay, SliderDataNinhbinh, SliderDataMaichau } from '../data/SliderData'


const Afbeeldingen = () => {
    return (
        <>
            <Features {...FeaturesDataTwo}/>
            <Hero slides={SliderDataHanoi} />
            <Features {...FeaturesDataThree}/>
            <Hero slides={SliderDataSapa}/>
            <Features {...FeaturesDataFour}/>
            <Hero slides={SliderDataHalongbay}/>
            <Features {...FeaturesDataFive}/>
            <Hero slides={SliderDataNinhbinh}/>
            <Features {...FeaturesDataSix}/>
            <Hero slides={SliderDataMaichau}/>
        </>
    )
}

export default Afbeeldingen
