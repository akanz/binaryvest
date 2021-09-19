import { DEPOSITS_ERROR, DEPOSITS_LOADING, DEPOSITS_SUCCESS } from "../actionTypes";


const initialState = {
    allDeposits: [],
    allRequests: [],
    wallet: null,
    isLoading: false
}

const profileReducer =(state=initialState, action)=> {
    switch (action.type) {
        case DEPOSITS_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case DEPOSITS_SUCCESS:
            return {
                ...state,
                allDeposits: action.payload.data,
                isLoading: false,
            }
        case DEPOSITS_ERROR:
            return {
                ...state,
                allDeposits: [],
                isLoading: false,
            }
        default:
            return state;
    }
}

export default profileReducer