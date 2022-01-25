import React from 'react'
import Icon1 from '../../images/CincelNegro.png'
import {
SocioContainer, 
SocioH1, 
SocioWrapper, 
SocioCard, 
SocioIcon, 
} from './SociosElements';

const Socios = () => {
    return (
        <SocioContainer id="socios">
            <SocioH1>Nuestros Socios:</SocioH1>
            <SocioWrapper>
                <SocioCard>
                    <SocioIcon src={Icon1}/>
                </SocioCard>
            </SocioWrapper>
        </SocioContainer>
    )
}

export default Socios
