const employee = require("../lib/employee")

it ("can instatiate to be an object" , () => {
    const e = new employee();

    expect(typeof (e)).toBe("object");
});

it("can create name through constructor argument", () => {
    const name = "Maddy";
    const e = new employee(name);
    expect(e.name).toBe(name);
});

it("can create id through constructor argument", () => {
    const testValue = 100;
    const e = new employee("Maddy", testValue);
    expect(e.id).toBe(testValue);
});

it("can create email through constructor argument", () => {
    const testValue = "maddy@example.com";
    const e = new employee("Maddy", 1, testValue);
    expect(e.email).toBe(testValue);
});

describe("getName", () => {
    it("can get name through getName()", () => {
        const testValue = "Maddy";
        const e = new employee(testValue);
        expect(e.getName()).toBe(testValue);
    });
});

describe("getId", () => {
    it("can get id through getId()", () => {
        const testValue = 100;
        const e = new employee("Maddy", testValue);
        expect(e.getId()).toBe(testValue);
    });
});

describe("getEmail", () => {
    it("can get email through getEmail()", () => {
        const testValue = "maddy@example.com";
        const e = new employee("Maddy", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });
});

describe("getRole", () => {
    it("getRole() should return \"employee\"", () => {
        const testValue = "employee";
        const e = new employee("Maddy", 1, "maddy@example.com");
        expect(e.getRole()).toBe(testValue);
    });
});