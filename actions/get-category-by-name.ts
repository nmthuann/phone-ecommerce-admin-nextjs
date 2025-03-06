'use server'

import { Category } from "@/types/product.type";
import { promises as fs } from "fs";
import path from "path";

export async function getCategoryByName(name: string): Promise<Category> {
    try {
        const data = await fs.readFile(
            path.join(process.cwd(), "data/categories.json")
        );

        const categories = JSON.parse(data.toString()) as Category[];

        const category = categories.find((cat) => cat.categoryName === name);
        if (!category) {
            throw new Error(`Category with id ${name} not found`);
        }
        return category;
    } catch (error) {
        console.error("Error fetching the JSON data:", error);
        throw error;
    }
}