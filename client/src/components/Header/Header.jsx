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

<div className='w-full min-h-[50px] items-center absolute z-10 flex  md:flex-row justify-between text-white navbar-container pt-3'>

<div >
  <h3 className='pl-4 text-3xl'>Tatsam Resort </h3>
</div>
  <ul className=' gap-4  hidden sm:flex px-4 text-lg'>
    <li>
      <Link  to='/' className='hover:text-[#875426] transition-colors duration-300 hover:underline decoration-white decoration-3 underline-offset-8 '> 
        HOME
      </Link>
      </li>

     <li>
      <Link  to='/about' className='hover:text-[#875426] transition-colors duration-300 hover:underline decoration-white decoration-3 underline-offset-8 '> 
        ABOUT
      </Link>
      </li>
    
     <li>
      <Link  to='/contact' className='hover:text-[#875426] transition-colors duration-300 hover:underline decoration-white decoration-3 underline-offset-8 '> 
        CONTACT
      </Link>
      </li>

     <li>
      <Link  to='/gallery' className='hover:text-[#875426] transition-colors duration-300 hover:underline decoration-white decoration-3 underline-offset-8 '> 
        GALLERY
      </Link>
      </li>

     <li>
      <Link  to='/login' className='hover:text-[#875426] transition-colors duration-300 hover:underline decoration-white decoration-3 underline-offset-8 '> 
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
        <ul className="h-full w-full text-left pt-5 ">
           <li className='pb-3'>
      <Link  to='/' > 
        HOME
      </Link>
      </li>

     <li className='pb-3'>
      <Link  to='/about'> 
        ABOUT
      </Link>
      </li>
    
     <li className='pb-3'>
      <Link  to='/contact'> 
        CONTACT
      </Link>
      </li>

     <li className='pb-3'>
      <Link  to='/gallery'> 
        GALLERY
      </Link>
      </li>

     <li className='pb-3'>
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