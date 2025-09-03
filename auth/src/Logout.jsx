import React from 'react';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { clearUser } from './redux/authSlice';

function Logout() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
