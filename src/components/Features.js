import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Section = styled.section`
    background: #000d1a;
    padding: 12rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Container = styled.div`
    background: #fff;
    padding: 3rem 2rem;
    position: relative;
`

const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

const ColumnLeft = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px -15px;
    justify-content: flex-start;
    padding: 1rem;
`

const Content = styled.div`
    flex: 0 0 50%;

    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 250px;
    }

    p {
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    h1 {
        margin-bottom: 2rem;
        line-height: 1.5;
    }
`

const ColumnRight = styled.div`
    position: absolute;
    top: -80px;
    right: 0;
    max-width: 850px;
    height: 140%;
    width: 45%;
    padding-left: 1rem;

    @media screen and (max-width: 768px) {
        height: 320px;
        top: -65px;
        width: 80%;
        margin: 0 auto;
        left: 0;
    }
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`


const Features = ({ heading, paragraphOne, paragraphTwo, buttonLabel, buttonLink, image}) => {

    return (
        <Section>
            <Container>
                <Wrap>
                    <ColumnLeft>
                        <Content data-aos='fade-right' data-aos-duration='1200' data-aos-once='true' data-aos-delay='300' data-aos-anchor-placements='center bottom'>
                            <h1>{heading}</h1>
                            <p>{paragraphOne}</p>
                            <p>{paragraphTwo}</p>
                            <Button to={buttonLink}>{buttonLabel}</Button>
                        </Content>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image src={image} data-aos='fade-left' data-aos-duration='1200' data-aos-once='true' data-aos-anchor-placements='center bottom'/>
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    )
}

export default Features
