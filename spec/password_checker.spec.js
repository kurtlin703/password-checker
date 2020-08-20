let mySpecChecker = require("../src/password_checker");
let passwordIsValid = mySpecChecker.passwordIsValid;

describe("passwordIsValid", () => {
  it("password should exist", () => {
    expect(() => {
      passwordIsValid("");
    }).toThrow(new Error("Your password should exist"));
  }); 
  it("password should be longer then 8 characters if not return false", () => {
    expect(() => {
      passwordIsValid("K@rt1");
    }).toThrow(new Error("your password should be longer then 8 characters"));
  });
  it("password should have one lower case letter if not return false", () => {
    expect(() => {
      passwordIsValid("K@RTLIN111");
    }).toThrow(new Error("your password should have one lower case letter"));
  });
  it("password should have one uppercase letter if not return false", () => {
    expect(() => {
      passwordIsValid("k@rtlin111");
    }).toThrow(new Error("your password should have one upper case letter"));
  });
  it("password should have one digit if not return false", () => {
    expect(() => {
      passwordIsValid("K@rtl2in@!#$");
    }).toThrow(new Error("your password should have one digit"));
  });
  it("password should have one special character if not return false", () => {
    expect(() => {
      passwordIsValid("Kurtlin11@1");
    }).toBe(false);
  });
});

// new function

let passwordIsOkay = mySpecChecker.passwordIsOkay;

describe("passwordIsOkay", () => {
  it("password should return true if three requirements are met", () => {
    expect(passwordIsOkay("kurtlin10")).toBe(true);
  });
});
