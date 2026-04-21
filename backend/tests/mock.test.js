jest.mock("../config/firestore", () => ({
  collection: () => ({
    add: jest.fn().mockResolvedValue(true)
  })
}));

test("mock firestore write", async () => {
  const db = require("../config/firestore");
  const res = await db.collection("logs").add({});
  expect(res).toBe(true);
});
