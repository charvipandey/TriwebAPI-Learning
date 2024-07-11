import React from 'react';

function UserProfile() {
  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Update Profile</button>
        <button type="button">Deactivate Account</button>
      </form>
    </div>
  );
}

export default UserProfile;
