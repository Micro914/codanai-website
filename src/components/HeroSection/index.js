import React, {useState, useEffect} from 'react'
// import Video from '../../videos/video.mp4'
// import Video2 from '../../videos/video2.mov'
import Video3 from '../../videos/video3.mp4'
import classes from './Videos.module.css';
// import styled from 'styled-components'
import { Modal } from '../../components/Popup/Modal'
import { GlobalStyle } from '../../components/Popup/globalStyles'
// import {animateScroll as scroll} from 'react-scroll';
import {Button} from '../ButtonElement';
import { 
HeroContainer, 
HeroBg, 
// VideoBg, 
HeroContent, 
HeroH1, 
HeroP, 
HeroBtnWrapper, 
ArrowForward, 
ArrowRight} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
//     const Container = styled.div`
//     display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//     `
//      const Buttons = styled.button`
//      min-width: 100px;
//   padding: 16px 32px;
//   border-radius: 4px;
//   border: none;
//   background: #141414;
//   color: #fff;
//   font-size: 24px;
//   cursor: pointer;
//     `

    const [showModal, setShowModal] = useState(false)

    // const openModal = () => {
    //     setShowModal(prev => !prev)
    // }

    useEffect(() => {
        const timer = setTimeout(() => setShowModal(prev => !prev), 3000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <HeroContainer>
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4"/> */}
                <video className={classes.Videos}  autoPlay loop muted playsInline>
                <source src={Video3} type="video/mp4"/>
                </video>
            </HeroBg>
            <HeroContent>
                <HeroH1>Software A La Medida</HeroH1>
                <HeroP>
                "Actualmente el adaptarse al uso de las tecnologias ya no es un lujo, es una necesidad para ser competitivos".
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="about" 
                    // onClick={openModal}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true}
                    spy={true}
                    duration={500}
                    // onClick={toggleHome}
                    primary="true"
                    dark="true"
                    // onClick={openModal}
                    >
                        Conocenos {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                    <Modal showModal={showModal} setShowModal={setShowModal} />
               <GlobalStyle/>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
