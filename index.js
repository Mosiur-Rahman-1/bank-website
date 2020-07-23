
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
    var totalFinalBalance = depositeInputNumber + totalBalanceNumber;
    document.getElementById ("total-balance-change").innerText = totalFinalBalance;
})


// Withdraw button event handlar

var withdrawBtn = document.getElementById ("withdraw-button");
withdrawBtn.addEventListener ("click", function () {

    var withdrawAmount = document.getElementById ("withdraw-amount").value;
    var withdrawAmountNumber = parseFloat(withdrawAmount);
    document.getElementById ("withdraw-amount").value = "";
    
    var withdrawAmountChange = document.getElementById ("withdraw-amount-change").innerText;
    var withdrawAmountChangeNumber = parseFloat (withdrawAmountChange);
    var totalWithdraw = withdrawAmountChangeNumber + withdrawAmountNumber;
    document.getElementById ("withdraw-amount-change").innerText = totalWithdraw;

    var totalBalance = document.getElementById ("total-balance-change").innerText;
    var totalBalanceNumber = parseFloat(totalBalance);
    var totalFinalBalance = totalBalanceNumber - 1* withdrawAmountNumber;
    document.getElementById ("total-balance-change").innerText = totalFinalBalance;
    
})