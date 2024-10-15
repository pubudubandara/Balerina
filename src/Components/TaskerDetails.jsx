import React, { useEffect, useState } from 'react';

const TaskerDetails = () => {
  const [taskers, setTaskers] = useState([]);  // State to hold fetched taskers
  const [error, setError] = useState(null);  // State to handle errors

  useEffect(() => {
    const fetchTaskers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/taskers'); // Fetch data from the backend
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Taskers not found');
          } else {
            throw new Error('Failed to fetch taskers');
          }
        }
        const data = await response.json();
        setTaskers(data);  // Set taskers data to state
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTaskers();  // Call fetchTaskers when component mounts
  }, []);  // Empty array ensures the effect runs only once

  if (error) {
    return <p>Error: {error}</p>;  // Display error message
  }

  if (taskers.length === 0) {
    return <p>No taskers available.</p>;  // Handle case when no taskers exist
  }

  return (
    <div>
      <h1>Tasker Details</h1>
      {taskers.map((tasker) => (
        <div key={tasker._id}>
          <p><strong>Full Name:</strong> {tasker.fullName}</p>
          <p><strong>Email:</strong> {tasker.email}</p>
          <p><strong>Phone Number:</strong> {tasker.phoneNumber}</p>
          <p><strong>Address Line 1:</strong> {tasker.addressLine1}</p>
          <p><strong>Address Line 2:</strong> {tasker.addressLine2}</p>
          <p><strong>City:</strong> {tasker.city}</p>
          <p><strong>State/Province:</strong> {tasker.stateProvince}</p>
          <p><strong>Postal Code:</strong> {tasker.postalCode}</p>
          <p><strong>Country:</strong> {tasker.country}</p>
          <p><strong>Category:</strong> {tasker.category}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TaskerDetails;
