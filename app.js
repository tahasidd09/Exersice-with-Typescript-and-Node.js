var current_users = ['alice', 'bob', 'charlie', 'david', 'emma'];
var new_users = ['emma', 'frank', 'george', 'hannah', 'isaac'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users.includes(new_user.toLowerCase())) {
        console.log("Sorry, the username \"".concat(new_user, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(new_user, "\" is available."));
    }
}
