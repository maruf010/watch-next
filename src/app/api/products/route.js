import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    const productCollection = dbConnect(collectionNameObj.products);
    const data = await productCollection.find({}).toArray();
    return NextResponse.json(data);
}
