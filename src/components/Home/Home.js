import React from 'react'
import { HomeWrapper, Intro } from './Home.style'
import svgRect from '../../static/rect.svg'

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>
      <Intro>
        <div className="home__text">
          <h1>RICK BOOTH</h1>
          <p className="adjust">FRONT-END WEB DEVELOPER</p>
        </div>
      </Intro>
    </HomeWrapper>
  )
}

export default Home
