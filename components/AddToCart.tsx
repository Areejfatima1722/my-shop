"use client";
import { Product } from "@/lib/types";
export default function AddToCart({ product }: { product: Product }) {
return (
<button className="bg-black text-white px-4 py-2" onClick={() => alert(product.title + " added")}>Add to Cart</button>
);
}