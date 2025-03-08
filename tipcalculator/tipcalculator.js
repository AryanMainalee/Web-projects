function calc(){

    document.getElementById('display').innerHTML = '';

    var amount = document.getElementById('amount').value;
    var per = document.getElementById('percentage').value;

    var total  = Number(amount);

    total += amount*(per/100);

    document.getElementById('display').innerHTML += total.toFixed(2);
}

