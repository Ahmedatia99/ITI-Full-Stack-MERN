const request = require("supertest");
const app = require("./server");

describe("API Endpoint Tests", () => {
  it("GET /api/hello should respond with a welcome message", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello World!");
  });

  it("POST /api/user should successfully create a user when name is provided", async () => {
    const res = await request(app).post("/api/user").send({ name: "Ahmed" });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User Ahmed created!");
  });

  it("POST /api/user should return an error if 'name' field is missing", async () => {
    const res = await request(app).post("/api/user").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Name is required");
  });
});
