import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <section class="footer">
  <div class="share">
    <NavLink to="#" class="fab fa-facebook"></NavLink>
    <NavLink to="#" class="fab fa-twitter"></NavLink>
    <NavLink to="#" class="fab fa-instagram"></NavLink>
    <NavLink to="#" class="fab fa-linkedin"></NavLink>
    <NavLink to="#" class="fab fa-whatsapp"></NavLink>
  </div>
  <div class="links">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/service">Our Services</NavLink>
    <NavLink to="/menu">Menu</NavLink>
    <NavLink to="/reservation">Reservation</NavLink>
    <NavLink to="contactus">Contact Us</NavLink>
  </div>
  <div class="contactno">Contact Us : <span>+01 234 567 8910 <br/>shiva@sh.com</span></div>
</section>
    </>
  )
}

export default Footer;