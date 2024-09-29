
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { verifyToken } from "../types/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useState } from "react";
import toast from "react-hot-toast";


const Login = () => {

    const location = useLocation();
    
    const [login] = useLoginMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const [loader,setLoader] = useState(false)


    const handleSubmit =  async(event:any) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo ={
            email,
            password
        }

        try {
            setLoader(true)
           const res = await login(userInfo).unwrap()
           console.log(res);
           const user = verifyToken(res.token) as TUser
           dispatch(setUser({user:user,token: res.token,userData: res.data}))
        
          navigate(location?.state || "/")
          toast.success('Login successful')
           } catch (error:any) {
            // toas.error(error.message,{id: toastId})
            toast.error(error?.data?.message)
            console.log(error);
           }finally{
            setLoader(false)
           }
    }
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Log In</h1>
                        <p className="text-sm text-gray-400">
                            Sign in to access your account
                        </p>
                    </div>
                    <form
                    onSubmit={handleSubmit}
                        action=""
                        className="space-y-6 ng-untouched ng-pristine ng-valid"
                    >
                        <div className="space-y-4">
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
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900"
                                    data-temp-mail-org="0"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm mb-2">
                                        Password
                                    </label>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    id="password"
                                    required
                                    placeholder="*******"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-blue-500 w-full rounded-md py-3 text-white"
                            >
                                {loader ? (
                                    <TbFidgetSpinner className="animate-spin m-auto" />
                                ) : (
                                    "Continue"
                                )}
                             
                            </button>
                        </div>
                    </form>
                 
                    
                    <p className="px-6 text-sm text-center text-gray-400">
                        Don&apos;t have an account yet?{" "}
                        <Link
                            to="/signup"
                            className="hover:underline hover:text-rose-500 text-gray-600"
                        >
                            Sign up
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;