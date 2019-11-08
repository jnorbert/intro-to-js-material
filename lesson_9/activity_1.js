// Introduction to JavaScript by Mark Winteringham
// Lesson 9 - Activity 1 - If statements

// Below are a series of incomplete if statements. Complete them so that they output
// the expected data set in the challenge.

// Challenge 1 - Equals to
// Make the if statement output the console log by updating the if statement
// to return true if the challengeOne variable is equal to 10

const challengeOne = 10;

if(null){
    console.log('Challenge one variable is equal');
}

// Challenge 2 - Equals to and equal value
// This if statement is broken. It should only return true if challengeTwo is
// both equal to 10 and is a string. Stop the if statement outputting the console
// log by updating the if statement to be equal in both value and type

const challengeTwo = 10;

if(challengeTwo == '10'){
    console.log('Challenge two variable should not be equal');
}

// Challenge 3 - Not equal to
// Update this if statement to output the console log if challengeThree is not
// equal to 10

const challengeThree = 5;

if(challengeThree == 10){
    console.log('Challenge three is not equal to ten');
}

// Challenge 4 - Greater than
// Update this if statement to output the console log if challengeFour is greater
// than 5

const challengeFour = 10;

if(challengeFour == 5){
    console.log('Challenge four is greater than five');
}

// Challenge 5 - Less than
// Update this if statement to output the console log if challengeFive is less
// than 5

const challengeFive = 2;

if(challengeFive == 5){
    console.log('Challenge five is less than five');
}

// Challenge 6 - Else 
// Update this if statement with an else statement that will output:
// 'Challenge six is not equal to ten'
// You cannot modify the original if statement

const challengeSix = 5;

if(challengeSix == 10){
    console.log('Challenge six is less than five');
}

// Challenge 7 - Else if
// Update this if statement with an else if statement that will output:
// 'Challenge seven is less than ten'
// You cannot modify the original if statement

const challengeSeven = 7;

if(challengeSeven > 10){
    console.log('Challenge seven is less than ten');
} else {
    console.log('Challenge seven is outside of range');
}

// Challenge 8 - Greater than and less than
// Update this if statement using an AND logical operator (Google it) so that
// it outputs the console log if challengeEight is greater than five and less than 10

const challengeEight = 8;

if(challengeEight == 10){
    console.log('Challenge eight greather than five and less than 10');
}

// Challenge 9 - Greater than or equal to
// Create an if statement using an OR logical operator (Google it) so that
// it outputs a console log if challengeNine is greater than 20 or equal to 9

const challengeNine = 9;
