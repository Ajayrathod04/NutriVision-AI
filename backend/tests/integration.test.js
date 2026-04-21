const request = require("supertest");

describe("Cloud Run Integration", () => {
  it("should return 200 from deployed backend", async () => {
    const res = await request("https://nutrivision-backend-295594191663.us-central1.run.app")
      .get("/health");

    expect(res.statusCode).toBe(200);
  });
});
