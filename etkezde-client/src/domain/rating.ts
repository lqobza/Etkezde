import { User } from './user';

export interface Rating {
    user: User;
    body: string;
    stars: number;
} 