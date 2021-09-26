
var userName = prompt("Welcome to Vanished Chameleon Design. What is your name?");
var userGreetings = prompt("Hi " + userName + ", how are you doing?");
document.getElementById("greeting").innerHTML = "Vanished Chameleon Design Welcomes You, " + userName + "! " + "We're glad you are doing " + userGreetings + "!";
const today = new Date();

var num = 0;
var storage = 0;
var bundle = num * 100 + storage * 5;


function showDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();   
    document.getElementById("date-time").innerHTML = "Today is: " + month + "/" + date + "/" + year + " and the time is: " + hours + ":" + minutes + ":" + seconds;
}

function price() {
    var num = prompt("Select package");
    var packageNum = parseInt(num) * 100;
    document.getElementById("package-selection").innerHTML = "You have selected Package# " + num + " price/mo$ " + packageNum;

}

function customPackage() {
    num = prompt("Select package");
    storage = prompt("Select Storage");
    bundle = num * 100 + storage * 5;
    document.getElementById("package-add-on").innerHTML = "You have selected Package# " + num  + " & Storage Option# " + storage + " your total per month is $ " + bundle;

}

function addToCart() {
    var item = num;
    var itemPrice = storage;
    var total = bundle;
    document.getElementById("cart").innerHTML = "Your total is $ " + total + " per/mo";

}

function emptyCart() {
    num = 0;
    storage = 0;
    bundle = 0;
    document.getElementById("cart").innerHTML = "Your total is $ " + bundle + "  :(";
    document.getElementById("package-add-on").innerHTML = "Please, select your Your Package# & Storage option. Thanks!";

}