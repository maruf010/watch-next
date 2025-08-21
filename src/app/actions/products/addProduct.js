"use server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const addProduct = async (payload) => {
    try {
        const { name, img, description, price } = payload;

        if (!name || !img || !description || !price) {
            return { success: false, message: "All fields are required" };
        }

        const productCollection = dbConnect(collectionNameObj.products);

        const res = await productCollection.insertOne({
            name,
            img,
            description,
            price: parseFloat(price),
        });

        return { success: true, id: res.insertedId.toString() };
    } catch (err) {
        console.error("Error adding product:", err);
        return { success: false, message: "Something went wrong" };
    }
};
