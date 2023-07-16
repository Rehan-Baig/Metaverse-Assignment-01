const fav_magicians = ["David Copperfield", "Harry Houdini", "David Blaine"];

const makeGreat = (fav_magicians: string[]) => {
  const greatfav_magicians = [];
  for (const magician of fav_magicians) {
    const greatMagician = "The Great " + magician;
    greatfav_magicians.push(greatMagician);
  }
  return greatfav_magicians;
};

const show_fav_magicians = (fav_magicians: string[]) => {
  for (const magician of fav_magicians) {
    console.log(magician);
  }
};

const greatfav_magicians = makeGreat(fav_magicians.slice()); // Make a copy of the fav_magicians array.

show_fav_magicians(fav_magicians);

console.log("*************************************");

show_fav_magicians(greatfav_magicians);