const engineer = require('../lib/engineer');

it("can create the gitHub account through the constructor", () => {
    const testValue = "gitHubUser";
    const e = new engineer("Maddy", 1, "maddy@example.com", testValue);
    expect(e.github).toBe(testValue);
});

it("can getRole() to return \"engineer\"", () => {
    const testValue = "engineer";
    const e = new engineer("Maddy", 1, "maddy@example.com", "gitHubUser");
    expect(e.getRole()).toBe(testValue);
});

it("can create the gitHub user name from getGitHub()", () => {
    const testValue = "gitHubUser";
    const e = new engineer ("Maddy", 1, "maddy@example.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});