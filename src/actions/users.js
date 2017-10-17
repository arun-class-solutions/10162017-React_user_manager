import axios from "axios";

export const getUsers = () => {
  return (dispatch) => {
    return axios.request({
      method: "GET",
      url: "http://myapi-profstream.herokuapp.com/api/ab1ed4/persons"
    })
    .then((response) => {
      const userData = response.data;

      dispatch({
        type: "USERS_FETCH_SUCCESS",
        payload: userData
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
