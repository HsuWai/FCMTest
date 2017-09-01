import {
    GET_NOTI,
    INCREMENT_NOTI,
    NOTI_COUNT
} from '../src/actions/Types'


const INITIAL_STATE = {
    notiCount: 0
}
export default function (state= INITIAL_STATE, action){
    switch(action.type){
        case(GET_NOTI):
            return { notiCount : action.payload}

        case(NOTI_COUNT):
            return { notiCount: action.payload}

        default:
            return state
    }
}