import React from 'react'
import GithubIcon from '../img/social/GitIcon'
import TwitterIcon from '../img/social/twitterIcon'
import LinkedinIcon from '../img/social/linkedinIcon'

const Socials = () => {
  
  return (
    <span>
        <a className="text-sm inline-block leading-none ml-4 md:mt-0" href="https://twitter.com/naomi_spicer/"><GithubIcon width = {32} height = {32} className = "fill-current text-white hover:text-purple-300" /></a>
        <a className="text-sm inline-block leading-none ml-4 md:mt-0" href="https://twitter.com/naomi_spicer/"><TwitterIcon width = {32} height = {32} className = "fill-current text-white hover:text-purple-300" /></a>
        <a className="text-sm inline-block leading-none ml-4 md:mt-0" href="https://twitter.com/naomi_spicer/"><LinkedinIcon width = {32} height = {32} className = "fill-current text-white hover:text-purple-300" /></a>
    </span>
  )
}

export default Socials