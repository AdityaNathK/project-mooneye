import React from 'react';
import Icon1 from '../../images/svgimage.svg';
import Icon2 from '../../images/svgimage.svg';
import Icon3 from '../../images/svgimage.svg';
import{
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesCard,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from './ServicesElements.js'

const Services = () => {
    return (
        <ServicesContainer id = 'products'>
            <ServicesH1> Our Products</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src = {Icon1}/>
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>
                            asdasd asd asd asd asd asdasdasd asdasd sd asd asd asdasdasd ad asdasd
                        </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon2}/>
                        <ServicesH2>Exp 3Expenses</ServicesH2>
                        <ServicesP>
                            asdasd asd asd asd asd asdasdasd asdasd sd asd asd asdasdasd ad asdasd
                        </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon3}/>
                        <ServicesH2>Reduce 14 </ServicesH2>
                        <ServicesP>
                            asdasd asd asd asd asd asdasdasd asdasd sd asd asd asdasdasd ad asdasd
                        </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
            
        
    )
}

export default Services
