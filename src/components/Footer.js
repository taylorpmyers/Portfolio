import React from 'react'
import Socials from './Socials'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-black text-white text-center py-5">
          <Socials /><br></br>
          <button className="font-semibold py-2 px-4 mt-2 rounded bg-white text-black"> Download Resume</button>
      </footer>
    )
  }
}

export default Footer
