import React from 'react'
import { HomeWrapper, Intro } from './Home.style'
import svgRect from '../../static/rect.svg'
import { IconLink } from '../common/IconLink'

export const Home = () => {
    return (
        <HomeWrapper id="home">
            <img className="svg-rect" src={svgRect} alt=""></img>
            <Intro>
                <div className="home__text">
                    <h1>RICK BOOTH</h1>
                    <p className="adjust">FRONT-END WEB DEVELOPER</p>
                    <div className="home__CTA">
                        <div className="home__social">
                            <IconLink
                                label="github"
                                icon={['fab', 'github']}
                                href="//github.com/rixcy"
                            />
                            <IconLink
                                label="twitter"
                                icon={['fab', 'twitter']}
                                href="//twitter.com/rixcydev"
                            />
                            <IconLink
                                label="linkedin"
                                icon={['fab', 'linkedin']}
                                href="//www.linkedin.com/in/rick-booth-480677119/"
                            />
                        </div>
                    </div>
                </div>
            </Intro>
        </HomeWrapper>
    )
}
