const request = require("supertest");
const DateMock = require("jest-date-mock");

const server = require("../server");

beforeAll(() => {
  DateMock.advanceTo(new Date(2020, 5, 26));
});

afterAll(() => {
  DateMock.clear();
});

describe("/date", () => {
  describe("GET /year", () => {
    it("should return 2020", async () => {
      const res = await request(server).get("/date/year");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ year: 2020 });
    });
  });

  describe("GET /month", () => {
    it("should return 5", async () => {
      const res = await request(server).get("/date/month");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ month: 5 });
    });
  });

  describe("GET /day", () => {
    it("should return 26", async () => {
      const res = await request(server).get("/date/day");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ day: 26 });
    });
  });
});
