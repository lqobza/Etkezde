import { User } from './user';
import { Meal } from './meal';

export interface Cart {
    id: number;
    meals: Meal[];
    user: User;
}
