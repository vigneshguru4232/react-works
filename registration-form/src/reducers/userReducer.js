import { FETCH_USERDETAIL,NEW_USERDETAIL } from "../actions/constants"

const initialState = {
    users:[],
   
}
export default function (state = initialState,action){
    // console.log("reducer")
    switch (action.type){
      
        case FETCH_USERDETAIL:
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        default:
            return state;
    }
}