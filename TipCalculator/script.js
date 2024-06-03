const amount = document.getElementById('amount');
const gnumber = document.getElementById('gnumber');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');


calculate = () => {
    const tip = ((amount.value * quality.value)/gnumber.value).toFixed(2);
    
    amount.value = "";
    gnumber.value = "";
    quality.value = "";
    
    if (tip === 'NaN'){
        tipAmount.textContent = 'Tip $0 each';
        showTipAmount();
    }

    else{
        tipAmount.textContent = 'Tip $' + tip + ' each';
        showTipAmount();
    }
}

showTipAmount = () => {
    var x = document.querySelector("#tip-amount");
    x.className = "show";

    setTimeout(function(){
        x.className = x.className.replace("show", "");
    }, 2700);
}