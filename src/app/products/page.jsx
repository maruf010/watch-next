export const dynamic = "force-dynamic"; 
// export const revalidate = 60; // cache 60 sec, তারপর fresh data

import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import Link from 'next/link';
import React from 'react'

export default async function Products() {
    // const res = await fetch("/products.json");
    const productCollection = dbConnect(collectionNameObj.products);
    const data = await productCollection.find({}).toArray();
    console.log(data);


    return (
        <div className='mx-3 lg:max-w-11/12 lg:mx-auto'>
            <div className='text-center my-2'>
                <h1 className='text-2xl font-bold text-teal-500'>Our Products</h1>
                <p>We offer a wide range of products to meet your needs.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {data.map((product, index) => (
                    <div key={index} className='border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300'>
                        <img src={product.img} alt={product.name} className='w-full h-56 mb-4 border border-gray-200 rounded-lg' />
                        <div className='h-28'>
                            <h2 className='text-lg font-bold'>{product.name}</h2>
                            <p>{product.description}</p>
                            <p className='text-xl font-semibold'>${product.price.toFixed(2)}</p>
                        </div>
                        <div className='mt-4 flex justify-end'>
                            <Link href={`/products/${product._id}`} >
                                <button className='text-white bg-gradient-to-r from-teal-500 to-green-500 px-4 py-2 rounded-lg hover:from-teal-600 hover:to-green-600 transition font-medium cursor-pointer'>
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
