import React, { useEffect, useState } from 'react';

const TaskerDetails = () => {
  const [tasker, setTasker] = useState(null);  // State for a single tasker
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasker = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/taskers/recent'); // Fetch the most recent tasker
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('No recent tasker found');
          } else {
            throw new Error('Failed to fetch tasker');
          }
        }
        const data = await response.json();
        setTasker(data);  // Set the single tasker in state
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTasker();
  }, []);  // Run this once after the component mounts

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!tasker) {
    return <p>No tasker available.</p>;
  }

  return (
    <div>
      <h1>Recent Tasker Details</h1>
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
      </div>
    </div>
  );
};

export default TaskerDetails;
