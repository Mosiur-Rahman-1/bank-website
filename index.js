
//Login button evern handler

var loginBtn = document.getElementById ("button");
loginBtn.addEventListener ('click', function () {

    var loginArea = document.getElementById ("login-area");
    loginArea.style.display = "none";
    var transationArea = document.getElementById ("transation-area");
    transationArea.style.display = "block";
})


// Deposite button event handlar

var depositeBtn = document.getElementById ("deposite-btn");
depositeBtn.addEventListener ("click", function () {

    var depositeAmount = document.getElementById ("deposite-amount").value;
    var depositeInputNumber = parseFloat (depositeAmount);
    var depositeAmountChange = document.getElementById ("deposite-amount-change").innerText;
    var depositeAmountNumber = parseFloat(depositeAmountChange);
    var totalDeposite = depositeInputNumber + depositeAmountNumber;
    document.getElementById ("deposite-amount-change").innerText = totalDeposite;
    document.getElementById ("deposite-amount").value = "";
    var totalBalance = document.getElementById ("total-balance-change").innerText;
    var totalBalanceNumber = parseFloat(totalBalance);
    var totalFinalBalance = totalDeposite + totalBalanceNumber;
    document.getElementById ("total-balance-change").innerText = totalFinalBalance;
})