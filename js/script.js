//Update Prices
function updatePrice(macBook, price) {
    if (price == 0) {
        const memory8gb = 0;
        const memoryValue = memory8gb;
        const selectedItemCost = document.getElementById(macBook + '-cost');
        selectedItemCost.innerText = 0;
        calculateTotal(parseInt(price))
    } else {
        const memory8gb = price;
        const memoryValue = memory8gb;
        const selectedItemCost = document.getElementById(macBook + '-cost');
        selectedItemCost.innerText = price;
        calculateTotal(parseInt(price))
    }
}
//Get Button value
function getInputValue(macBook) {
    const selectButton = document.getElementById(macBook + '-cost');
    const buttonInnerText = parseInt(selectButton.innerText);
    return buttonInnerText;
}
//Get Input Text
function getInputText(macBook) {
    const selectButton = document.getElementById(macBook + '-text');
    const buttonInnerText = selectButton.value;
    return buttonInnerText;
}
//Update the innerText Value
function updateInnerText(macBook, text) {
    document.getElementById(macBook + '-price').innerText = text;
}

//using Promo Code
document.getElementById('apply-button').addEventListener('click', function () {
    const inputPromoCode = getInputText('promo-code')
    if (inputPromoCode === 'stevekaku') {
        const initial = document.getElementById('total-price');
        const innerValue = parseInt(initial.innerText);
        const percentage = (20 / 100) * innerValue;
        const promoCodeCal = innerValue - percentage;
        updateInnerText('second-total', promoCodeCal)
        const inputPromoCode = document.getElementById('promo-code-text');
        inputPromoCode.value = '';
    }
});
//Total Calculation
function calculateTotal(price) {

    const extraMemory = getInputValue('extra-memory');
    const extraStorage = getInputValue('extra-storage');
    const deliveryCharge = getInputValue('delivery-charge');
    const totalPrice = extraMemory + extraStorage + deliveryCharge + 1299;
    if (price) {
        totalPrice - price
    }
    updateInnerText('total', totalPrice)
    updateInnerText('second-total', totalPrice)
}
// memory 
document.getElementById('memory8gbBtn').addEventListener('click', function () {
    updatePrice('extra-memory', 0);
});
document.getElementById('memory16gbBtn').addEventListener('click', function () {
    updatePrice('extra-memory', 180);
})

//storage 
document.getElementById('storageSSD256gb').addEventListener('click', function () {
    updatePrice('extra-storage', 0);
})
document.getElementById('storageSSD512gb').addEventListener('click', function () {
    updatePrice('extra-storage', 100);
})
document.getElementById('storageSSD1tb').addEventListener('click', function () {
    updatePrice('extra-storage', 180);
})

//delivery
document.getElementById('deliveryFreeCost').addEventListener('click', function () {
    updatePrice('delivery-charge', 0);
})
document.getElementById('deliveryPaidCost').addEventListener('click', function () {
    updatePrice('delivery-charge', 20);
})