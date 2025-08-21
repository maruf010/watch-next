"use client";
import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SocialLogin() {

    const router = useRouter();
    const session = useSession();

    const handleSocialLogin = async (provider) => {
        signIn(provider);
    };

    useEffect(() => {
        if (session?.data?.user) {
            toast.success("Login successful!");
            router.push("/products");
        }
    }, [session?.data?.user]);

    return (
        <div>
            <h2 className=" font-bold text-teal-500 text-center my-3">Social Login</h2>
            <div className="flex justify-center items-center mt-4 gap-3">
                <div onClick={() => handleSocialLogin("google")} className='cursor-pointer'>
                    <FcGoogle type='button' size={30} />
                </div>
                {/* <div onClick={() => handleSocialLogin("github")} className='cursor-pointer'>
                    <FaGithub type='button' size={30} />
                </div> */}
            </div>
        </div>
    )
}
