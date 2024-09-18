
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { verifyToken } from "../types/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";


const Login = () => {
    const [login] = useLoginMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate();


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
            
           const res = await login(userInfo).unwrap()
           console.log(res);
           const user = verifyToken(res.token) as TUser
           dispatch(setUser({user:user,token: res.token,userData: res.data}))
        
          navigate(`/`)
           } catch (error:any) {
            // toas.error(error.message,{id: toastId})
            console.log(error);
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
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    id="password"
                                    required
                                    placeholder="*******"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-rose-500 w-full rounded-md py-3 text-white"
                            >
                                {/* {loader ? (
                                    <TbFidgetSpinner className="animate-spin m-auto" />
                                ) : (
                                    "Continue"
                                )} */}
                                Continue
                            </button>
                        </div>
                    </form>
                    <div className="space-y-1">
                        <button
                            className="text-xs hover:underline hover:text-rose-500 text-gray-400"
                            // onClick={() => setIsOpen(true)}
                        >
                            Forgot password?
                        </button>
                    </div>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">
                            Login with social accounts
                        </p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
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