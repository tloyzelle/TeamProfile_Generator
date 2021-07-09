const intern = require("../lib/intern");

it("can create school through the constructor", () => {
    const testValue = "UNCC";
    const e = new intern("Maddy", 1, "maddy@example.com", testValue);
    expect(e.school).toBe(testValue);
});

it("can use getRole to return \"intern\"", () => {
    const testValue = "intern";
    const e = new intern("Maddy", 1, "maddy@example.com", "UNCC");
    expect(e.getRole()).toBe(testValue);
});

it("can create school from getSchool()", () => {
    const testValue = "UNCC";
    const e = new intern("Maddy", 1, "maddy@example.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});