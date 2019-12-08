import { Discount } from './discount';

export interface Meal {
    id: number;
    name: string;
    description: string;
    discount: Discount;
    ratings: string;
    price: number;
}
