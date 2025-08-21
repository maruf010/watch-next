"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="">
            <div className=" lg:min-h-screen max-w-11/12 mx-auto px-3  grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10 lg:mb-0 my-10 lg:my-0">

                {/* Left Side */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-teal-700 leading-tight">
                        Discover Amazing Products <br /> Just for You
                    </h1>
                    <p className="text-lg text-gray-700">
                        Explore our curated collection of products that combine quality,
                        innovation, and style. Your next favorite item is just a click away!
                    </p>
                    <Link href={"/products"}>
                        <button className="font-medium px-6 py-3 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 cursor-pointer transition duration-300">
                            Show More
                        </button>
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex justify-center">
                    <img
                        src="https://i.ibb.co.com/116cNPb/Best-Tissot-Watches-scaled.jpg"
                        alt="Hero Product"

                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
