// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import { signUpUser, uploadImage } from '../config/firebase/FirebaseMethod';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import NavbarBlow from '../Components/NavbarBlow';

// const Register = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false); // Start with false
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();

//   const registerUserFromFirebase = async (data) => {
//     setIsSubmitting(true); // Set to true when starting submission
//     console.log(data);

//     try {
//       const userProfileImageUrl = await uploadImage(data.profileImage[0], data.email);
//       const userData = await signUpUser({
//         email: data.email,
//         password: data.password,
//         fullName: data.fullName,
//         profileImage: userProfileImageUrl
//       });
//       console.log(userData);
//       navigate('/login');
//     } catch (error) {
//       alert(error);
//       console.log(error);
//     }
//     setIsSubmitting(false); // Reset to false after submission completes
//   };

//   return (
//     <>
//     <nav className="bg-[#7749F8] sm:p-0 p-1 flex flex-wrap justify-between items-center">
//         <Link to="/" className="text-white sm:ml-24 ml-5 sm:text-[1.4rem] text-[1.3rem] font-bold hover:bg-[#5628F6]  rounded-lg transition duration-300 sm:px-2 px-0 py-0  sm:py-1">Personal Blogging App</Link>
//         <div className="flex justify-center items-center font-semibold sm:mr-12 mr-5 ">
//           <Link to="/Login" className="text-white sm:px-2 px-0 py-0  sm:py-1 hover:bg-[#5628F6]  rounded-lg transition duration-300">Login</Link>
//         </div>
//       </nav>
    
//       <div className="flex items-center justify-center h-[79vh] pt-1 bg-gray-100">
//         <div className="ml-3 mr-3 max-w-md w-full bg-white rounded-lg shadow-md p-8">
//           <h1 className="sm:text-3xl text-2xl font-bold text-center underline mb-6">Register</h1>

//           <form onSubmit={handleSubmit(registerUserFromFirebase)}>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 {...register("fullName", { required: true })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//               {errors.fullName && <span className="text-red-500 text-sm mt-1">This field is required</span>}
//             </div>

//             <div className="mb-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 {...register("email", { required: true })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//               {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
//             </div>

//             <div className="mb-4">
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 {...register("password", { required: true })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//               {errors.password && <span className="text-red-500 text-sm mt-1">This field is required</span>}
//             </div>

//             <div className="mb-6">
//               <input
//                 type="file"
//                 {...register("profileImage", { required: true })}
//                 className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input"
//               />
//               {errors.profileImage && <span className="text-red-500 text-sm mt-1">This field is required</span>}
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`flex items-center justify-center w-full py-2 rounded-lg transition duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
//                 }`}
//             >
//               {isSubmitting ? (
//                 <svg
//                   className="animate-spin h-5 w-5 mr-2"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12c0-1.5.4-2.9 1.1-4.1l1.5 1.5C6.9 10.3 6 11.1 6 12s.9 1.7 2.6 2.6l-1.5 1.5C4.4 14.9 4 13.5 4 12zm16 0c0 1.5-.4 2.9-1.1 4.1l-1.5-1.5C17.1 13.7 18 12.9 18 12s-.9-1.7-2.6-2.6l1.5-1.5C19.6 9.1 20 10.5 20 12z"
//                   ></path>
//                 </svg>
//               ) : (
//                 'Register'
//               )}
//               {isSubmitting && <span className="ml-2">Registering...</span>}
//             </button>


//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { signUpUser, uploadImage } from '../config/firebase/FirebaseMethod';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import NavbarBlow from '../Components/NavbarBlow';

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const registerUserFromFirebase = async (data) => {
    setIsSubmitting(true); 
    console.log(data);

    try {
      const userProfileImageUrl = await uploadImage(data.profileImage[0], data.email);
      const userData = await signUpUser({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
        profileImage: userProfileImageUrl
      });
      console.log(userData);
      navigate('/login');
    } catch (error) {
      alert(error);
      console.log(error);
    }
    setIsSubmitting(false); 
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 flex justify-between items-center">
        <Link to="/" className="text-white text-lg sm:text-2xl font-bold hover:bg-purple-700 px-3 py-1 rounded-lg transition duration-300">
          Personal Blogging App
        </Link>
        <Link to="/Login" className="text-white text-md sm:text-lg font-semibold hover:bg-blue-700 px-3 py-1 rounded-lg transition duration-300">
          Login
        </Link>
      </nav>

      <div className="flex items-center justify-center h-[79vh] pt-2 bg-gray-100">
        <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-purple-700 mb-8">Create an Account</h1>

          <form onSubmit={handleSubmit(registerUserFromFirebase)}>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName", { required: true })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.fullName && <span className="text-red-600 text-sm mt-1">This field is required</span>}
            </div>

            <div className="mb-6">
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.email && <span className="text-red-600 text-sm mt-1">This field is required</span>}
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.password && <span className="text-red-600 text-sm mt-1">This field is required</span>}
            </div>

            <div className="mb-6">
              <input
                type="file"
                {...register("profileImage", { required: true })}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.profileImage && <span className="text-red-600 text-sm mt-1">This field is required</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 shadow-lg ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                }`}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 inline-block"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12c0-1.5.4-2.9 1.1-4.1l1.5 1.5C6.9 10.3 6 11.1 6 12s.9 1.7 2.6 2.6l-1.5 1.5C4.4 14.9 4 13.5 4 12zm16 0c0 1.5-.4 2.9-1.1 4.1l-1.5-1.5C17.1 13.7 18 12.9 18 12s-.9-1.7-2.6-2.6l1.5-1.5C19.6 9.1 20 10.5 20 12z"
                  ></path>
                </svg>
              ) : (
                'Register'
              )}
              {isSubmitting && <span className="ml-2">Registering...</span>}
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
