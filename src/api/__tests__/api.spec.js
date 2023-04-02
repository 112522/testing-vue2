import { fetchData } from "../../api/api";

jest.mock("../../api/api");

describe("api", () => {
  it("fetches data", async () => {
    expect.assertions(1);
    await expect(fetchData()).resolves.toEqual([]);
  });
});
