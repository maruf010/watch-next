import RegisterForm from "./components/RegisterForm";


export default function RegisterPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden">

                {/* Left side */}
                <div className="bg-teal-500 text-white w-full lg:w-1/2 flex flex-col items-center justify-center p-10">
                    <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                    <p className="mb-6 text-center">
                        To keep connected with us please login with your personal info
                    </p>
                    <a href="/login">
                        <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-teal-500 transition">
                            SIGN IN
                        </button>
                    </a>
                </div>

                {/* Right side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-10">
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
}
