const current_users: string[] = ['John', 'Alice', 'Bob', 'Jane', 'Mark'];
const new_users: string[] = ['Mike', 'Sara', 'John', 'David', 'Sam'];

const current_users_lower: string[] = current_users.map(user => user.toLowerCase());

for (const new_user of new_users) {

  if (current_users_lower.includes(new_user.toLowerCase())) {
    console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different username.`);
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
  
}