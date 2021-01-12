import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
    background-color: ${({ bgcolor }) => (bgcolor  ? '#000d1a' : '#fff')};
`

const Container = styled.section`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ColumnLeft = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};
`

const Header = styled.h1`
    font-size: clamp(1.5rem, 6vw, 2rem);
    margin-bottom: 1rem;
    color: ${({ h1color }) => (h1color  ? '#CD853F' : '#000d1a')};
`

const Ptext = styled.p`
    margin-bottom: 2rem;
    color: ${({ pcolor }) => (pcolor  ? '#000' : '#fff')};
`

const ColumnRight = styled.section`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }  

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }    
    } 
`

const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, buttonLink, primary, reverse, bgcolor, h1color, pcolor, image}) => {
    return (
        <Section bgcolor={bgcolor}>
            <Container>
                <ColumnLeft reverse={reverse}>
                    <Header h1color={h1color}>{heading}</Header>
                    <Ptext pcolor={pcolor}>{paragraphOne}</Ptext>
                    <Ptext pcolor={pcolor}>{paragraphTwo}</Ptext>
                    <Button to={buttonLink} primary={primary}>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
