import React, { useEffect } from 'react';
import icons4 from '../icons/icon4.png';
import './style.css';

function Header  ()  {


  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src={icons4} id="i2" className="align-text-center" /><span id="companyName">TutorIT</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                {/* {
                    JSON.parse(localStorage.getItem("User")) &&
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                } */}
                <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Famous Courses
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Machine Learning</a></li>
                    <li><a className="dropdown-item" href="#">Database Design</a></li>
                    <li><a className="dropdown-item" href="#">Computer Networks</a></li>
                    <li><a className="dropdown-item" href="#">Big Data</a></li>
                    <li><a className="dropdown-item" href="#">Many more...</a></li>
                    </ul>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li> */}
                

                {
                    JSON.parse(localStorage.getItem("User")) ?
                        <li className="nav-item">
                            <a className="nav-link" href="/login">
                            <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => {
                                localStorage.removeItem("User");
                            }}>Logout</button>
                            </a>
                        </li> : 
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                <button type="button" className="btn btn-outline-primary btn-sm">Login</button>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signUp">
                                <button type="button" className="btn btn-outline-info btn-sm">SignUp</button>
                                </a>
                            </li>
                        </>
                }
            </ul>
            {/* <form className="d-flex" style={{maxWidth: '400px'}}>
                <input className="form-control me-2" type="search" placeholder="Courses" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <br />
        </div>
        </div>
    </nav>
    </>
  )
}

export default Header