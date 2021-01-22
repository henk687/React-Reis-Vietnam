import React from 'react'
import styled from 'styled-components'
import EmailBg from "../images/halongbay8.JPG"

const ContactFormSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`

const HeroWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%,  rgba(0,0,0,0.5) 35%,  rgba(0,0,0,0.1) 100%), url(${EmailBg}) no-repeat center;
    background-size: cover;
`

const ModalWrapper =styled.div `
    width: 1000px;
    height: 700px;
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
    background: url(${EmailBg}) no-repeat center;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: url(${EmailBg}) no-repeat center;
        box-shadow: inset 0 0 2000px rgba(255,255,255,0.5);
        filter: blur(10px);
        margin: -20px;
        z-index: -1;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ContactForm = () => {
    return (
        <ContactFormSection>
            <HeroWrapper>
                <ModalWrapper>
                     
                </ModalWrapper>        
            </HeroWrapper>
            
        </ContactFormSection>
    )
}

export default ContactForm
