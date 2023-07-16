const guests1: string[] = ["Ayesha", "Abdullah", "Safiullah", "Asadullah"];

const newGuest = "Asma"

for ( const guest1 of guests1 ) {

  if ( guest1 === "Safiullah" ) {
    guests1[ guests1.indexOf(guest1) ] = newGuest
  }

}

for ( const guest1 of guests1 ){
    const message2 =  `Dear ${guest1},

    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.

    Sincerely,
    Rehan
  `;
  console.log( message2 )
}
console.log( `Unfortunately, Safiullah can't make it to dinner, I have invited ${newGuest} instead.` )

for ( const guest1 of guests1 ){
    const message2 =  `Dear ${guest1},

    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.

    Sincerely,
    Rehan
  `;
  console.log( message2 )
}