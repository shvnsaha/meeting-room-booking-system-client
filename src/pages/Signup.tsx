
import {  useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { TbFidgetSpinner } from 'react-icons/tb';
import { useSignupMutation } from '../redux/features/auth/authApi';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {

    const [signup] = useSignupMutation()
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [loader,setLoader] = useState(false);
  const showHide = () => {
    setShow(!show);
  };
const handleSignUp = async(e:any) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const userData = {
        name,email,phone,password,address,role: "user"
    }

    try {
        setLoader(true)
        await signup(userData).unwrap()
        toast.success("Registration Successfull")
         navigate(`/login`)
        } catch (error:any) {
         toast.error("something Went Wrong")
         console.log(error);
        }
}

    return (
        <>
            <Helmet>
                <title>E-Shop | Sign Up</title>
            </Helmet>
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                        <p className="text-sm text-gray-400">Welcome to E-Shop</p>
                    </div>
                    <form
                        onSubmit={handleSignUp}
                        className="space-y-6 ng-untouched ng-pristine ng-valid"
                    >
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Your Name Here"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                    data-temp-mail-org="0"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="Enter Your Email Here"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                    data-temp-mail-org="0"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    required
                                    placeholder="Enter Your Phone Here"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                    data-temp-mail-org="0"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm mb-2">
                                        Password
                                    </label>
                                </div>

                                <div className="flex items-center relative">
                                    <input
                                        type={show ? "text" : "password"}
                                        name="password"
                                        autoComplete="new-password"
                                        id="password"
                                        required
                                        placeholder="*******"
                                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                    />
                                    <div className="absolute right-1">
                                        <button onClick={showHide}>
                                            {show ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    required
                                    placeholder="Enter Your Phone Here"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                    data-temp-mail-org="0"
                                />
                            </div>

                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-rose-500 w-full rounded-md py-3 text-white"
                            >
                                {loader ? (
                                    <TbFidgetSpinner className="animate-spin m-auto" />
                                ) : (
                                    "Continue"
                                )}
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">
                            Signup with social accounts
                        </p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    
                    <p className="px-6 text-sm text-center text-gray-400">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="hover:underline hover:text-rose-500 text-gray-600"
                        >
                            Login
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;