import React from "react";
import { useEffect } from "react";
import {Link, useLocation} from "react-router-dom"
function Navbar() {
    let location=useLocation()
    useEffect(()=>{
        console.log(location.pathname)
    },[location]
    )
    
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            IEMSecure
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"477px"}}>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname==="/" ? "active primary":""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a class={`nav-link ${location.pathname==="#about" ? "active primary":""}`} aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class={`nav-link ${location.pathname==="#services" ? "active primary":""}`} aria-current="page" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item" >
                <a class={`nav-link ${location.pathname==="/about" ? "active":""}`} href="https://www.iemsecure.com/Contact-us" target="blank">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
