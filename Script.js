function checkResult(){

    let roll = document.getElementById("roll").value;
    let dob = document.getElementById("dob").value;
    let captcha = document.getElementById("captcha").innerHTML;
    let userCaptcha = document.getElementById("captchaInput").value;

    if(userCaptcha != captcha){
        document.getElementById("result").innerHTML = "❌ Invalid Captcha";
        return;
    }

    if(roll=="12345" && dob=="01/01/2008"){

        document.getElementById("result").innerHTML =
        " Name : Vivek Kumar <br>" +
        "  Marks : 480 <br>" +
        "  Grade : A  Congratulations! ";

        document.getElementById("studentInfo").style.display = "block";

    }
    else{

        document.getElementById("studentInfo").style.display = "none";

        document.getElementById("result").innerHTML =
        "❌ Result Not Found";

    }

}
function add(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("answer").innerHTML = "Answer = " + (a + b);
}

function sub(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("answer").innerHTML = "Answer = " + (a - b);
}

function mul(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("answer").innerHTML = "Answer = " + (a * b);
}

function div(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if(b == 0){
        document.getElementById("answer").innerHTML = "Cannot divide by zero!";
    } else {
        document.getElementById("answer").innerHTML = "Answer = " + (a / b);
    }
}
function showTime(){

let time = new Date();

let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();

if(h < 10) h = "0" + h;
if(m < 10) m = "0" + m;
if(s < 10) s = "0" + s;

document.getElementById("clock").innerHTML =
h + ":" + m + ":" + s;

}

setInterval(showTime,1000);

showTime();

async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "YOUR_API_KEY";

let url = "https://api.openweathermap.org/data/2.5/weather?q=" +
city +
"&appid=" +
apiKey +
"&units=metric";

let response = await fetch(url);

let data = await response.json();

if(data.cod == 200){

document.getElementById("weather").innerHTML =
"🌍 City : " + data.name + "<br>" +
"🌡️ Temperature : " + data.main.temp + " °C<br>" +
"💧 Humidity : " + data.main.humidity + "%<br>" +
"☁️ Weather : " + data.weather[0].main;

}
else{

document.getElementById("weather").innerHTML =
"❌ City Not Found";

}

}
let randomNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess(){

let guess = Number(document.getElementById("guess").value);

if(guess == randomNumber){

document.getElementById("gameResult").innerHTML =
"🎉 Congratulations! You guessed the correct number.";

randomNumber = Math.floor(Math.random() * 10) + 1;

}
else if(guess < randomNumber){

document.getElementById("gameResult").innerHTML =
"📉 Too Low! Try Again.";

}
else{

document.getElementById("gameResult").innerHTML =
"📈 Too High! Try Again.";

}

}