import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import GithubIcon from '../img/social/GitIcon'
import LinkIcon from '../img/social/linkIcon'

const FeatureGrid = ({ gridItems }) => (
  <div className="mt-10 flex flex-wrap justify-around">
    {gridItems.map(item => (
      <section style={{ height: "fit-content", borderRadius: "3rem", boxShadow: "rgb(203, 203, 203) 10px 10px 20px, rgb(255, 255, 255) -10px -10px 20px" }} key={item.text} id="features" className="mb-10 mx-5 md:mx-10 flex bg-white">
        <div style={{ maxWidth: '360px' }} className="">
          <PreviewCompatibleImage imageInfo={item} />
          <div className = "mx-8">
            <div className="text-center text-2xl my-4">Title</div>
            <p className="text-justify">{item.text}</p>
          </div>
          <div className="flex  flex-wrap justify-between p-4 align-bottom">
            <a href = "google.com" className="flex justify-center items-center hover:text-blue-800">
              <LinkIcon className = "fill-current"width={48} height={48} />
              <span className="mx-4 ">Demo</span>
            </a>
            <a href = "google.com" className="flex justify-center items-center hover:text-blue-800">
              <GithubIcon className = "fill-current " width={48} height={48} />
              <span className="mx-4">Code</span>
            </a>
          </div>
        </div>
      </section>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
