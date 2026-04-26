import { Product } from "./types";


const API_URL = process.env.API_URL;


export async function getProducts(): Promise<Product[]> {
const res = await fetch(`${API_URL}/products`, { cache: "no-store" });
return res.json();
}


export async function getProductById(id: string): Promise<Product> {
const res = await fetch(`${API_URL}/products/${id}`, { cache: "no-store" });
return res.json();
}