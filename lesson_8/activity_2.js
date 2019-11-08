const firstnames = ["Mark", "James", "Alison", "Mary"];
const lastnames = ["Smith", "Roberts", "Brown", "Williams"]
const paidOptions = ["true", "false"];
const additionalOptions = ["Cake", "Breakfast", "Tea", "Coffee", "Newspaper"];

const createRandomPrice = () => {
    let randomValue = Math.random()
    let randomPrice = Math.floor(randomValue * 500);

    return randomPrice;
}

const pickRandomItem = (array) => {
    let randomValue = Math.random()
    let randomIndex = Math.floor(randomValue * array.length);

    return array[randomIndex];
}

const createRandomDataSet = () => {
    let dataSet = {
        firstname : null
    }

    dataSet.firstname = pickRandomItem(firstnames);
    let lastname = pickRandomItem(lastnames);
    let totalprice = createRandomPrice();
    let depositPaid = pickRandomItem(paidOptions);
    let additionalNeeds = pickRandomItem(additionalOptions);

    console.log(dataSet);
}

createRandomDataSet();
createRandomDataSet();
