import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm'
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>find your book of choice</h2>
            <br />
            <p className='header-text fs-18 fw-3'>Discover Your Next Literary Adventure at Bookhub - Your Ultimate Book Search Destination! Explore a Vast Library of Books, Find Your Favorites, and Dive into a World of Endless Stories. Start Your Journey of Reading and Imagination Today! </p>
            <SearchForm />
        </div>
        </header>
        </div>
    
  )
}

export default Header
