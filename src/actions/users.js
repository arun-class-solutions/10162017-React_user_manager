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

export const getOneUser = (id) => {
  return (dispatch) => {
    return axios.request({
      method: "GET",
      url: "http://myapi-profstream.herokuapp.com/api/ab1ed4/persons/" + id
    })
    .then((response) => {
      dispatch({
        type: "GET_ONE_USER_SUCCESS",
        payload: response.data
      });
    })
    .catch((err) => {
      dispatch({
        type: "GET_ONE_USER_ERROR",
        payload: err
      });
    });
  }
}
