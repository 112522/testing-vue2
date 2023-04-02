import getters from "../getters";
const { doneTodos } = getters;

describe("getters", () => {
  it("doneTodos returns done todos", () => {
    const state = {
      todos: [
        { id: 1, text: "one", done: true },
        { id: 2, text: "two", done: false },
      ],
    };
    const result = doneTodos(state);
    expect(result).toHaveLength(1);
  });
});
