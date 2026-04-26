import { getProductById } from "@/lib/products";
import AddToCart from "@/components/AddToCart";


export default async function Product({ searchParams }: { searchParams: { id: string } }) {
const product = await getProductById(searchParams.id);


return (
<div>
<h1 className="text-xl font-bold">{product.title}</h1>
<p className="my-2">{product.description}</p>
<p className="font-semibold">${product.price}</p>
<AddToCart product={product} />
</div>
);
}