export const calculateTip = (bill: number, tipPercentage: number): number => {
  if (isNaN(bill) || isNaN(tipPercentage)) return 0;
  return (bill * tipPercentage) / 100;
};

export const calculateTotal = (bill: number, tipAmount: number): number => {
  if (isNaN(bill) || isNaN(tipAmount)) return 0;
  return bill + tipAmount;
};