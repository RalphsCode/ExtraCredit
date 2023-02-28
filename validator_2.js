// =========================
// EC Assignment 3 - Part II
// Ralph Godkin
// =========================

// Prompt user for the investment amount

investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));

// If the user did not enter a number, alert the user and then have them retry until we get a number

while (isNaN(investment) == 1){
    window.alert("Investment amount must be a number, please try again");
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
}
// Prompt user for the interest rate number

rate = parseFloat(prompt('Enter interest rate as xx.x'));

// If the user did not enter a number, alert the user and then have them retry until we get a number
// Or, if the number is not between 1 and 7% alert the user and then have them retry until we get a number in range

while ((isNaN(rate) == 1) || (rate <= 0) || (rate >= 7)){
    window.alert("Rate appears to be incorrect, please try again.");
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
} 
// Prompt user for the loan duration

years = parseInt(prompt('Enter the number of years you want to invest for'));

// If the user did not enter a number, alert the user and then have them retry until we get a number
// Or, if the number is not between 1 and 10 years alert the user and then have them retry until we get a number in range

while ((isNaN(years) == 1) || (years <= 0) || (years >= 11)){
    window.alert("Years must be a number and between 1 and 10, please try again.");
    years = parseInt(prompt('Enter the number of years you want to invest for'));
}
// Continue with the rest of the application