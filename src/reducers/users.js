const initialState = {
  users: [],
  newUser: {
    firstname: "",
    lastname: "",
    username: "",
    email: ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ("USERS_FETCH_SUCCESS"): {
      return Object.assign({}, state, {
        users: action.payload
      });
    }

    default: {
      return state;
    }
  }
}
