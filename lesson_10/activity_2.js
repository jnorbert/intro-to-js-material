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
        firstname : null,
        lastname : null,
        totalprice : null,
        depositPaid : null,
        additionalNeeds : "",
    }

    dataSet.firstname = pickRandomItem(firstnames);
    dataSet.lastname = pickRandomItem(lastnames);
    dataSet.totalprice = createRandomPrice();
    dataSet.depositPaid = pickRandomItem(paidOptions)

    for(let i = 1; i <= 3; i++){
        dataSet.additionalNeeds += pickRandomItem(additionalOptions);

        if(i !== 3){
            dataSet.additionalNeeds += ", ";
        }
    }

    console.log(dataSet);
}


createRandomDataSet();
createRandomDataSet();
