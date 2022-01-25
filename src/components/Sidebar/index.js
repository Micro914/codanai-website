import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import { 
SidebarContainer, 
Icon, CloseIcon, 
SidebarWrapper, 
SidebarMenu, 
SidebarLink, 
SideBtnWrap, 
// SidebarRoute
 } from './SidebarElements'
//  import {Link} from "react-router-dom"

const Sidebar = ({isOpen, toggle}) => {

    const toggleAbout = ()=>{
        scroll.scrollTo(720); 
    }
    const toggleServices = ()=>{
        scroll.scrollTo(1580);
    }
    const toggleUbicacion = ()=>{
        scroll.scrollTo(2690);
    }
    const toggleContacto = ()=>{
        scroll.scrollTo(4350);
    }
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggleAbout}>¿Quienes Somos?</SidebarLink>
                    <SidebarLink to="/" onClick={toggleServices}>Servicios</SidebarLink>
                    <SidebarLink to="/" onClick={toggleUbicacion}>Ubicación</SidebarLink>
                    <SidebarLink to="/" onClick={toggleContacto}>¡Contactanos!</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    {/* <SidebarRoute to="/signin">Sign In</SidebarRoute> */}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
