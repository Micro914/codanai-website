import React,{useState, useEffect} from 'react'
import Logo from '../../images/Logo horizontal.png';
import './Logo.css'
import {FaBars } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
Nav,
NavbarContainer, 
// NavLogo, 
Image,
MobileIcon, 
NavMenu, 
NavItem, 
// NavLinks,
NavLink,
NavBtn,
// NavBtnLink
} 
from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = ()=>{
        scroll.scrollToTop()
        // document.location.href="/";  
    }
    const toggleAbout = ()=>{
        scroll.scrollTo(750); 
    }
    const toggleServices = ()=>{
        scroll.scrollTo(1600);
    }
    const toggleUbicacion = ()=>{
        scroll.scrollTo(2400);
    }
    const toggleContacto = ()=>{
        scroll.scrollTo(4080);
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    {/* <NavLogo to='/' onClick={toggleHome}>Codanai</NavLogo> */}
                     <NavMenu>
                        <NavItem>
                            <NavLink 
                            to="/"
                            // smooth={true}
                            duration={500} 
                            // spy={true} 
                            exact='true' 
                            onClick={toggleAbout}>
                            ¿Quiénes somos?
                            </NavLink>
                            {/* <NavLinks 
                            to="about"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={10}
                            onClick={toggleAbout}
                            >¿Quiénes somos?</NavLinks> */}
                            
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            to="/"
                            // smooth={true}
                            duration={500} 
                            // spy={true} 
                            exact='true' 
                            onClick={toggleServices}>
                            Servicios
                            </NavLink>
                            {/* <NavLinks 
                            to="services"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={10}>Servicios</NavLinks> */}
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            to="/"
                            // smooth={true}
                            duration={500} 
                            // spy={true} 
                            exact='true' 
                            onClick={toggleUbicacion}>
                            Ubicación
                            </NavLink>
                            {/* <NavLinks 
                            to="ubicacion"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={10}>Ubicación</NavLinks> */}
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            to="/"
                            onClick={toggleContacto}
                            // smooth={true}
                            duration={500} 
                            // spy={true} 
                            exact='true'>
                            ¡Contactanos!
                            </NavLink>
                            {/* <NavLinks 
                            to="discover"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={10}>¡Contactanos!</NavLinks> */}
                        </NavItem>
                    </NavMenu>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                   <Image to="/">
                    <img className={"Imagen"} src={Logo} to='/' alt="logo" onClick={toggleHome}></img>
                    </Image>
                    <NavBtn>
                        {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
                        Tu creces, nosotros crecemos contigo.
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
