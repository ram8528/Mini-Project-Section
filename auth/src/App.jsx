import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  const user = useSelector((state) => state.auth.user);

  // Safely log photoURL only if user exists
  // console.log(user ? user.photoURL : "User not logged in");

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      {user ? (
        <>
          <h2>Welcome, {user.name}</h2>

          <img
            src={user?.photoURL || "https://via.placeholder.com/100"}
            alt="User"
            width="100"
            height="100"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/100";
            }}
          />

          <p>{user.email}</p>
          <Logout />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
