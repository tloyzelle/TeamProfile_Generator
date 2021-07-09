const manager = require("../lib/manager");

it("can create office number through constructor", () => {
    const testValue = 100;
    const e = new manager("Maddy", 1, "maddy@example.com", testValue);
    expect(e.office_number).toBe(testValue);
});

it("can use getRole() to return \"manager\"", () => {
    const testValue = "manager";
    const e = new manager("Maddy", 1, "maddy@example.com", 100);
    expect(e.getRole()).toBe(testValue);
});

it("can get office number using getOffiuceNumber", () => {
    const testValue = 100;
    const e = new manager("Maddy", 1, "maddy@example.com". testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});