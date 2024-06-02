let current_users: string[] = ['alice', 'bob', 'charlie', 'david', 'emma'];
let new_users: string[] = ['emma', 'frank', 'george', 'hannah', 'isaac'];

for (let new_user of new_users) {
    if (current_users.includes(new_user.toLowerCase())) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
