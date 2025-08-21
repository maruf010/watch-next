"use client";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";




export default function LoginForm() {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast("Submitting...");
        try {

            const res = await signIn("credentials", {
                email,
                password,
                callbackUrl: "/",
                redirect: false
            });
            if (res.ok) {
                toast.success("Login successful!");
                router.push("/products");
                form.reset();
            } else {
                toast.error("Login failed!,Invalid credentials.");
            }
        } catch (error) {
            console.error("Login failed:", error);
            toast.error("Login failed!");
        }
    }

    return (
        <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold text-teal-500 text-center mb-6">Sign In</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-500 text-white py-2 rounded-full hover:bg-teal-600 transition"
                >
                    LOGIN
                </button>
            </form>

            <SocialLogin></SocialLogin>

            <p className="text-center mt-4 text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="text-teal-500 font-medium hover:underline">
                    Register here
                </Link>
            </p>
        </div>
    );
}
