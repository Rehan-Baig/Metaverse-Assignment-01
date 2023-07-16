// Task 44:Cars
interface Car {
  manufacturer: string;
  model: string;
  [key: string]: string | number;
}

function makeCar(manufacturer: string, model: string, options?: { [key: string]: string | number }): Car {
  const car: Car = { manufacturer, model };
  if (options) {
      for (const key in options) {
          car[key] = options[key];
      }
  }
  return car;
}

const Car = makeCar('Toyota', 'Camry', { color: 'red', year: 2020 });
console.log(Car);