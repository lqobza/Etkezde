import { User } from './user';

export interface Rating {
    body: string;
    stars: number;
    user: User;
} 