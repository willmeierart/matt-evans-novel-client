import {TOGGLE_MENU} from '../_actions'

const initialState = {
  menuOpen:false
}

export default function MainDataReducer(state=initialState, action){
  switch(action.type){
    case TOGGLE_MENU:{
      const newState = {...state}
      newState.menuOpen = action.payload
      return newState }
    default:
      return state
  }
}
