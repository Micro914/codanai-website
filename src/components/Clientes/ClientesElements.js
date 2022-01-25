import styled from 'styled-components'

export const ClientContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  

  @media screen and (max-width: 768px){
      height: 2000px
  }

  @media screen and (max-width: 480px){
      height: 2100px
  }
`
export const ClientWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`
export const ClientCard = styled.div`
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.2); */
  transition: all 0.2s ease-in-out;

  &:hover{
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
  }
`
export const ClientIcon = styled.img`
  height: 130px;
  width: auto;
  margin-bottom: 10px;

  @media screen and (max-width: 480px){
    height: 90px;
    width: 250px;
  }
`
export const ClientIcon2 = styled.img`
  height: 120px;
  width: 370px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px){
    height: 80px;
    width: 260px;
  }
`
export const ClientH1 = styled.h1`
  font-size: 2.5rem;
  color: #333333;
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
      font-size: 2rem;
  }
`