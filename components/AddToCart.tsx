"use client";


import { Product } from "@/lib/types";


export default function AddToCart({ product }: { product: Product }) {
return (
<button
className="mt-3 bg-black text-white px-4 py-2"
onClick={() => alert(product.title + " added to cart")}
>
Add to Cart
</button>
);
}