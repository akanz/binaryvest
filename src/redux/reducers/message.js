import { CLEAR_MESSAGE, SET_MESSAGE } from "../actionTypes"


const initialState = {
    message: {},
    status: null,
    id: null,
}

const messageReducer =(state=initialState, action)=> {
    switch(action.type){
        case SET_MESSAGE:
            return {
                message: action.payload.message,
                status: action.payload.status,
                id: action.payload.id,
            }
        case CLEAR_MESSAGE:
            return {
                message: {},
                status: null,
                id: null
            }
        default:
            return state
    }
}

export default messageReducer