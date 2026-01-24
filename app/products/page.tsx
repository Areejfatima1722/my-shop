import Link from "next/link";
export default async function Products() {
const products = await getProducts();
return (
<div className="grid grid-cols-2 gap-4">
{products.map(p => (
<Link key={p.id} href={`/product?id=${p.id}`}>
<div className="border p-2">
<p>{p.title}</p>
<p>${p.price}</p>
</div>
</Link>
))}
</div>
);
}