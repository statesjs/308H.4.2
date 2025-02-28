////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 0; i < 20; i++) {
  console.log(`${i + 1}`);
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 1; i <= 200; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 == 0) {
    console.log(`Fizz`);
  } else if (i % 5 == 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] += 1;
console.log(plantee[2]);

wolfy[3] = "Gotham City";
console.log(wolfy[3]);

dart.push("Hawkins");
console.log(dart);

wolfy[0] = "Gameboy";
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const arr = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let c of arr) {
  const arrUpper = c.toUpperCase();
  console.log(arrUpper);
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

console.log(favMovies.indexOf("Titanic"));

favMovies.sort(); //arrange logically
console.log(favMovies);
favMovies.pop(); // kick out the last element
console.log(favMovies);
favMovies.push("Guardians of the Galaxy"); //append to the end
console.log(favMovies);
favMovies.reverse(); //reverse the order
console.log(favMovies);
favMovies.shift(); //take off the first element
console.log(favMovies);
favMovies.unshift(); //adds element to the start of. also returns length of original obj
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(14, 1, "Avatar"); // splice replaces , affecting the original array, splice(INDEX, REMOVE_COUNT, REPLACEMENT)
console.log(favMovies);
let sliced = favMovies.slice(favMovies.length / 2); // slice() does not affect original array, returns new array
console.log(sliced);
console.log(favMovies.indexOf("Fast and Furious")); // fast and furious was still in the array, but if it wasn't a return value of -1

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1);
console.log(whereIsWaldo);
console.log(whereIsWaldo[1][2]);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[2][1][1]);
//I found waldo through the nested arrays but, It was hard coded

////////////////////////////////
// Excited Kitten
////////////////////////////////

////////////////////////////////
// Find the Median
////////////////////////////////

////////////////////////////////
// Hungry for More?
////////////////////////////////

////////////////////////////////
// Alien Attire
////////////////////////////////

////////////////////////////////
// Dress Us Up
////////////////////////////////

////////////////////////////////
// Dirty Laundry
////////////////////////////////

////////////////////////////////
// Inventory
////////////////////////////////
