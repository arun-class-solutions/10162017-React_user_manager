import usersReducer from "../users";

describe("USERS REDUCER", () => {

  it("USERS_FETCH_SUCCESS", () => {
    const stateChange = usersReducer(null, {
      type: "USERS_FETCH_SUCCESS",
      payload: [{
        firstname: "Bob",
        lastname: "Jones",
        username: "bjones",
        email: "bjones@gmail.com"
      }]
    });

    expect(stateChange)
    .toEqual(expect.objectContaining({
      users: [{
        firstname: "Bob",
        lastname: "Jones",
        username: "bjones",
        email: "bjones@gmail.com"
      }]
    }));
  });

});
