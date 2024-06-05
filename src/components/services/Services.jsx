import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-laptop"></i>
            </div>
            <h3>Laptop Sales</h3>
            <p>We offer a wide range of new and refurbished laptops to suit your needs.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Laptop Repairs</h3>
            <p>Expert and software repairs to keep your laptop running smoothly.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Custom Builds</h3>
            <p>Get a custom-built laptop tailored to your specifications.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-arrow-up"></i>
            </div>
            <h3>Upgrade Services</h3>
            <p>Enhance your laptop’s performance with RAM, storage, and GPU upgrades.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3>Data Recovery</h3>
            <p>Recover lost or corrupted data with our professional data recovery services.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-screwdriver"></i>
            </div>
            <h3>Maintenance Services</h3>
            <p>Regular cleaning and system tune-ups to ensure optimal performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
