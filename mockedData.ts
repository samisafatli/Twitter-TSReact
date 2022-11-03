import {IPost, IUser} from "./src/redux/slicePosts"

const user_1:IUser = {
    username: "Michelangelo",
    joinDate: "December 4, 1995",
    followers: [],
    following: [],
}

const user_2:IUser = {
    username: "Donatello",
    joinDate: "May 29, 2013",
    followers: [user_1],
    following: [user_1],
}

const user_3:IUser = {
    username: "Raphael",
    joinDate: "May 27, 2009",
    followers: [user_1, user_2],
    following: [user_1, user_2],
}

const user_4:IUser = {
    username: "Leonardo",
    joinDate: "November 03, 1998",
    followers: [user_1, user_2, user_3],
    following: [user_1, user_2, user_3],
}

export const admUser: IUser = {
    username: "Dean Winchester",
    joinDate: "January 24, 1979",
    followers: [user_4],
    following: [user_4],
}

export const post_1:IPost = {
    id: 1,
    username: user_1.username,
    content: "Lorem Ipsum 1",
    reactions: {
        likes: 0,
        dislikes: 0,
    },
}

export const post_2:IPost = {
    id: 2,
    username: user_2.username,
    content: "Lorem Ipsum 2",
    reactions: {
        likes: 0,
        dislikes: 0,
    },
}

export const post_3:IPost = {
    id: 3,
    username: user_3.username,
    content: "Lorem Ipsum 3",
    reactions: {
        likes: 0,
        dislikes: 0,
    },
}

export const post_4:IPost = {
    id: 4,
    username: user_4.username,
    content: "Lorem Ipsum 4",
    reactions: {
        likes: 0,
        dislikes: 0,
    },
}


export const Users:Array<IUser> = [ user_1, user_2, user_3, user_4 ]

export const FeedList:Array<IPost> = [ post_1, post_2, post_3, post_4]