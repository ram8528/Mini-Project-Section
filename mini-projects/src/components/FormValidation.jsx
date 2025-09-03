import React, { useState } from "react";

const FormValidation = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // adding validation logics
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "❓Name is required";
    if (!form.email.trim()) {
      newErrors.email = "❓Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "❓Email is invalid";
    }

    if (!form.password.trim()) {
      newErrors.password = "❓Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "❓Password must be at least 6 characters";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(form.name + " " + form.email + " " + form.password);
      // Clear form or send data to backend
      setForm({ name: "", email: "", password: "" });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md space-y-4"
      noValidate
    >
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default FormValidation;
