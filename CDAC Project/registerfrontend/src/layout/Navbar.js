import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Vidyadayinee Online Study</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>

    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      
      </ul>
     
    </div>
    <span>
    <Link className="btn btn-outline-light" to="/addUser">Register</Link>
    <button className="btn btn-outline-light">Login</button>
    </span>
   </div>
</nav>


    </div>
  )
}
