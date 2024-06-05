import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <div className="about-us-image">
          <img src="https://img.freepik.com/free-vector/service-centre-isometric-composition_1284-21691.jpg?t=st=1717479046~exp=1717482646~hmac=ae3c2ad79d944b3a422981511f3ab10f25e81f522e505c3033aa2bf2ec9a4f32&w=740" alt="About Us" />
        </div>
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            Welcome to <span className="company-name">Tech Nest</span>, your one-stop shop for all your laptop needs. Whether you're looking to buy a new laptop or need expert repair services, we've got you covered.
          </p>
          <p>
            With years of experience in the industry, we pride ourselves on providing top-notch customer service and high-quality products. Our team of skilled technicians is dedicated to ensuring your devices are running smoothly and efficiently.
          </p>
          <p>
            At <span className="company-name">Tech Nest</span>, we understand the importance of technology in your daily life, and we're here to help you stay connected. Explore our wide range of laptops and let us take care of any repair needs you may have.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
