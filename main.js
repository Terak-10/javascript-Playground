////////////////////////////////  1 ////////////////////////////////
/*



let country = "Slovakia";
let continent = "Europe";
let population = "5 000 000";

console.log(country);
console.log(continent);
console.log(population);

console.log(country,continent,population);

alert(country);
alert(continent);
alert(population);

if (country == "Slovakia") alert("GOOD")




*/
////////////////////////////////  2 ////////////////////////////////
/*




let country = "Slovakia";
let population = "5 000 000";

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof language);

console.log(isIsland);
console.log(country);
console.log(population);
console.log(language);
*/




////////////////////////////////  3 ////////////////////////////////


/*
let country = "Slovakia";
let population = "5 000 000";

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof language);

console.log(isIsland);
console.log(country);
console.log(population);
console.log(language);

language = "Slovensky";
console.log(language);
*/


////////////////////////////////  4 ////////////////////////////////

/*
let slovakiaPopulation = 5000000;
console.log(slovakiaPopulation / 2 / 2);
slovakiaPopulation ++;
console.log(slovakiaPopulation);

let finlandPopulation = 6000000;
console.log(slovakiaPopulation > finlandPopulation);

let average = 33000000;
console.log(slovakiaPopulation < average);

let description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

description = `Portugal is in Europe, and its 11 million people speak portuguese`;


let descriptionNew = `Europe
                      Europe
                      Europe`;
console.log(descriptionNew);

*/

////////////////////////////////  5 ////////////////////////////////
/*
const numNeighbours = Number(prompt("How many neighbour countries does your country have,"));

if(numNeighbours === 1) {
    console.log("Only 1 border");
} else if(numNeighbours > 1) {
    console.log("More than 1 border")
} else {
    console.log("No borders")
}
*/



////////////////////////////////  6 ////////////////////////////////
 



/*

const language = "English";
const population = 40000000;
const isIsland = false;

if(language === "English" && population < 50000000 && isIsland === false) {
    console.log("You should live in Canada! :)")
} else {
    console.log("Slovakia does not meet your criteria :(")
}

*/




////////////////////////////////  7 ////////////////////////////////
/*
const language = "Arabic"

if(language === "Chinese" || language === "Mandarian") {
    console.log("Most number of native speakers");
} else if (language === "Spanish") {
    console.log("2nd place in number of native speakers")
} else if (language === "English") {
    console.log("3rd place")
} else if (language === "Hindi") {
    console.log("Number 4")
} else if (language === "Arabic") {
    console.log("5th most spoken language")
} else {
    console.log("Great language too :D ")
};


switch(language) {
    case "Chinese":
    case "Mandarian":
    console.log("Most number of native speakers");
    break;
    case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
    case "English":
    console.log("3rd place");
    break;
    case "Hindi":
    console.log("Number 4");
    break;
    case "Arabic":
    console.log("5th most spoken language");
    break;
    default:
    console.log("Great language too :D ")
};
*/


////////////////////////////////  8 ////////////////////////////////


/*
const population = 5000000;


// Prvý spôsob
constAveragePopulation = population >= 30000000 ? console.log("Slovakia's population is above average"):
console.log("Slovakia population is below average");

// Druhý spôsob
console.log(`Slovakian population is ${population >= 33000000 ? "above": "below"} average`)
*/


////////////////////////////////  9 ////////////////////////////////
/*

function describeCountry(country, population, capitalCity) {
    //console.log(country, population, capitalCity);
    const info = `${country} has ${population} milions people and its capital city is ${capitalCity};`
    return info;
}

const slovakia = describeCountry("Slovakia", 5, "Bratislava");
console.log(slovakia);

const finland = describeCountry("Finland", 6, "Helsinky");
console.log(finland);

const czech = describeCountry("Czech", 11, "Prague");
console.log(czech);

console.log("🐆");
*/

////////////////////////////////  10 ////////////////////////////////
/*



// Declaration

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const chinaPercentage = percentageOfWorld1(1441);
console.log(`China it's about ${chinaPercentage} of the world population`);

const slovakiaPercentage = percentageOfWorld1(5);
console.log(`Slovakia it's about ${slovakiaPercentage} of the world population`);

const polandPercentage = percentageOfWorld1(37);
console.log(`Poland it's about ${polandPercentage} of the world population`);
*/


/*
// Expression

const percentageOfworld2 = function(population) {
    return population / 7900 * 100;
}

const chinaPercentage2 = percentageOfworld2(1441)
console.log(`China it's about ${chinaPercentage2} of the world population`);

const slovakiaPercentage2 = percentageOfworld2(5);
console.log(`Slovakia it's about ${slovakiaPercentage2} of the world population`);

const polandPercentage2 = percentageOfworld2(37);
console.log(`Poland it's about ${polandPercentage2} of the world population`);



// Arrow 

const percentageOfWorld3 = population => population / 7900 * 100;
const chinaPercentage3 = percentageOfWorld3(1441);
console.log(`China it's about ${chinaPercentage3} of the world population`);
*/

////////////////////////////////  11 ////////////////////////////////
/*

const percentageOfWorld = function(population) {
    return population / 7900 * 100;
}

const describePopulation = function(country, population) {
     const average = percentageOfWorld(population);
     return `${country} has ${population} milion people, which is about ${average} of the world.`
}

const chinaPopulation = describePopulation("China", 1441);
console.log(chinaPopulation);

const slovakiaPopulation = describePopulation("Slovakia", 5);
console.log(slovakiaPopulation);

const polandPopulation = describePopulation("Poland", 35);
console.log(polandPopulation);

*/

////////////////////////////////  12 ////////////////////////////////
/*


const population = [1441, 5, 37, 100];
console.log(population.length);

const percentageOfWorld = function(population) {
    return population / 7900 * 100;
}

const percentageChina = percentageOfWorld(population[0]);
const percentageSlovakia = percentageOfWorld(population[1]);
const percentagePoland = percentageOfWorld(population[2]);
const percentageBanglades = percentageOfWorld(population[3]);

 
const percentages = [percentageOfWorld(population[0]), percentageOfWorld(population[1]), percentageOfWorld(population[2]), percentageOfWorld(population[3])];
console.log(percentages);

*/

////////////////////////////////  13 ////////////////////////////////

/*

const neighbours = ["Poland", "Ukraine", "Hungary", "Austria", "Czech"];
neighbours.push("Utopia");

console.log(neighbours);

neighbours.pop();
console.log(neighbours);


if(neighbours.includes("Germnay")) {
    console.log("Germany is neighbour");
} else {
    console.log("Probably not a central European country");
}

console.log(neighbours.indexOf("Czech"));

neighbours[4] = "Czech Republic";
console.log(neighbours);

*/

////////////////////////////////  14 ////////////////////////////////
/*

const myCountry = {
    country: "Slovakia",
    population: 5000000,
    capital: "Bratislava",
    neighbours: ["Poland", "Ukraine", "Hungary", "Austria", "Czech"]
};
console.log(myCountry);

*/

////////////////////////////////  15 ////////////////////////////////
/*

const myCountry = {
    country: "Slovakia",
    population: 5,
    capital: "Bratislava",
    neighbours: ["Poland", "Ukraine", "Hungary", "Austria", "Czech"]
};

console.log(`${myCountry.country} has ${myCountry.population} milion finnish-speaking people, ${myCountry.neighbours.length} 
neighbouring countires and a capital called ${myCountry.capital}`);

myCountry.population = 3;
console.log(myCountry);

myCountry["population"] = 5;
console.log(myCountry);
*/


////////////////////////////////  16 ////////////////////////////////
/*

const myCountry = {
    country: "Slovakia",
    population: 5,
    capital: "Bratislava",
    neighbours: ["Poland", "Ukraine", "Hungary", "Austria", "Czech"],

    describe: function() {
        console.log(`${this.country} has ${this.population} milion finnishing-speaking people, ${this.neighbours.length}
        neighbouring countries and a capital called ${this.capital}`);
    },

    chechIsland: function() {
       this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

myCountry.describe();
myCountry.chechIsland();
console.log(myCountry);
*/

////////////////////////////////  17 ////////////////////////////////