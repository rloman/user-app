import { Post } from "./post";

export class User {
        
        id: number;
        name:string;
        username: string;
        email: string;

        posts: Post[];

        equals(user: User): boolean {
                if(this.name === user.name && this.email === user.email && this.username === user.username) {
                        return true;
                }
                else {
                        return false;
                }
        }
}
