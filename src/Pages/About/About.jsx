import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to Bookhub, your literary sanctuary where the world of books comes to life. Bookhub is your go-to platform for all things book-related. Our aim is simple: to make your book searching experience smooth and delightful. With an extensive library, we cater to the needs of all book enthusiasts, whether you're a dedicated reader, a student in pursuit of academic resources, or simply someone looking to explore a specific title.
              Our website is designed with you in mind. It offers a powerful search feature that allows you to find books by title, author, genre, or keywords. Navigating Bookhub is effortless, thanks to our user-friendly interface. Each book in our collection comes with comprehensive information, reviews, and recommendations to assist you in making well-informed choices.

            </p>
            <p className='fs-17'>But Bookhub is more than just a database of books; it's a thriving community of book lovers. Engage in discussions, share your thoughts, and connect with like-minded individuals. Our personalized recommendation system analyzes your preferences and suggests books tailored to your taste.

              Bookhub is the ultimate destination for readers, a place to nourish your imagination and satiate your literary curiosity. Dive into the world of literature with us and start your adventure today.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
