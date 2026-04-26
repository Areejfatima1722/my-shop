import { getProducts } from "@/lib/products";
import Link from "next/link";


export default async function Products() {
const products = await getProducts();


return (
<div className="grid grid-cols-2 gap-4">
{products.map(p => (
<Link key={p.id} href={`/product?id=${p.id}`}>
<div className="border p-3 rounded">
<p className="font-semibold">{p.title}</p>
<p>${p.price}</p>
</div>
</Link>
))}
</div>
);
}