import { FETCH_USERDETAIL, NEW_USERDETAIL } from "./constants"


export const newUserDetail = (userData) => dispatch=>{
    // console.log("created",userData)
    dispatch({
        type:FETCH_USERDETAIL,
        payload:userData
    })
}

// export const fetchUserDetails = () => dispatch=>{
//     console.log("created",userData)
//     dispatch({
//         type:NEW_USERDETAIL,
//         payload:userData
//     })
// }
