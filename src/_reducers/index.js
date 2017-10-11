import {combineReducers} from 'redux'
import MainDataReducer from './reducer_main_data'
import persist from './persist'

const rootReducer = combineReducers({
  WPdata:MainDataReducer,
  // persist:persist
})

export default rootReducer
