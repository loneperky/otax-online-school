import React from 'react'
import { Link } from 'react-router-dom'

const Developer = () => {
  return (
    <>
      <div className="overall-view">
        <div className="top">
          <h1>Artificial Intelligence / Machine Learning Software development Incubator</h1>
          <p>In our incubator program,students will build full-scale AI and ML Powered Software solutions using the skills below, with the top teams winning $1000 each for their innovative projects. </p>
          <Link to="">Pick a course to learn below: </Link>
        </div>
        <div className="top-courses">
          <div className="couser1">
            <div className="logg">

            </div>
            <h3>Front/Backend Web Development (Full stack with JavaScript)</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Developer