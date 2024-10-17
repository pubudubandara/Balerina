import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/book');  // This will navigate to the Book component
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        {/* Profile Info */}
        <div className="profile-header">
          <img
            className="profile-image"
            src="https://via.placeholder.com/100"
            alt="Tasker"
          />
          <div>
            <h1>Bruce Wayne</h1>
            <p>Official carpenter</p>
            <p>location: <span className="location">Kandy</span></p>
          </div>
        </div>

        {/* Rating Section */}
        <div className="profile-rating">
          <h2>5.0 <span>⭐</span></h2>
          <div className="rating-bars">
            <div className="rating-bar"><span>5</span> <div className="bar"><div className="fill" style={{width: '100%'}}></div></div></div>
            <div className="rating-bar"><span>4</span> <div className="bar"></div></div>
            <div className="rating-bar"><span>3</span> <div className="bar"></div></div>
            <div className="rating-bar"><span>2</span> <div className="bar"></div></div>
            <div className="rating-bar"><span>1</span> <div className="bar"></div></div>
          </div>
          <p><a href="#">All Reviews (1)</a> | <a href="#">+ Add Review</a></p>
        </div>

        {/* Projects Section */}
        <h2 className="section-title">My Projects</h2>
        <div className="projects">
          <img src="https://via.placeholder.com/150" alt="project" />
          <img src="https://via.placeholder.com/150" alt="project" />
          <img src="https://via.placeholder.com/150" alt="project" />
        </div>
        <button className="see-more">see more</button>

        {/* Description Section */}
        <h2 className="section-title">Description</h2>
        <div className="description">
          <h3>Top skills</h3>
          <p>roofing, sealing, window, wood painting.</p>

          <h3>Requirements</h3>
          <p>Plan of the building, authorized person for the job, payment.</p>

          <h3>Why me?</h3>
          <ul>
            <li>High-Quality Work</li>
            <li>On-time Delivery</li>
            <li>100% Satisfaction Guarantee</li>
            <li>24/7 Support/Free Consultation</li>
          </ul>
        </div>
      </div>

      {/* Right Section: Booking */}
      <div className="profile-right">
        <div className="price-box">
          <h3>BASIC PACKAGE</h3>
          <div className="price">RS:4000/= <span>per day</span></div>
          <ul>
            <li>Dusting of all surfaces</li>
            <li>Sweeping and mopping floors</li>
            <li>Vacuuming carpets and rugs</li>
            <li>Cleaning of kitchen surfaces</li>
            <li>Cleaning of bathroom surfaces</li>
            <li>Emptying trash bins</li>
          </ul>
          <button className="book-now" onClick={handleBookNow}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
