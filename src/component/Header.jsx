import React from 'react';
import ProfileImg from "../assets/img/profieImg.png"
import '../assets/css/Header/header.css'
function Header() {
  return (
    <div>
          {/* Header Content Section */}
        <section class="hedar-content">
          {/* Profile Image */}
        <div class="profile-imges">
            <img src={ProfileImg} alt="" class="profile-img"/>
        </div>
        {/* Introduction */}
        <h1>Hi i am Refat</h1>
        {/* Content Text */}
        <div class="content-text">
            <h2>Building digital</h2>
            <h3 style={{textAlign : 'center'}}>products, brands, and experience.</h3>
            <p style={{textAlign : 'center'}}>A Frontend Developer and Visual Designer with experience in web design, brand identity and product design.</p>
        </div> 
           {/* Connect With Me Button */}
        <a href="https://github.com/therefat" class="btn btns">Connect With Me</a>
    </section>
    </div>
  )
}

export default Header