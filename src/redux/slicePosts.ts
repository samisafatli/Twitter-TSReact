import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FeedList } from '../../mockedData'

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

const INITIAL_STATE: IPost[] = FeedList

const slicePost = createSlice({
    name: "post",
    initialState: INITIAL_STATE,
    reducers: {
        addPosts(state, { payload }:PayloadAction<IPost>){
            return [{ ...payload }, ...state]
        },
        addLike(state, { payload }:PayloadAction<{id:number}>){
            state.forEach((post)=>{
                if(post.id === payload.id){
                    post.reactions.likes = +!post.reactions.likes
                }
            })
            return state
        },
        addDislike(state, { payload }:PayloadAction<{id:number}>){
            state.forEach((post)=>{
                if(post.id === payload.id){
                    post.reactions.dislikes = +!post.reactions.dislikes
                }
            })
            return state
        },
    }
})

export default slicePost.reducer
export const { addPosts, addLike, addDislike } = slicePost.actions

export const usePosts = (state: any) => state.posts as IPost[]
export const usePost = (id:number) => (state: any) => state.posts.filter((post: IPost) => post.id === id) as IPost[]