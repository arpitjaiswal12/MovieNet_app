import React from 'react'
import logo from "./Logo.png"

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid">
                    <div className="logo">
                        <img src={logo} alt="" srcset="" style={{ width: "50px", height: "50px",marginRight:"10px" }} />
                    </div>
                    <a className="navbar-brand" href="/">WatchNet</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/AboutUs">AboutUs</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/Popular">Popular</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/Top_Rated">Top Rated</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/Upcoming">Upcoming</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    By Genre
                                </a>
                                <ul className="dropdown-menu d">
                                    <li className='d-flex'>
                                        <a className="dropdown-item" href="/Action">Action</a>
                                        <a className="dropdown-item" href="/Adventure">Adventure</a>
                                        <a className="dropdown-item" href="/Animation">Animation</a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className='d-flex'>
                                        <a className="dropdown-item" href="/Comedy">Comedy</a>
                                        <a className="dropdown-item" href="/Crime">Crime</a>
                                        <a className="dropdown-item" href="/Documentary">Documentary</a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className='d-flex'>
                                        <a className="dropdown-item" href="/Drama">Drama</a>
                                        <a className="dropdown-item" href="/Family">Family</a>
                                        <a className="dropdown-item" href="/Horror">Horror</a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className='d-flex'>
                                        <a className="dropdown-item" href="/Romance">Romance</a>
                                        <a className="dropdown-item" href="/Science Fiction">Science Fiction</a>
                                        <a className="dropdown-item" href="/Thriller">Thriller</a>
                                    </li>
                                </ul>
                            </li>
                            

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
