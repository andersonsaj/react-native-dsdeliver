type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
} 

export type Order = {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
    total: number;
    moment: string;
    status: string;
    products: Product[];
   }