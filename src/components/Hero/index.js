import React from 'react'

import {Section,Content,Left,Title,Desc,Button} from './heroElements'

const Hero = () => {
    return (
        
            <Section>
                <Content>
                    <Left>
                        <Title>Get 2 FREE Stocks<br/>valued up to 1850!</Title>
                            <Desc>
                                Open and fund a brokerage account with $100 or more and you will
                                have a chance of claiming stocks like <span>GOOG, FB, SBUX</span>{''}and more!
                            </Desc>
                            <Button href='/'>
                                <span>Clain Your Free Stocks now</span>
                            </Button>
                        
                    </Left>
                </Content>
            </Section>
       
    )
}

export default Hero
