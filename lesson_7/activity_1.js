const firstnames = ["Mark", "James", "Alison", "Mary"];
const lastnames = ["Smith", "Roberts", "Brown", "Williams"]
const prices = [100, 200, 300];
const paidOptions = ["true", "false"];
const additionalOptions = ["Cake", "Breakfast", "Tea", "Coffee", "Newspaper"];

const pickRandomItem = (array) => {
    let randomValue = Math.random()
    let randomIndex = Math.floor(randomValue * array.length);

    return array[randomIndex];
}

let firstname_1 = pickRandomItem(firstnames);
let lastname_1 = pickRandomItem(lastnames);
let totalprice_1 = pickRandomItem(prices);
let depositPaid_1 = pickRandomItem(paidOptions)
let additionalNeeds_1 = pickRandomItem(additionalOptions);

console.log(firstname_1);
console.log(lastname_1);
console.log(totalprice_1);
console.log(depositPaid_1);
console.log(additionalNeeds_1);

let firstname_2 = pickRandomItem(firstnames);
let lastname_2 = pickRandomItem(lastnames);
let totalprice_2 = pickRandomItem(prices);
let depositPaid_2 = pickRandomItem(paidOptions);
let additionalNeeds_2 = pickRandomItem(additionalOptions);

console.log(firstname_2);
console.log(lastname_2);
console.log(totalprice_2);
console.log(depositPaid_2);
console.log(additionalNeeds_2);
