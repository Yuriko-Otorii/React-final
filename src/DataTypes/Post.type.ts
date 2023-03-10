import { User } from "../DataTypes/User.type"
export interface Post {
    postId: number;
    userId: number;
    postText: string;
    postImg: string;
    postDate: string;
    users: User;
    likedState: boolean;
}