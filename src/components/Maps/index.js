import classes from './Maps.module.css';
import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { FiMapPin} from 'react-icons/fi';
import {
    MapsContainer, 
    MapsWrapper, 
    MapRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    Subtitle2, 
    InputWrap,
    ImgWrap,
    } from './MapsElements'

const Maps = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText,
    description, 
    description2, 
}) => {
    return (
        <>
            <MapsContainer lightBg={lightBg} id={id}>
            <MapsWrapper>
                <MapRow imgStart={imgStart}>
                  <Column1>
                    <TextWrapper>
                      <TopLine>{topLine}</TopLine>
                      <Heading lightText={lightText}>{headline}</Heading>
                      <Subtitle darkText={darkText}><FiMapPin/>{description}</Subtitle>
                      <Subtitle2 darkText={darkText}><AiFillPhone/>{description2}</Subtitle2>
                      <InputWrap>
                      </InputWrap>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                    <iframe title='Ubicacion' className={classes.Map} src="https://maps.google.com/maps?q=28.64842,-106.08433&z=16&output=embed"></iframe>
                    </ImgWrap>
                  </Column2>
                </MapRow>
            </MapsWrapper>
          </MapsContainer>
        </>
    )
}

export default Maps
