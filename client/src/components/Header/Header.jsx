import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
   const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (

<div className='w-full min-h-[50px] items-center absolute z-10 flex  md:flex-row justify-between '>

<div >
  <h3>Tatsam Resort </h3>
</div>
  <ul className=' gap-3  hidden sm:flex px-4'>
    <li>
      <Link  to='/'> 
        HOME
      </Link>
      </li>

     <li>
      <Link  to='/about'> 
        ABOUT
      </Link>
      </li>
    
     <li>
      <Link  to='/contact'> 
        CONTACT
      </Link>
      </li>

     <li>
      <Link  to='/gallery'> 
        GALLERY
      </Link>
      </li>

     <li>
      <Link  to='/login'> 
        LOGIN/REGISTER
      </Link>
      </li>
     
  </ul>
<div onClick={handleNav} className="sm:hidden z-10">
  <GiHamburgerMenu size={20} className='mr-4 cursor-pointer' />
</div>
<div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
           <li>
      <Link  to='/'> 
        HOME
      </Link>
      </li>

     <li>
      <Link  to='/about'> 
        ABOUT
      </Link>
      </li>
    
     <li>
      <Link  to='/contact'> 
        CONTACT
      </Link>
      </li>

     <li>
      <Link  to='/gallery'> 
        GALLERY
      </Link>
      </li>

     <li>
      <Link  to='/login'> 
        LOGIN/REGISTER
      </Link>
      </li>
     
        </ul>
      </div>
</div>




//     <nav class="navbar navbar-expand-lg navbar-container">
//   <div class="container-fluid">
//     <a class="navbar-brand fs-3" href="#">Tatsam Resort</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse justify-content-end pe-5" id="navbarNav">
//       <ul class="navbar-nav fs-5">
//         <li class="nav-item ">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">About</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Contact</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Login</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
)
}

export default Header