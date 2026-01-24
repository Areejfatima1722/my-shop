import { getProduct } from "@/lib/data";
export default async function ProductDetail({ searchParams }: { searchParams: { id: string } }) {
const product = await getProduct(searchParams.id);
return (
<div>
<h1 className="font-bold">{product.title}</h1>
<p>{product.description}</p>
<p>${product.price}</p>
</div>
);
}