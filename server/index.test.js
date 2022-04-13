/*
 * Integration Test
*/

const request = require("supertest");
const routes = require('./index');

describe("Getting data from API", () => {
  test("GET /", (done) => {
    request(routes)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((response) => {
        response.data.
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

// describe("Posting data from API", () => {
//   test("POST /send", (done) => {
//     request(routes)
//       .post("/send")
//       .expect("Content-Type", /json/)
//       .expect(201)
//       .expect((res) => {
//         //
//       })
//       .end((err, res) => {
//         if (err) return done(err);
//         return done();
//       });
//   });
// });