import { Post } from "./post";

export class User {
        
        id: number;
        name:string;
        username: string;
        email: string;

        posts: Post[];
}
