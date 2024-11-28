import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('/api/user/details');
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      {userDetails ? (
        <div>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Position:</strong> {userDetails.position}</p>
          <p><strong>Remaining Leaves:</strong> {userDetails.leaveQuota}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDashboard;
