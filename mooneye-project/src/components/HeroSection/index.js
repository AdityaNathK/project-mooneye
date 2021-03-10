import React from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg
 } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    A Strategic Electronic Company Focused in Innovative Products
                </HeroH1>
                <HeroP>
                    sample text
                </HeroP>
                <HeroBtnWrapper>
                    <Button to = "contact">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
