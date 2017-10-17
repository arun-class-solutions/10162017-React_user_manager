import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as userActions from "../users";
import MockAdapter from "axios-mock-adapter";

import axiosConfig from "../../config/axios";

const mockStore = configureMockStore([thunk]);
const mockHttp = new MockAdapter(axiosConfig);

const store = mockStore();

describe("USER ACTION CREATORS", () => {

  it("Creates USERS_FETCH_SUCCESS", () => {
    mockHttp
    .onGet("/persons")
    .reply(200, []);

    store
    .dispatch(userActions.getUsers())
    .then(() => {
      expect(store.getActions())
      .toEqual([{type: "USERS_FETCH_SUCCESS", payload: []}]);
    });
  });

});
