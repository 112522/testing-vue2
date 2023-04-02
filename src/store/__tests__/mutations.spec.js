import mutations from "../mutations";

const { increment } = mutations;

describe("mutations", () => {
  it("increment", () => {
    const state = { count: 0 };
    increment(state);
    expect(state.count).toEqual(1);
  });
});
