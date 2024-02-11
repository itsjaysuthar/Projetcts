import React from 'react'
import  {
    course1, course2, course3, course4, course5, course6
  } from '../images'

const Courses = props => {
  return (
    <>
        <div className="container">
          <h3 className="c1">Explore your courses...</h3>
          <br />
          <div className="row" style={{margin: '3px'}}>
            <div className="col-md-4">
              <div className="card">
                <img src={course1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Machine Learning</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={course2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Web Programming Languages</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={course3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Database Design</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row" style={{margin: '3px'}}>
            <div className="col-md-4">
              <div className="card">
                <img src={course4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Computer Networks</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={course5} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Data Structures and Algorithms</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={course6 } className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Big Data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
    </>
  )
}

export default Courses