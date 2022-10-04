import React from "react";

const NavBarMenu = () => {
  return (
    <nav class="navbar bg-dark mt-0">
      <div class="container ">
        <a class="navbar-brand text-light"> Dynamic <b>Form</b></a>
        <div class="navbar-text d-flex text-light p-0">
          <a
            className="navbar-brand text-light"
            target="_blank"
            href="wwww.nomiplanillas.com"
          >
            signed in as
             {'   :'}  <b> Jaime Urrego  </b>
          </a>
        </div>
      </div>
    </nav>

    
  );
};

export default NavBarMenu;
