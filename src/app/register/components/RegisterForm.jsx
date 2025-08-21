"use client";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { registerUser } from "@/app/actions/auth/registerUser";
import { signIn } from "next-auth/react";
import Link from "next/link";
import SocialLogin from "@/app/login/components/SocialLogin";

export default function RegisterForm() {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        toast("Registering...");

        try {
            const res = await registerUser({ name, email, password });

            if (res) {
                // ✅ Auto login after register
                const loginRes = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                    callbackUrl: "/products", // login successful hole redirect
                });

                if (loginRes?.ok) {
                    toast.success("Registration successful!");
                    form.reset();
                    router.push("/products");
                } else {
                    toast.error("Login failed after registration!");
                }
            } else {
                toast.error("User already exists!");
            }
        } catch (error) {
            console.error("Registration failed:", error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold text-teal-500 text-center mb-6">
                Create Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>
                <div>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
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

            <SocialLogin />

            <p className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-teal-500 font-medium hover:underline">
                    Login here
                </Link>
            </p>
        </div>
    );
}
