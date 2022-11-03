export interface IPost {
    id: number,
    username: string,
    content: string
    reactions: {
        likes: number,
        dislikes: number,
    }
}

export interface IUser {
    username: string,
    joinDate: string,
    followers: Array<IUser>,
    following: Array<IUser>,
}