import { Category } from "@/types/product.type";
import { promises as fs } from "fs";
import path from "path";

export async function getLeafCategories(): Promise<Category[]> {
     try {
        
            const data = await fs.readFile(
                path.join(process.cwd(), "data/categories.json")
            );
    
            const categories = JSON.parse(data.toString()) as Category[];
            const leafCategories = categories.filter(
                (category) => category.rightValue === category.leftValue + 1
            );

            return leafCategories;
    
       
        } catch (error) {
            console.error("Error fetching the JSON data:", error);
            throw error;
        }
}