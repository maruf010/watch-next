"use client";
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'
import Spinner from './Spinner';

export default function Navbar() {
    const { data: session, status } = useSession();
    console.log(session);
    if (status === "loading") return <Spinner></Spinner>;

    const navMenu = () => {
        return (
            <>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/products"}>Products</Link></li>
                {status === "authenticated" ? (
                    <li><Link href={"/dashboard/AddProduct"}>Add Product</Link></li>
                ) : (
                    <li><Link href={"/login"}>Add Product</Link></li>
                )}
                <li><Link href={"/contacts"}>Contacts</Link></li>
            </>
        )
    }
    return (
        <div className="navbar bg-base-100 lg:px-20 lg:mx-auto sticky top-0 z-50 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="mr-3 ml-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                        {navMenu()}
                    </ul>
                </div>
                <Link href={"/"} className=" text-xl">
                    <img src="/logo.jpg" alt="Logo" width={32} height={32} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navMenu()
                    }
                </ul>
            </div>

            <div className="navbar-end">
                {status == 'authenticated' ? (
                    <>
                        <img src={session?.user?.image} alt={session?.user?.name} className="border border-gray-300 w-8 h-8 rounded-full mr-3" />
                        <li onClick={() => signOut({ callbackUrl: "/login" })} className="btn  rounded-2xl bg-teal-500 text-white">Logout</li>
                    </>) : (
                    <div className='flex gap-3'>
                        <Link href={"/login"} className="btn bg-teal-500 hover:bg-teal-600 text-white rounded-2xl">Login</Link>
                        <Link href={"/register"} className="btn border border-teal-500 hover:bg-teal-500 hover:text-white text-teal-500 rounded-2xl">Register</Link>
                    </div>
                )}
            </div>

        </div>
    )
}
