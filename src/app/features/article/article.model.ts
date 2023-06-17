import { DrinkType } from "src/app/enums/drink-type.enum";

export class Product{
    name?: string;
    image?: string;
    inventoryStatus?: string;
    stock: number = 0;
    price?: number;
    rating?: number;
    category?: DrinkType;
    severity?: string;
}