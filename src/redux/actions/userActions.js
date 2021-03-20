import {
  UPLOAD_PIC_SUCCESS,
  UPLOAD_PIC_FAIL,
} from "./../constants/userConstants";
import axios from "axios";

// export const uploadProfilePic = (id) => async (dispatch) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const res = await axios.post(
//       `http://localhost:8000/users/${id}/upload`,
//       config
//     );

//     dispatch({
//       type: UPLOAD_PIC_SUCCESS,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPLOAD_PIC_FAIL,
//       payload: {
//         error: error.response.data.error,
//       },
//     });
//   }
// };
