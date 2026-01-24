import { Product } from "./types";
export async function getProducts(): Promise<Product[]> {
const res = await fetch(`${process.env.API_URL}/products`, { cache: "no-store" });
return res.json();
}
export async function getProduct(id: string): Promise<Product> {
const res = await fetch(`${process.env.API_URL}/products/${id}`);
return res.json();
}