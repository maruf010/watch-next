"use client";
import { addProduct } from "@/app/actions/products/addProduct";
import { useState } from "react";


export default function AddProductForm() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const form = e.target;
        const productData = {
            name: form.name.value,
            img: form.img.value,
            description: form.description.value,
            price: form.price.value,
        };

        const res = await addProduct(productData);
        setLoading(false);

        if (res.success) {
            setMessage("✅ Product added successfully!");
            form.reset();
        } else {
            setMessage("❌ " + res.message);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-4">Add New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    className="w-full border p-2 rounded"
                    required
                ></textarea>
                <input
                    type="number"
                    step="0.01"
                    name="price"
                    placeholder="Price"
                    className="w-full border p-2 rounded"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
                >
                    {loading ? "Adding..." : "Add Product"}
                </button>
            </form>
            {message && <p className="text-center mt-4">{message}</p>}
        </div>
    );
}
