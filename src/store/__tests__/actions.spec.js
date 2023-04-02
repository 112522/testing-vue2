// import Store from "@/store";
import actions from "../actions";
import { fetchData } from "../../api/api";
import flushPromises from "flush-promises";

jest.mock("../../api/api");

describe("actions", () => {
  it("fetchData calls commit with the result of fetchData", async () => {
    expect.assertions(1);
    const data = [];
    // const data = [{},{}];
    // fetchData.mockImplementationOnce(() => Promise.resolve(data));
    const context = {
      commit: jest.fn(),
    };
    actions.fetchData(context);
    await flushPromises();
    expect(context.commit).toHaveBeenCalledWith("setUsers", data);
  });
  it("increment", async () => {
    expect.assertions(1);
    const context = {
      commit: jest.fn(),
    };
    actions.increment(context);
    await flushPromises();
    expect(context.commit).toHaveBeenCalledWith("increment");
  });
  // it("increment", async () => {
  //   await Store.dispatch("increment");
  //   expect(Store.state.count).toEqual(1);
  // });
  // it("fetchUsers", () => {
  //   const mockFunction = jest.fn();
  //   mockFunction();
  //   mockFunction.mock.calls;
  //   expect(mockFunction).toHaveBeenCalled();
  // });
});
