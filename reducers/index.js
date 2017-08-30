import { combineReducers } from 'redux'
import InterestReducer from './InterestReducer'

export default combineReducers({
     InterestLists : InterestReducer,
    //signup: () => { return {} }
}); 