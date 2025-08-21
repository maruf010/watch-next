import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function ProductsDetailsPage({ params }) {
    const p = await params;
    const productCollection = dbConnect(collectionNameObj.products);
    const product = await productCollection.findOne({ _id: new ObjectId(p.id) });
    return (
        <div className='min-h-screen'>
            <div className='m-3 lg:max-w-11/12 lg:mx-auto lg:flex items-center gap-8'>
                <img src={product.img} alt={product.name} className='lg:border-none border mt-5 lg:h-[500px] rounded-2xl border-teal-500 w-full lg:w-1/2 h-auto mb-4' />
                <div>
                    <h1 className='text-2xl font-bold'>{product.name}</h1>
                    <p className='mt-2'>{product.description}</p>
                    <p className='mt-2 text-xl font-semibold'>${product.price.toFixed(2)}</p>
                    <button className='mt-5 font-medium cursor-pointer text-white bg-gradient-to-r from-teal-500 to-green-500 px-4 py-2 rounded-lg hover:from-teal-600 hover:to-green-600 transition'>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}
