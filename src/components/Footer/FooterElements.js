import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
`
export const FooterWrap = styled.div`
  padding: 48px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px){
    padding-top: 32px;
  }
`
export const FooterLinksWrapper = styled.div`
  display: inline-flex;
  /* margin-left: 190px; */
 

  @media screen and (max-width: 820px){
      flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 100px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px){
      margin:0;
      padding: 10px;
      width: 100%;
  }
`
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  
`
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover{
      color: #7DBA00;
      transition: 0.3s ease-out;
  }
`
export const FooterLinks = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover{
      color: #7DBA00;
      transition: 0.3s ease-out;
  }
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`
export const Image = styled.i`
   display: none;
   margin-top: 30px;

   @media screen and (max-width: 820px){
     display: flex;
    margin:0;
      padding: 10px;
      width: 50%;
  }
`

export const Image2 = styled.a`
   display: inline-flex;
   margin-right: 80px;

   @media screen and (max-width: 820px){
     display: none;
  }
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`