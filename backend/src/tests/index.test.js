const request = require('supertest');
const app = require("../../server");
test("test get api", async() => {
    const response = await request(app).get("/expenses");
    expect(response.body.success).toBe(true);
})
test("test post api failure", async() => {
    const response = await request(app).post("/expenses").send({
        name: "test",
      });
    expect(response.body.success).toBe(false);
});
test("test post api success", async() => {
    const response = await request(app).post("/expenses").send({
        name: "test",
        expense: 100
      });
    expect(response.body.success).toBe(true);
});