import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from '../../images/logo vertical.png';
// import {Button} from '../ButtonElement';
import {animateScroll as scroll} from 'react-scroll';
import {
FooterContainer,
FooterWrap, 
FooterLinksContainer, 
FooterLinksWrapper, 
FooterLinkItems, 
FooterLinkTitle, 
FooterLink,
FooterLinks,
SocialMedia,
SocialMediaWrap,
SocialLogo,
Image,
Image2,
WebsiteRights,
SocialIcons,
SocialIconLink
} from './FooterElements';
import Form from './Form';

const Footer = () => {

    const toggleHome = ()=>{
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                <Image2 onClick={toggleHome}>
                        <img src={Logo} to='/' alt="logo" style={{cursor: 'pointer', height: '150px' }}></img>
                        </Image2>
                    <FooterLinksWrapper>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle>Portafolio</FooterLinkTitle>
                                <FooterLink to="/">Proyecto 1</FooterLink>
                                <FooterLink to="/">Proyecto 2</FooterLink>
                                <FooterLink to="/">Proyecto 3</FooterLink>
                        </FooterLinkItems> */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Nosotros</FooterLinkTitle>
                                {/* <FooterLink to="/">Aviso de privacidad</FooterLink> */}
                                {/* <FooterLink to="/">Nuestra historia</FooterLink> */}
                                <FooterLink to="aviso_privacidad">Aviso de Privacidad</FooterLink>
                                <FooterLink to="/">Nuestros valores</FooterLink>
                                <FooterLink to="/">Empleo</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Más Enlaces</FooterLinkTitle>
                                <FooterLink to="/">Preguntas Frecuentes</FooterLink>
                                <FooterLink to="/">Nuestro Boletín</FooterLink>
                                <FooterLinks href="https://coronavirus.gob.mx" target="_blank">Información COVID-19</FooterLinks>
                                <FooterLink to="/">Nuestro Albúm</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>News CODANAI</FooterLinkTitle>
                            <Form/>
                            {/* <Button>Click me</Button> */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo >
                        <Image onClick={toggleHome}>
                                 <img src={Logo} to='/' alt="logo" style={{cursor: 'pointer', height: '150px' }}></img>
                            </Image>
                        </SocialLogo>
                        <WebsiteRights>Codanai © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>   
                            <SocialIconLink href="/" target="" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="https://mx.linkedin.com/company/codanai" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
