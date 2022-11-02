import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { post_1, post_2, post_3, post_4 } from '../../mockedData'

export interface IPost {
    username: string,
    content: string
    reactions: {
        likes: number,
        dislikes: number,
    }
}

const INITIAL_STATE: IPost[] = [post_1, post_2, post_3, post_4]

const slicePost = createSlice({
    name: "post",
    initialState: INITIAL_STATE,
    reducers: {
        addPosts(state, { payload }:PayloadAction<IPost>){
            return [...state, {username: payload.username, content: payload.content, reactions: payload.reactions}]
        }
    }
})

export default slicePost.reducer
export const { addPosts } = slicePost.actions

export const usePosts = (state: any) => state.posts as IPost[]