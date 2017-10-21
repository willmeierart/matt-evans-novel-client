import {FETCH_WP_PAGES, FETCH_WP_POSTS, SELECT_CHAPTER} from '../_actions'

const initialState = {
  allPages:[],
  allPosts:[],
  currentChapter:{}
}

export default function MainDataReducer(state=initialState, action){
  switch(action.type){
    case FETCH_WP_PAGES:{
      const newState = {...state}
      newState.allPages = action.payload.data
      return newState }
    case FETCH_WP_POSTS:{
      const newState = {...state}
      newState.allPosts = action.payload.data
      return newState }
    case SELECT_CHAPTER:{
      const newState = {...state}
      const currentChapter = newState.allPages.find(chapter=>chapter.id==action.payload)
      newState.currentChapter = currentChapter
      return newState }
    default:
      return state
  }
}
