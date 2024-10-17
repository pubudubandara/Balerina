import React from 'react';  
import './Book.css'; // Assuming Book.css is in the same directory  

const BookingForm = () => {  
    return (  
        <section className="booking-section">  
            <div className="form-container">  
                <h1>Book <span>now</span></h1>  
                <form id="bookingForm" action="/submit-booking" method="POST">  
                    <label htmlFor="name">Name</label>  
                    <input type="text" id="name" name="name" placeholder="abc" required />  

                    <label htmlFor="email">Email</label>  
                    <input type="email" id="email" name="email" placeholder="abc@abc.com" required />  

                    <label htmlFor="description">Job description</label>  
                    <textarea id="description" name="description" placeholder="abc" required></textarea>  

                    <label htmlFor="date">Job date</label>  
                    <input type="text" id="date" name="date" placeholder="abc" required />  

                    <label htmlFor="location">Location</label>  
                    <input type="text" id="location" name="location" placeholder="abc" required />  

                    <div className="terms">  
                        <input type="checkbox" id="terms" name="terms" required />  
                        <label htmlFor="terms">I've read and agree with terms of service and our privacy policy</label>  
                    </div>  

                    <button type="submit" className="book-btn">Book</button>  
                </form>  
            </div>  
        </section>  
    );  
};  

export default BookingForm;