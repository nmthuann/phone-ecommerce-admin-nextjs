'use server'

import { ProductResponse,  } from "@/types/product.type";
import { promises as fs } from "fs";
import path from "path";

export async function getProductByCategory(cat: string): Promise<ProductResponse[]> {
    try {
        const data = await fs.readFile(
            path.join(process.cwd(), "data/mocks/products.json")
        );

        const products = JSON.parse(data.toString()) as ProductResponse[];
        
        const getProductByCategory = products.filter((product) => product.category == cat)

        if (!getProductByCategory) {
            throw new Error(`Product with category ${cat} not found.`);
        }

        return getProductByCategory;
    } catch (error) {
        console.error("Error fetching the JSON data:", error);
        throw error;
    }
}