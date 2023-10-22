import React from 'react';

const NavBar=()=>{
return (
<nav>
  <div className="Logo"  style={{maxWidth:'80px'}}>
<img src="https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover.png" alt="Logo" style={{ width: '100%', height: 'auto' }}/>
  </div>

  <ul >
    <li href="#">Menu</li>
    <li href="#">Location</li>
    <li href="#">About</li>
    <li href="#">Contact</li>
  </ul>

  <button>Login</button>
</nav>
  
)
  
}
export default NavBar;
