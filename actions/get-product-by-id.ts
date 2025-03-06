'use server'

import { ProductResponse,  } from "@/types/product.type";
import { promises as fs } from "fs";
import path from "path";

export async function getProductById(id: string): Promise<ProductResponse> {
    try {
        const data = await fs.readFile(
            path.join(process.cwd(), "data/mocks/products.json")
        );

        const products = JSON.parse(data.toString()) as ProductResponse[];
        const productById = products.find((product) => product.id == id)

        if (!productById) {
            throw new Error(`Product with id ${id} not found.`);
        }

        return productById;
    } catch (error) {
        console.error("Error fetching the JSON data:", error);
        throw error;
    }
}