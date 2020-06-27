const request = require("supertest");

const server = require("../server");

describe("/math", () => {
  describe("POST /sum", () => {
    it("should return 400 if no array provided", async () => {
      const res = await request(server).post("/math/sum");
      expect(res.statusCode).toEqual(400);
    });
    it("should return 400 if array does not contain all numbers", async () => {
      const res = await request(server).post("/math/sum").send([1, "2", 3]);
      expect(res.statusCode).toEqual(400);
    });
    it("should sum 0 numbers", async () => {
      const res = await request(server).post("/math/sum").send([]);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ sum: 0 });
    });
    it("should sum 1 number", async () => {
      const res = await request(server).post("/math/sum").send([2]);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ sum: 2 });
    });
    it("should sum 2 numbers", async () => {
      const res = await request(server).post("/math/sum").send([1, 2]);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ sum: 3 });
    });
    it("should sum 3 numbers", async () => {
      const res = await request(server).post("/math/sum").send([1, 2, 5]);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ sum: 8 });
    });
  });
  describe("POST /product", () => {
    it("should return 400 if no array provided", async () => {
      const res = await request(server).post("/math/product");
      expect(res.statusCode).toEqual(400);
    });
    it("should return 400 if array does not contain all numbers", async () => {
      const res = await request(server).post("/math/product").send([1, "2", 3]);
      expect(res.statusCode).toEqual(400);
    });
    it("should return 400 if array is empty", async () => {
      const res = await request(server).post("/math/product").send([]);
      expect(res.statusCode).toEqual(400);
    });
    it("should just return 1 number", async () => {
      const res = await request(server).post("/math/product").send([2]);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ product: 2 });
    });
    it("should multiply 2 numbers", async () => {
      const res = await request(server).post("/math/product").send([1, 2]);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ product: 2 });
    });
    it("should multiply 3 numbers", async () => {
      const res = await request(server).post("/math/product").send([2, 2, 5]);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ product: 20 });
    });
  });
});
