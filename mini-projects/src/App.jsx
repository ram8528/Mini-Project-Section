import React from "react";
import FormValidation from "./components/FormValidation";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import Logout from "./components/Logout";
function App() {
  const user = useSelector(selectUser);
  return (
    <>
      <div className="text-3xl underline text-red-500 text-center mt-0">
        {/* Form Validation */}
        {/* To Do Jobs */}
        {/* Login Page */}
      </div>
      {/* <FormValidation /> */}
      {/* <Navbar
        logo="TailwindNav"
        bgColor="bg-blue-600"
        textColor="text-white"
        hoverColor="hover:text-yellow-300"
        links={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: "Blog", href: "/blog" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the site!</h1>
      </main> */}

      {/* TODO APplication */}
      {/* <AddTodo />
      <Todos /> */}

      {/* <Login /> */}
      {user ? <Logout/> : <Login/>}
    </>
  );
}
export default App;
