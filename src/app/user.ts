import { Post } from "./post";

export class User {
        
        id: number;
        name:string;
        username: string;
        email: string;

        posts: Post[];


        // would prefer an overloaded constructor but that is impossible in TypeScript
        constructor(user?: User) {
                if(user) {
                        this.id = user.id;
                        this.name = user.name;
                        this.username = user.username;
                        this.email = user.email;
                }

        }

        equals(user: User): boolean {
                if(this.name === user.name && this.email === user.email && this.username === user.username) {
                        return true;
                }
                else {
                        return false;
                }
        }
}
