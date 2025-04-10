var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    email: "diptadipsahamails@gmail.com",
    password: "123456",
    role: Roles.admin,
};
var user2 = {
    email: "diyavincent200@gmail.com",
    password: "123456",
    role: Roles.user,
};
var isAdmin = function (user) {
    if (user.role == Roles.admin) {
        console.log("Admin User");
    }
    else {
        console.log("Normal User");
    }
};
isAdmin(user1);
