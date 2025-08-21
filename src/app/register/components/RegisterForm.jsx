"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import Link from "next/link";
import React from "react";
import SocialLogin from "@/app/login/components/SocialLogin";



export default function RegisterForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        await registerUser({ name, email, password });

    }
    return (
        <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold text-teal-500 text-center mb-6">Create Account</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>
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
                    SIGN UP
                </button>
            </form>

            <SocialLogin></SocialLogin>

            <p className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-teal-500 font-medium hover:underline">
                    Login here
                </Link>
            </p>
        </div>
    );
}
