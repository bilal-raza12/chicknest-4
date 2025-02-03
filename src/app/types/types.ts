export interface IProduct {
    slug: string;
    name: string;
    price: number;
    imageurl: string;
    category?: string;
    description: string;
    rating: number;
    numReviews: number;
    countInStock: number;
    discount?: number;
    originalPrice?: number;
    quantity?:number ;
    }