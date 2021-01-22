import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import { FeaturesDataEight, FeaturesDataFive, FeaturesDataFour, FeaturesDataSeven, FeaturesDataSix, FeaturesDataThree, FeaturesDataTwo } from '../data/FeaturesData'
import { SliderDataSapa, SliderDataHanoi, SliderDataHalongbay, SliderDataNinhbinh, SliderDataMaichau, SliderDataHue, SliderDataHoian } from '../data/SliderData'


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
            <Features {...FeaturesDataSeven}/>
            <Hero slides={SliderDataHue}/>
            <Features {...FeaturesDataEight}/>
            <Hero slides={SliderDataHoian}/>
        </>
    )
}

export default Afbeeldingen
