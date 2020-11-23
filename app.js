// Listen for submit
document
  .getElementById('loan-form')
  .addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {
  console.log('calculating');
  // UI Variables
  const amount = document.getElementByID('amount');
  const interest = document.getElementByID('interest');
  const years = document.getElementByID('years');
  const monthlyPayment = document.getElementByID('monthly-payment');
  const totalPayment = document.getElementByID('total-payment');
  const totalInterest = document.getElementByID('total-interest');

  // calculation vars
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  e.preventDefault();
}
