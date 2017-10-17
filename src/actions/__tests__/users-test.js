import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as userActions from "../users";
import MockAdapter from "axios-mock-adapter";

import axiosConfig from "../../config/axios";

const mockStore = configureMockStore([thunk]);
const mockHttp = new MockAdapter(axiosConfig);

describe("USER ACTION CREATORS", () => {

  it("Creates USERS_FETCH_SUCCESS", () => {
    mockHttp
    .onGet("/persons")
    .reply(200, []);

    const store = mockStore();

    store
    .dispatch(userActions.getUsers())
    .then(() => {
      expect(store.getActions())
      .toEqual([{type: "USERS_FETCH_SUCCESS", payload: []}]);
    });
  });

  it("Creates GET_ONE_USER_SUCCESS", () => {
    mockHttp
    .onGet("/persons/1")
    .reply(200, {});

    const store = mockStore();

    store
    .dispatch(userActions.getOneUser(1))
    .then(() => {
      expect(store.getActions())
      .toEqual([{type: "GET_ONE_USER_SUCCESS", payload: {}}]);
    });
  });

});
