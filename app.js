// Add calculate button event listener
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeTotal = getInputValueById('income-field');
    const foodCost = getInputValueById('food-field');
    const rentCost = getInputValueById('rent-field');
    const clothesCost = getInputValueById('clothes-field');

    if (isNaN(incomeTotal) || incomeTotal < 0) {
        return alert('Enter Income Amount!!')
    }
    if (isNaN(foodCost) || foodCost < 0) {
        return alert('Enter Food Cost!!')
    }
    if (isNaN(rentCost) || rentCost < 0) {
        return alert('Enter Rent Cost!!')
    }
    if (isNaN(clothesCost) || clothesCost < 0) {
        return alert('Enter Clothes Cost!!')
    }

    const totalExpense = foodCost + rentCost + clothesCost;

    if (totalExpense > incomeTotal) {
        return alert('Expenses exceeds Income!!')
    }

    const balance = incomeTotal - totalExpense;

    setElementValueById('total-field', totalExpense);
    setElementValueById('balance-field', balance);
})

document.getElementById('save-btn').addEventListener('click', function () {
    const savePercentage = getInputValueById('save-field');
    const incomeTotal = getInputValueById('income-field');
    const balance = getElementValueById('balance-field');

    if (savePercentage > 100 || savePercentage < 0) {
        return alert('Invalid Saving Percentage (0-100)!!');
    }

    const savingAmount = incomeTotal * (savePercentage / 100);

    if (savingAmount > balance) {
        return alert('Cannot Save more than Balance!!');
    }

    const remainingBalance = balance - savingAmount;

    setElementValueById('saving-amount-field', savingAmount);
    setElementValueById('remaining-balance-field', remainingBalance);
})