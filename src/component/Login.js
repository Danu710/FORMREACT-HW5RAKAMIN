import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function Login() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    setShowSuccessPopup(true);
    reset();
  };

  const validateEmail = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!value) {
      return "Email is required";
    }

    if (!emailRegex.test(value)) {
      return "Invalid email address";
    }

    return true;
  };

  const validatePassword = (value) => {
    if (!value) {
      return "Password is required.";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters.";
    }
    if (!/\d/.test(value)) {
      return "Password must contain at least one number.";
    }
    if (!/[!@#$%^&*]/.test(value)) {
      return "Password must contain at least one special character.";
    }
    return true;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const handleClick = () => {
    setValue("email", "@");
  };

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          action=""
          className="mx-auto mt-8 mb-0 max-w-md space-y-4"
          onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                {...register("email", {
                  validate: validateEmail,
                  required: true,
                })}
                className="w-full py-3 mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
              />

              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}

              <button
                onClick={handleClick}
                className="absolute inset-y-0 right-0 grid place-content-center px-4 pb-3">
                <AlternateEmailIcon />
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="Password"
                name="password"
                placeholder="Enter Password"
                {...register("password", { validate: validatePassword })}
                className="w-full py-3 mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 grid place-content-center px-4 pb-3">
                {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <a className="underline" href="/register">
                Sign up
              </a>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
              Sign in
            </button>
          </div>
        </form>
        {showSuccessPopup && (
          <div
            className="rounded-2xl border border-blue-100 bg-white p-3 shadow-lg sm:p-4 lg:p-6 absolute sm:top-2 lg:top-32  right-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
            role="alert">
            <div className="flex items-center gap-4">
              <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
                <NotificationsActiveIcon />
              </span>

              <p className="font-medium sm:text-lg">New message!</p>
            </div>

            <p className="mt-4 text-gray-500">
              Your account login has been successful
            </p>

            <div className="mt-6 sm:flex sm:gap-4">
              <Link
                className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
                to="/">
                Mark as Read
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute  inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Login;
