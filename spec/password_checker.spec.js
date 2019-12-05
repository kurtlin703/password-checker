let myChecker = require("../src/password_checker")
// let passwordIsCorrect = myChecker.passwordIsCorrect

describe("passwordIsCorrect", function () {
it("password should return true if requirements are met", function(){
    expect(myChecker.passwordIsCorrect("K@urtlin1@")).toBe(true)

}) 
})

describe("passwordIsOkay", function(){
    it("password should return true if three requirements are met", function(){
        expect(myChecker.passwordIsOkay("kurtlin")).toBe(true)
    })
})