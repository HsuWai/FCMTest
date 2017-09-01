import { combineReducers } from 'redux'
import InterestReducer from './InterestReducer'
import CloudMessageReducer from './CloudMessageReducer'

export default combineReducers({
     InterestLists : InterestReducer,
     cloud: CloudMessageReducer
    //signup: () => { return {} }
}); 