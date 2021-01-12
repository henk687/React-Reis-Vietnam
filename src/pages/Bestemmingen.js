import React from 'react'
import InfoSection from '../components/InfoSection'
import { InfoDataEight, InfoDataFive, InfoDataFour, InfoDataSeven, InfoDataSix, InfoDataThree, InfoDataNine } from '../data/InfoData'

const Bestemmingen = () => {
    return (
        <>
            <InfoSection {...InfoDataThree}/>
            <InfoSection {...InfoDataFour}/>
            <InfoSection {...InfoDataFive}/>
            <InfoSection {...InfoDataSix}/>
            <InfoSection {...InfoDataSeven}/>
            <InfoSection {...InfoDataEight}/>
            <InfoSection {...InfoDataNine}/>
        </>    
    )
}

export default Bestemmingen
