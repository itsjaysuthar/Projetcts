import React from 'react'
import {
    facebook, fax, googlePlus, home, instagram, newPost, phone, twitter
} from '../icons'

const Footer = (props) => {
  return (
    <>
        <hr/>
        <div className="container">
          <footer className="page-footer font-small blue pt-4">
            {/* Footer Links */}
            <div className="container text-left text-md-left">
              {/* Grid row */}
              <div className="row">
                {/* Grid column */}
                <div className="col-md-4 mt-md-0 mt-3">
                  {/* Content */}
                  <h5 className="text-uppercase c2">Quick Contact</h5>
                  <p><img src={home} />  University of Texas at Dallas</p>
                  <p><img src={phone} />  +1-4699286769</p>
                  <p><img src={fax} />  +1-4699272666</p>
                  <p><img src={newPost} />  admissions@utdallas.edu</p>
                </div>
                {/* Grid column */}
                <hr className="clearfix w-100 d-md-none pb-3" />
                {/* Grid column */}
                <div className="col-md-4 mb-md-0 mb-3">
                  {/* Links */}
                  <h5 className="text-uppercase c2">Our Courses</h5>
                  <ul className="list-unstyled">
                    <li>Machine Learning</li>
                    <li>Database Design</li>
                    <li>Web Programming Languages</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Computer Networks</li>
                    <li>Big Data</li>
                    <li>Discretre Structures</li>
                    <li>Many more...</li>
                  </ul>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 mb-md-0 mb-3">
                  {/* Links */}
                  <h5 className="text-uppercase c2">Links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p><img src={facebook} /><a href="#!"> Facebook</a></p>
                    </li>
                    <li>
                      <p><img src={instagram} /><a href="#!"> Instagram</a></p>
                    </li>
                    <li>
                      <p><img src={twitter} /><a href="#!"> Twitter</a></p>
                    </li>
                    <li>
                      <p><img src={googlePlus} /><a href="#!"> Google plus</a></p>
                    </li>
                  </ul>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
            {/* Footer Links */}
          </footer>
        </div>
        <br />
    </>
  )
}

export default Footer