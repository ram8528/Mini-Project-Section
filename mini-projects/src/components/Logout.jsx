import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/user/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome,{" "}
          <span className="text-indigo-600 font-bold">{user.name}</span>
        </h1>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
