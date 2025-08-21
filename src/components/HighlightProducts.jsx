"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Spinner from "./Spinner";

export default function HighlightProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(0, 6)));
    }, []);

    if (products.length === 0) {
        return <Spinner size={36} thickness={4} color="border-teal-500" label="Loading data..." />;
    }

    return (
        <div className="mx-3 lg:max-w-7xl lg:mx-auto my-5">
            {/* Title */}
            <div className="text-center my-3">
                <h1 className="text-3xl font-bold text-teal-500">
                    Highlight Products
                </h1>
                <p className="text-gray-500 my-3">Our top featured items</p>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[ Pagination, Autoplay]}
                spaceBetween={20}
                
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10"
            >
                {products.map((p, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="my-10 border border-gray-200 rounded-2xl p-4 shadow hover:shadow-xl bg-white transition transform hover:-translate-y-2">
                            <img
                                src={p.img}
                                alt={p.name}
                                className="w-full h-48 object-cover  rounded-xl mb-4"
                            />
                            <h2 className="text-lg font-semibold">{p.name}</h2>
                            <p className="text-gray-600 text-sm line-clamp-2">
                                {p.description}
                            </p>
                            <p className="text-xl font-bold text-teal-600 mt-2">
                                ${p.price?.toFixed(2)}
                            </p>
                            <Link
                                href={`/products/${p._id}`}
                                className="inline-block mt-3 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-green-500 px-4 py-2 rounded-lg hover:from-teal-600 hover:to-green-600 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
