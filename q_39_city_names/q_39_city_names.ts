function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

const result1 = city_country("Lahore", "Pakistan");
console.log(result1);

const result2 = city_country("Paris", "France");
console.log(result2);

const result3 = city_country("Sydney", "Australia");
console.log(result3);