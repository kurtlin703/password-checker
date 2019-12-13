let myChecker = require("../src/password_checker")



describe("passwordIsValid",function () {
        it("password should exist", function(){
            expect(myChecker.passwordIsValid("K@urtlin1@")).toBe(true)
        })
        it("password should be longer then 8 characters", function(){
            expect(myChecker.passwordIsValid("K@urtlin1@")).toBe(true)
        })
        it("password should have one lower case letter", function(){
            expect(myChecker.passwordIsValid("K@URTLIn1@")).toBe(true)
        })
        it("password should have one uppercase letter", function(){
            expect(myChecker.passwordIsValid("K@urtlin1@")).toBe(true)
        })
        it("password should have one digit", function(){
            expect(myChecker.passwordIsValid("Kurtlin1@")).toBe(true)
        })
        it("password should have one special character", function(){
            expect(myChecker.passwordIsValid("K@rtlin!0")).toBe(true)    
        })
})

// new function



describe("passwordIsOkay", function(){
    it("password should return true if three requirements are met", function(){
        expect(myChecker.passwordIsOkay("kurtlin10")).toBe(true)
    })
})
        
