import React from 'react'
import { HomeWrapper, Intro } from './Home.style'

const Home = () => {
  return (
    <HomeWrapper id="home">
      <Intro>
        <div className="home__text">
          <p>Hello, i'm</p>
          <h1>RICK BOOTH</h1>
          <p className="adjust">FRONT-END WEB DEVELOPER</p>
        </div>
      </Intro>
    </HomeWrapper>
  )
}

export default Home
