import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ({isConnected , setIsConnected}) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/help/iheb">Help</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin">Admin</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/weather">Weather</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <button onClick={()=> setIsConnected(!isConnected) } > {isConnected ? "Logout" : "Login" }</button>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
