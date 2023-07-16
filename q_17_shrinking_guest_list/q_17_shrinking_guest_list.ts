// task 16:Shrinking Guest list
const guests: string[] = ["Ayesha", "Abdullah", "Safiullah", "Asadullah"];

console.log("I can only invite two people for dinner.");

while (guests.length > 2) {
  const guest = guests.pop();
  console.log(`Sorry, ${guest}, I can't invite you to dinner.`);
}
console.log(`I'm still inviting ${guests[0]} and ${guests[1]} to dinner.`);

guests.pop();
guests.pop();

console.log("My guest list is now empty.");