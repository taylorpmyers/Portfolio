import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div id="home" className = "z-10 bg-blue-800 font-sans">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link href={`https://fonts.googleapis.com/css?family=Biryani|Poppins&display=swap`} rel="stylesheet"></link>        
      </Helmet>
      <Navbar />
      <div >{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
