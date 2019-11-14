import React from 'react'

import SkewBg from 'src/components/common/SkewBg'
import Avatar from './Avatar'

import { AboutWrapper, AboutInfo } from './About.style'

const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutInfo>
        <SkewBg />
        <p>
          Hi, I'm Rick Booth. I'm a passionate self-taught front-end web developer with full stack experience. As a
          self-driven, forward-thinking individual, I constantly strive to embrace new techniques and technologies,
          understanding their impact and weaving them into new and existing projects alike. I particularly like working
          with JavaScript.
        </p>
        <div className="avatar__wrapper">
          <Avatar src="avatar.png" />
        </div>
      </AboutInfo>
    </AboutWrapper>
  )
}

export default About
