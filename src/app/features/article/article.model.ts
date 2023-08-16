export class Product{
    id?: number;
    name?: string;
    image?: string;
    inventoryStatus?: string;
    stock: number = 0;
    price?: number;
    rating?: number;
    category?: any;
    severity?: string;
    quantity?: number;
}