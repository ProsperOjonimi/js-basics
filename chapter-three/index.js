let highIncome = false;
let goodCreditScore = false;

let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan);

let applicationRefused = !eligibleForLoan;
