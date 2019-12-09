import { Discount } from './discount';
import { Rating } from './rating';

export interface Meal {
    id: number;
    name: string;
    description: string;
    discount: Discount;
    ratings: Rating[];
    price: number;
}
