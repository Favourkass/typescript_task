var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var read = require("readline");
var rl = read.createInterface(process.stdin, process.stdout);
var OtherDetails = /** @class */ (function () {
    function OtherDetails() {
        var _this = this;
        this.collectOtherDetails = function () {
            rl.question("Enter your hobby: " + " ", function (hobby) {
                _this.hobby = hobby;
                rl.question("Enter your birth date: " + " ", function (skills) {
                    _this.skills = skills;
                });
            });
        };
    }
    return OtherDetails;
}());
var CollectUserDetails = /** @class */ (function (_super) {
    __extends(CollectUserDetails, _super);
    function CollectUserDetails(firstName, lastName, email, age, address, hobby1, skills1) {
        var _this = _super.call(this) || this;
        _this.parentClass = new OtherDetails();
        _this.collectUserDetails = function () {
            rl.question("please enter your first name" + " ", function (firstName) {
                _this.firstName = firstName;
                rl.question("please enter your last name" + " ", function (lastName) {
                    _this.lastName = lastName;
                    rl.question("please enter your email" + " ", function (email) {
                        _this.email = email;
                        rl.question("enter your age" + " ", function (age) {
                            _this.age = age;
                            rl.question("enter your address" + " ", function (address) {
                                _this.address = address;
                                rl.question("enter your hobby" + " ", function (hobby1) {
                                    _this.hobby = hobby1;
                                    rl.question("enter your favorite skill" + " ", function (skills1) {
                                        _this.skills = skills1;
                                        rl.close();
                                        console.log("hello " + _this.firstName + " " + _this.lastName + " your skills is " + _this.skills);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        };
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.email = email;
        _this.age = age;
        _this.address = address;
        _this.hobby = hobby1;
        _this.skills = skills1;
        return _this;
    }
    return CollectUserDetails;
}(OtherDetails));
var userDetails = new CollectUserDetails("", "", "", "", "", "", "");
userDetails.collectUserDetails();
