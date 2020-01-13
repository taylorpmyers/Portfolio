import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Img from 'gatsby-image'
import Untitled from '../img/Untitled.png'
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div>
      <div className="flex flex-wrap max-w-5xl mb-16 text-white mx-auto bg-blue-800 ">
        <div className="w-full sm:w-1/3 h-auto my-auto m-5 sm:m-0">
          <Img alt = "profile picture of taylor myers" className="max-w-xs mx-auto mb-5 sm:ml-5 h-auto border-8 border-purple-300" fluid={image.childImageSharp.fluid} />
        </div>
        <div className="w-full sm:w-2/3 my-auto m-5 sm:m-0">
          <div className="text-center sm:mx-5">
            <h1 className="text-4xl text-purple-300 sm:text-5xl md:text-6xl font-semibold lg:tracking-widest font-serif">Taylor Myers</h1>
            <h2 className="text-3xl font-serif font-semibold">Software Engineer</h2>
            <h3 id = "about" style = {{textDecorationColor: "#d6bcfa"}} className="underline mt-5 text-4xl sm:text-5xl mb-2 font-serif">About Me</h3>
            <p className="text-left md:w-2/3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor lorem ac volutpat suscipit. Mauris odio quam, dapibus sed tempus posuere, porttitor in ligula. Fusce nec tristique lorem, id semper purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
            <button className="bg-purple font-semibold py-2 px-4 mt-5 rounded bg-purple-300 text-blue-800"> Download Resume</button>
          </div>
        </div>
      </div>
        <img alt = "curved line to seperate page" src = {Untitled} className = "w-full block bg-blue-800" ></img>
      <section style = {{marginTop: "-1px"}}className="flex flex-wrap bg-gray-200 text-black">
        <div className="max-w-5xl mx-auto">
          <div  id = "projects"className="block font-semibold font-serif text-5xl  sm:text-6xl pt-20 text-center">Projects</div>
          <Features gridItems={intro.blurbs} />
        </div>
      </section>
      <div className="text-white mx-auto py-6 bg-black justify-center rounded">
        <div className="max-w-5xl mx-auto">
          <div className="block mx-5 mb-5 pt-20 text-5xl sm:text-6xl font-serif text-center " id = "contact">Contact Me</div>
          <p className = "text-center text-lg">916-270-8977</p>
          <p className = "text-center text-lg mb-6">taylor.p.myers@gmail.com</p>
          <form className="rounded overflow-hidden mx-5 mb-20" name="emaillist" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="emaillist" />
            <div className="inline-block w-full md:w-1/2 md:pr-5">
              <div className="bg-grey-light text-grey-dark ">Name</div>
              <input type="text" name="name" className="px-2 py-2 w-full mb-4 rounded text-black" placeholder="John Doe"></input>
            </div>
            <div className="inline-block w-full md:w-1/2 md:pl-5">
              <div className="bg-grey-light text-grey-dark">Email</div>
              <input type="email" name="email" className="px-2 py-2 w-full mb-4 rounded text-black" placeholder="myname@example.com"></input>
            </div>
            <div className="bg-grey-light text-grey-dark">Subject</div>
            <input type="text" name="subject" className="px-2 py-2 w-full mb-4 rounded text-black" placeholder="Subject"></input>
            <div className="bg-grey-light text-grey-dark">Message</div>
            <textarea className="w-full bg-grey-light shadow-inner text-black p-4 mb-4 rounded border-0" placeholder="Your Message" rows="6"></textarea>
            <button type="submit" name="submit" className="block mx-auto px-2 py-2 w-full md:w-1/2 rounded font-semibold py-2 px-4 mt-4 rounded bg-blue-800 text-black">Submit Form</button>
          </form>
        </div>
      </div>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 600 quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 360, maxHeight: 240,quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
