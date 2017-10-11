import {FETCH_WP_PAGES, FETCH_WP_POSTS} from '../_actions'

export default function MainDataReducer(state=[], action){
  switch(action.type){
    case FETCH_WP_PAGES:
      return action.payload.data
    case FETCH_WP_POSTS:
      return action.payload.data
    default:
      return state
  }
}
