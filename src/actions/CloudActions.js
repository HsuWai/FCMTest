import {
    GET_NOTI,
    INCREMENT_NOTI,
    NOTI_COUNT
} from './Types'
import { AsyncStorage } from 'react-native'


export const GetNotification = (notiCount) => {
    console.log(notiCount)
    return(dispatch) => {
        notiCount = notiCount;
        try{
            AsyncStorage.setItem('noti_count', notiCount)
        }catch(error){
            
        }
        
        dispatch({
            type: NOTI_COUNT,
            payload: notiCount
        })
    }
}

