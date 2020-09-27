import React from 'react'

import SkewBg from 'src/components/common/SkewBg'
import Avatar from './Avatar'

import { AboutWrapper, AboutInfo } from './About.style'

const About = () => {
  return (
    <AboutWrapper id="about-me">
      <SkewBg />
      <AboutInfo>
        <h5 className="prose text-white mr-12">
          Hi, I'm Rick Booth. I'm a passionate self-taught developer with both
          front end and full stack experience. Currently working as a head of
          front-end development at 9xb, I build processes and architectures to
          introduce modern technologies including TypeScript, NextJS, Serverless
          deployments and more.
        </h5>
        <div className="avatar__wrapper">
          <Avatar src="avatar.png" />
        </div>
      </AboutInfo>
    </AboutWrapper>
  )
}

export default About
