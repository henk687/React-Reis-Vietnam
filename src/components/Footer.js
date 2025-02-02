import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa'
import styled, { css } from 'styled-components/macro'
import { Button } from './Button'
import { Link } from 'react-router-dom'

const Section = styled.section`
    background: #000d1a;
    color: #fff;
    width: 100%;
    min-height: 600px;
    padding: 3rem calc((100vw - 1300px) / 2);
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
`

const FooterTop = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const Quote = styled.div`
    flex: 1;
    padding: 2rem 0rem;

    h3 {
        font-size: clamp(2rem, 8vw, 5rem);
    }
`

const FooterInfo = styled.div`
    padding: 2rem;
    line-height: 3;
    display: flex;
    flex-direction: column;

    a {
        color: #fff;
        text-decoration: none;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 0rem;
    }
`

const FooterBottom = styled.div`
    display: flex;
    padding: 2rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const SocialIcons = styled.div`
    display: flex;
    width: 50%;

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
        width: 100%;
    }
`

const Icons = css`
    font-size: clamp(1rem, 6vw, 2rem);
    margin-right: 1.5rem;
    color: #cd853f;
`

const Instagram = styled(FaInstagram)`
    ${Icons}
`
/*const Facebook = styled(FaFacebookF)`
    ${Icons}
`
const LinkedIn = styled(FaLinkedinIn)`
    ${Icons}
`
const Youtube = styled(FaYoutube)`
    ${Icons}
`*/

const Contact = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
    }
`

const Footer = () => {
    return (
        <Section>
            <Container>
                <FooterTop>
                    <Quote>
                        <h3>Vietnam <br /> Rondreis 2017</h3>
                    </Quote>
                    <FooterInfo>
                        <h4>Pagina's</h4>
                        <Link to="/">Home</Link>
                        <Link to="/bestemmingen">Bestemmingen</Link>
                        <Link to="/afbeeldingen">Afbeeldingen</Link>
                    </FooterInfo>
                    
                </FooterTop>
                <FooterBottom>
                    <SocialIcons>
                        <a href="https://www.instagram.com/awesomevietnamtravel/?hl=nl" rel="noopener noreferrer" target="_blank"><Instagram /></a>
                    </SocialIcons>
                    <Contact>
                        <Button to="/afbeeldingen">Onze Foto's <IoMdArrowRoundForward /></Button>
                    </Contact>
                </FooterBottom>
            </Container>
        </Section>
    )
}

export default Footer
