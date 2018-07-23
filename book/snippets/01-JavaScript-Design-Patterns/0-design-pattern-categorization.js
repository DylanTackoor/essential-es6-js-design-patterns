//* ******************************************************//
// A brief note on classes
//* ******************************************************//

//* ********************* Snippet 1 **********************//

class Car {
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
  }

  get info() {
    return `${this.model} ${this.year}`;
  }
}

//* ********************* Snippet 2 **********************//

const myCar = new Car('ford');
myCar.year = '2010';

console.log(myCar.info);
