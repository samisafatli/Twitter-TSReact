interface User {
    username: string,
    joinDate: string,
    followers: number,
    following: number,
}
interface Post {
    username: string,
    content: string
    reactions: {
        likes: number,
        dislikes: number,
    }
}

export const admUser: User = {
    username: "Dean Winchester",
    joinDate: "January 24, 1979",
    followers: 1,
    following: 1,
}

const user_1:User = {
    username: "Michelangelo",
    joinDate: "December 4, 1995",
    followers: 1000,
    following: 1,
}

const user_2:User = {
    username: "Donatello",
    joinDate: "May 29, 2013",
    followers: 2000,
    following: 2,
}

const user_3:User = {
    username: "Raphael",
    joinDate: "May 27, 2009",
    followers: 3000,
    following: 3,
}

const user_4:User = {
    username: "Leonardo",
    joinDate: "November 03, 1998",
    followers: 4000,
    following: 5,
}

const post_1:Post = {
    username: user_1.username,
    content: "Lorem Ipsum 1",
    reactions: {
        likes: 2,
        dislikes: 1,
    }
}

const post_2:Post = {
    username: user_2.username,
    content: "Lorem Ipsum 2",
    reactions: {
        likes: 2,
        dislikes: 1,
    }
}

const post_3:Post = {
    username: user_3.username,
    content: "Lorem Ipsum 3",
    reactions: {
        likes: 2,
        dislikes: 1,
    }
}

const post_4:Post = {
    username: user_4.username,
    content: "Lorem Ipsum 4",
    reactions: {
        likes: 5,
        dislikes: 6,
    }
}


export const users:Array<User> = [ user_1, user_2, user_3, user_4 ]

export const feed:Array<Post> = [ post_1, post_2, post_3, post_4]