import axios from "axios";
import { FETCH_POST } from "./types";

// export const fetchPosts = () => (dispatch) => {
//   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>
//     dispatch({
//       type: FETCH_POST,
//       payload: res.data,
//     })
//   );
// };


export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POST,
          payload: posts
        })
      );
  };