import React from 'react'
import './Header.css'
function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-container">
  <div class="container-fluid">
    <a class="navbar-brand fs-3" href="#">Tatsam Resort</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end pe-5" id="navbarNav">
      <ul class="navbar-nav fs-5">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}

export default Header