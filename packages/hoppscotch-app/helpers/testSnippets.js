export default [
  {
    name: "Response: Status code is 200",
    script: `\n\n// Check status code is 200
pw.test("Status code is 200", ()=> {
    pw.expect(pw.response.status).toBe(200);
});`,
  },
  {
    name: "Response: Assert property from body",
    script: `\n\n// Check JSON response property
pw.test("Check JSON response property", ()=> {
    pw.expect(pw.response.method).toBe("GET");
});`,
  },
  {
    name: "Status code: Status code is 2xx",
    script: `\n\n// Check status code is 2xx
pw.test("Status code is 2xx", ()=> {
    pw.expect(pw.response.status).toBeLevel2xx();
});`,
  },
  {
    name: "Status code: Status code is 3xx",
    script: `\n\n// Check status code is 3xx
pw.test("Status code is 3xx", ()=> {
    pw.expect(pw.response.status).toBeLevel3xx();
});`,
  },
  {
    name: "Status code: Status code is 4xx",
    script: `\n\n// Check status code is 4xx
pw.test("Status code is 4xx", ()=> {
    pw.expect(pw.response.status).toBeLevel4xx();
});`,
  },
  {
    name: "Status code: Status code is 5xx",
    script: `\n\n// Check status code is 5xx
pw.test("Status code is 5xx", ()=> {
    pw.expect(pw.response.status).toBeLevel5xx();
});`,
  },
]
