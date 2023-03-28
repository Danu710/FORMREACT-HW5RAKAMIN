import React, { useState } from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    setShowSuccessPopup(true);
    reset();
  };

  const validateMoney = (value) => {
    if (!value) {
      return "Uang saku is required.";
    }

    if (isNaN(value)) {
      return "Uang saku must be a number.";
    }

    if (value < 100000) {
      return "Uang saku must be at least 100,000.";
    }

    if (value > 1000000) {
      return "Uang saku must not exceed 1,000,000.";
    }

    return true;
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

  const confirmPassword = (value) => {
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

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex items-end h-32 bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 object-cover w-full h-full opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Squid 🦑
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative block -mt-16 lg:hidden">
              <a
                className="inline-flex items-center justify-center w-16 h-16 text-blue-600 bg-white rounded-full sm:h-20 sm:w-20"
                href="/">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Squid 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <form
              action="#"
              className="grid grid-cols-6 gap-6 mt-8"
              onSubmit={handleSubmit(onSubmit)}>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlhtmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  {...register("firstName", {
                    required: true,
                    minLength: 10,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  id="FirstName"
                  className="w-full py-2 mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                />
                {_.get("firstName.type", errors) === "required" && (
                  <p className="text-red-700">This field is required</p>
                )}
                {_.get("firstName.type", errors) === "maxLength" && (
                  <p className="text-red-700">
                    First name cannot exceed 20 characters
                  </p>
                )}
                {_.get("firstName.type", errors) === "minLength" && (
                  <p className="text-red-700">First name min 10 characters</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlhtmlFor="LastName"
                  className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  {...register("lastName", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  id="LastName"
                  className="w-full py-2 mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                />
                {_.get("lastName.type", errors) === "pattern" && (
                  <p className="text-red-700">Alphabetical characters only</p>
                )}
                {_.get("lastName.type", errors) === "maxLength" && (
                  <p className="text-red-700">
                    First name cannot exceed 20 characters
                  </p>
                )}
                {_.get("lastName.type", errors) === "minLength" && (
                  <p className="text-red-700">Last Name min 8 characters</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlhtmlFor="age"
                  className="block text-sm font-medium text-gray-700">
                  Age
                </label>

                <input
                  type="number"
                  id="age"
                  name="age"
                  {...register("age", {
                    min: 25,
                    max: 50,
                  })}
                  className="w-full py-2 mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                />
                {errors.age && (
                  <p className="text-red-700">
                    You Must be older then 25 and younger then 50 years old
                  </p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlhtmlFor="LastName"
                  className="block text-sm font-medium text-gray-700">
                  Pocket Money
                </label>

                <input
                  type="number"
                  id="LastName"
                  name="last_name"
                  {...register("allowance", { validate: validateMoney })}
                  className="w-full py-2 mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                />
                {errors.allowance && (
                  <p className="text-red-700">{errors.allowance.message}</p>
                )}
              </div>

              <div className="col-span-6">
                <label
                  htmlhtmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email", { validate: validateEmail })}
                  className="w-full py-2 mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                />
                {errors.email && (
                  <p className="text-red-700">{errors.email.message}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlhtmlFor="Password"
                  className="block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  {...register("password", { validate: validatePassword })}
                  className="w-full py-2 mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                />
                {errors.password && (
                  <p className="text-red-700">{errors.password.message}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlhtmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700">
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="passwordConfirmation"
                  {...register("passwordConfirmation", {
                    validate: confirmPassword,
                  })}
                  className="w-full py-2 mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                />
                {/* {errors.passwordConfirmation && (
                  <p className="text-red-600">{errors.password.message}</p>
                )} */}
              </div>

              <div className="col-span-6">
                <label htmlhtmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="w-5 h-5 bg-white border-gray-200 rounded-md shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <span className="pr-1" />{" "}
                  <Link to="#" className="text-gray-700 underline">
                    terms and conditions
                  </Link>
                  <span className="pr-1" />
                  and
                  <span className="pr-1" />
                  <Link href="#" className="text-gray-700 underline">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-blue-600 border border-blue-600 rounded-md shrink-0 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  type="submit">
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to="/login" className="text-gray-700 underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
            {showSuccessPopup && (
              <div
                className="rounded-2xl border border-blue-100 bg-white p-3 shadow-lg sm:p-4 lg:p-6 absolute sm:-top-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                role="alert">
                <div className="flex items-center gap-4">
                  <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
                    <NotificationsActiveIcon />
                  </span>

                  <p className="font-medium sm:text-lg">New message!</p>
                </div>

                <p className="mt-4 text-gray-500">
                  Your account registration has been successful
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
        </main>
      </div>
    </section>
  );
}

export default Register;
