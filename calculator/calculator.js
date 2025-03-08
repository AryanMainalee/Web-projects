const display = document.getElementById('display');



function add(value){
    display.value += value;
}
function erase(){
    display.value ='';
}
function calc(){
    var x,y;

    x = display.value;

    y = eval(x);

    display.value = y;

}
