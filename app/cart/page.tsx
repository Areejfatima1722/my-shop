"use client";


import { useState } from "react";


export default function Cart() {
const [items] = useState<string[]>([]);


return (
<div>
<h1 className="text-xl font-bold">Cart</h1>
{items.length === 0 && <p>No items in cart</p>}
</div>
);
}