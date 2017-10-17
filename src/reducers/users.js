const initialState = {
  users: [],
  oneUser: {
    firstname: "",
    lastname: "",
    username: "",
    email: ""
  },
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

    case ("GET_ONE_USER_SUCCESS"): {
      return Object.assign({}, state, {
        oneUser: action.payload
      });
    }

    default: {
      return state;
    }
  }
}
