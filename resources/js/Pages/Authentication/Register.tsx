import axios from "axios";
import Swal from "sweetalert2";
import React, { ReactNode, useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import AuthenticationLayout from "@/Layouts/AuthenticationLayout";
import { DefaultAlert } from "@/Components/Alert/DefaultAlert";

export default function Register() {
  const [Alert, setAlert] = useState({
    title: "",
    message: "",
    type: "",
  });

  // get pathname
  const getPathname = window.location.pathname;
  const splitPathname = getPathname.split("/");

  const moveSignIn = () => {
    if (splitPathname[1] === "register") {
      window.location.href = route("login");
    }
  };

  // handle show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    const password = document.querySelector("#password");
    if (password?.getAttribute("type") === "password") {
      password?.setAttribute("type", "text");
      setShowPassword(true);
    } else {
      password?.setAttribute("type", "password");
      setShowPassword(false);
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    const formRegister = document.querySelector("#formRegister");

    const inputElements = formRegister.querySelectorAll("input");

    const formData = {};
    // get dinamis input name & value
    inputElements.forEach((input) => {
      const name = input.name;
      const value = input.value;
      formData[name] = value;
    });

    const { name, email, password } = formData;

    // Validate
    if (trimValidator(name, email, password)) {
      // validate email
      setAlert({
        type: "",
      });
      if (validateEmail(email)) {
        if (validatePasswordFormat(password)) {
          setAlert({
            type: "",
          });
          // handle handleVerifyRegistered
          handleVerifyRegistered(name, email, password);
        } else {
          setAlert({
            title: "Error",
            message: "Password harus memiliki setidaknya 8 karakter dan angka",
            type: "error",
          });
        }
      } else {
        setAlert({
          title: "Error",
          message: "Periksa format EMAIL tidak valid",
          type: "error",
        });
      }
    } else {
      let emptyFields = [];

      for (let key in formData) {
        if (formData[key].trim() === "") {
          emptyFields.push(key);
        }
      }

      if (emptyFields.length > 0) {
        let errorMessage = emptyFields
          .map((key) => `${key.toUpperCase()}`)
          .join(", ");

        setAlert({
          title: "Error",
          message: `Periksa ${errorMessage} tidak boleh kosong`,
          type: "error",
        });
      }
    }
  };
  // handle post
  const handleVerifyRegistered = async (getName, getEmail, getPassword) => {
    // handle post
    try {
      const response = await axios.post(route("verifyRegistered"), {
        name: btoa(getName),
        email: btoa(getEmail),
        password: btoa(getPassword),
        registerId: btoa(splitPathname[2]),
      });
      // console.log(res.data);
      if (response.data.status === "error") {
        setAlert({
          title: "Error",
          message:
            response.data.message ||
            response.data[0].name ||
            response.data[0].email ||
            response.data[0].password,
          type: "error",
        });
      }

      if (response.data.status === "success") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          width: "auto",
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Registrasi berhasil. Beralih ke halaman login.",
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            //beralih ke halaman login
            window.location.href = route("login");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ################################ VALIDATOR FUNCTION ###################################
  // null validator
  const trimValidator = (
    name: string,
    email: string,
    password: string,
  ): string | undefined => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      // 'Wajib diisi';
      return false;
    }
    return true;
  };
  // email validator
  const validateEmail = (email: string): string | undefined => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // 'Email tidak valid';
      return false;
    }
    return true;
  };
  // password validator
  const validatePasswordFormat = (password: string): string | undefined => {
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      // "Password harus memiliki setidaknya 8 karakter dan mengandung huruf besar, huruf kecil, dan angka"
      return false;
    }
    return true;
  };
  // phone number validator
  const validatePhoneNumberFormat = (
    phoneNumber: string,
  ): string | undefined => {
    const phoneNumberRegex = /^\d{10,13}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      // "Format nomor telepon tidak valid"
      return false;
    }
    return true;
  };

  return (
    <>
      <Head title="Register" />
      <div className="flex justify-center items-center md:items-start w-full h-full md:h-4/5 overflow-hidden">
        {/*Left Card */}
        <div className="w-1/4 md:h-full bg-gradient-to-bl from-indigo-600 to-pink-400 rounded-l-lg shadow-md shadow-gray-300 p-4 hidden md:block">
          <div className="w-full h-4/5">
            {/*logo */}
            <div className="flex flex-row items-center gap-1">
              <div className="flex justify-center items-center w-10 h-10 border-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-aperture stroke-white"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m14.31 8 5.74 9.94" />
                  <path d="M9.69 8h11.48" />
                  <path d="m7.38 12 5.74-9.94" />
                  <path d="M9.69 16 3.95 6.06" />
                  <path d="M14.31 16H2.83" />
                  <path d="m16.62 12-5.74 9.94" />
                </svg>
              </div>
              <span className="font-poppins text-sm text-white tracking-tight">
                Laundry Excount's
              </span>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <h2 className="font-poppins font-bold text-3xl text-white text-center">
                Welcome Back!
              </h2>
              <span className="text-center text-sm my-4 px-4 text-white tracking-wide">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                excepturi.
              </span>
              <div className="flex justify-center">
                <button
                  className="font-poppins font-semibold w-40 h-12 mt-4 rounded-full border border-white text-white text-sm active:border-2"
                  onClick={moveSignIn}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*Right Card */}
        <div className="w-full md:w-2/5 h-full bg-white rounded-lg md:rounded-r-lg shadow-md shadow-gray-300 p-4">
          <h1 className="font-poppins text-center text-3xl text-indigo-500 font-bold py-10">
            Create Account
          </h1>
          <DefaultAlert Data={Alert} />
          <form id="formRegister" className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@ex.com"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Your password
              </label>
              <div className="flex relative items-center">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  autoComplete="off"
                  required
                />
                <button
                  type="button"
                  className="absolute right-4"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-eye stroke-gray-400"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-eye-off stroke-gray-400"
                    >
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" x2="22" y1="2" y2="22" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="font-poppins text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm w-full sm:w-auto px-12 py-3 text-center dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-700 shadow-md"
                onClick={handleSignUp}
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

Register.layout = (page: ReactNode) => <AuthenticationLayout children={page} />;
