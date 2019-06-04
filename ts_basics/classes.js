var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    // public / private / protected
    function User(name, mail, age) {
        this.name = name;
        this.mail = mail;
        this.age = age;
        console.log("User: " + this.name + " - " + this.mail);
    }
    User.prototype.showUserInfo = function () {
        console.log(this.name, this.mail, this.age);
    };
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    return User;
}());
var mateusz = new User('Mateusz Iwańczuk', 'test@test.com', 34);
console.log(mateusz.age); // if private -> error: Property 'age' is private and only accessible within class 'User'
mateusz.showUserInfo();
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, mail, age) {
        var _this = _super.call(this, name, mail, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.register = function () {
        _super.prototype.register.call(this);
    };
    return Member;
}(User));
var janusz = new Member(1, 'Janusz Nowak', 'janusz@test.pl', 55);
janusz.register();
