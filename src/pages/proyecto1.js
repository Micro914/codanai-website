import React, {useState} from 'react'
// import {Link} from "react-router-dom"
import ImageSlider from '../components/Carousel/ImageSlider'
import { SliderData } from '../components/Carousel/SliderData'
// import styled from 'styled-components'
// import { Modal } from '../components/Popup/Modal'
// import { GlobalStyle } from '../components/Popup/globalStyles'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const SigninPage = () => {

//     const Container = styled.div`
//     display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//     `
//     const Button = styled.button`
//      min-width: 100px;
//   padding: 16px 32px;
//   border-radius: 4px;
//   border: none;
//   background: #141414;
//   color: #fff;
//   font-size: 24px;
//   cursor: pointer;
//     `

//     const [showModal, setShowModal] = useState(false)

//     const openModal = () => {
//         setShowModal(prev => !prev)
//     }
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    } 
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
            <ImageSlider slides={SliderData}/>
            {/* <Container>
               <Button onClick={openModal}>Im a modal</Button> 
               <Modal showModal={showModal} setShowModal={setShowModal} />
               <GlobalStyle/>
            </Container> */}
            <ImageSlider slides={SliderData}/>
            <Footer/>
        </>
    )
}

export default SigninPage
