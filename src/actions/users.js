import axiosConfig from "../config/axios";

export const getUsers = () => {
  return (dispatch) => {
    return axiosConfig.request({
      method: "GET",
      url: "/persons"
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
    return axiosConfig.request({
      method: "GET",
      url: "/persons/" + id
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
