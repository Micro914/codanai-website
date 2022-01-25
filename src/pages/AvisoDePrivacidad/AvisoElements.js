import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#F9F9F9' : '#010606')};

  @media screen and (max-width: 768){
      padding: 100px 0;
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`
// export const InfoRow = styled.div`
//   display: grid;
//   grid-auto-columns: minmax(auto,1fr);
//   align-items: center;
//   grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

//   @media screen and (max-width: 768px){
//     grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
//   }
// `
export const TextWrapper = styled.div`
  max-width: 940px;
  padding-top: 10rem;
  /* padding-bottom: 60px; */
`
export const Title = styled.h1`
 margin-bottom: 10px;
  font-size: 48px;
  display: grid;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  color: #00A5CF;
`
export const TopParagraft = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: justify;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 1.4px;
  /* text-transform: uppercase; */
  margin-bottom: 16px;
`
export const SubTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 34px;
  display: grid;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  color: #00A5CF;
`
export const Sentence = styled.p`
color: #fff;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-align: justify;
`
export const List = styled.li`
color: #00A5CF;
  padding: 0px 20px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 1.2px;
`
export const SubParagraft = styled.p`
 color: #fff;
  margin-bottom: 10px;
  margin-top: 30px;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-align: justify;
`