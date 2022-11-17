import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FeedList } from '../../mockedData'
import { IPost } from '../models'

const INITIAL_STATE: IPost[] = FeedList

const slicePost = createSlice({
    name: "post",
    initialState: INITIAL_STATE,
    reducers: {
        addPosts(state, { payload }:PayloadAction<IPost>){
            return [{ ...payload }, ...state]
        },
        addLike(state, { payload }:PayloadAction<{id:number}>){
            state.forEach(({id, reactions})=>{
                if(id === payload.id){
                    reactions.likes = +!reactions.likes
                }
            })
            return state
        },
        addDislike(state, { payload }:PayloadAction<{id:number}>){
            state.forEach(({id, reactions})=>{
                if(id === payload.id){
                    reactions.dislikes = +!reactions.dislikes
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