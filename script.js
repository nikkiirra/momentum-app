//----------To hide all elements prior to submitting name----------//
var nameGreeting = document.getElementById("greetUser");
var greeting = document.getElementById("greeting");
greeting.style.display = "none";

var askFocus = document.getElementById("inquireFocus");
askFocus.style.display = "none";

var quote = document.getElementById("quote");
quote.style.display = "none";


var mainFocus = document.getElementById("main-focus");
mainFocus.style.display = "none";


// ----------------------- Main Page ----------------------- // 

var submitName = document.getElementById("submitName");
var inputName = document.getElementById("typeName");

submitName.addEventListener("click", greet);
inputName.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        greet();
    }
});


// ----------------------- User Greeting - Main Page Display ----------------------- // 
var greeting = document.getElementById("greeting");
var askName = document.getElementById("nameData");
function greet() {
    username = inputName.value;
    askName.style.display = "none";
    greeting.style.display = "flex";
    askFocus.style.display = "flex";
    renderQuote();
   
}

// ----------------------- TIME and Greeting Setup ----------------------- // 
function updateTime() {
    
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var clockView = currentTime.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute:'2-digit'
      });
    
    document.getElementById("timeDisplay").innerHTML = clockView;
    if (hours < 12) {
        nameGreeting.textContent = `Good Morning, ${username}.`;
    } else if (hours >= 12 && hours <= 17) {
        nameGreeting.textContent = `Good Afternoon, ${username}.`;
    } else {
        nameGreeting.textContent = `Good Evening, ${username}.`;
    }

}
setInterval(updateTime, 1000);

// ----------------------- Main Focus Display ----------------------- // 
var inputFocus = document.getElementById("mainfocusData");
inputFocus.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        renderFocus();
    }
});

// ----------------------- Main Focus ----------------------- // 
var displayFocus = document.getElementById("display-focus");
function renderFocus() {
    focus = inputFocus.value;
    displayFocus.textContent = focus;
    askFocus.style.display = "none";
    mainFocus.style.display = "flex";
   
}



// ----------------------- Quotes ----------------------- // 
var quotesList = [
    `All our dreams can come true, if we have the courage to pursue them. -Walt Disney`,
    `Shoot for the moon. Even if you miss, you'll land among the stars. -Les Brown`,
    `The most effective way to do it, is to do it. - Amelia Earhart`,
    `Your value will be not what you know; it will be what you share. - Ginni Rometty`,
    `Never believe anyone who says you don’t deserve what you want. -Taylor Swift`,
    `Choose people who lift you up. -Michelle Obama`];

var QuoteBtn = document.getElementById("storedQuotebtn");
    QuoteBtn.addEventListener("click", renderQuote);
    
// ----------------------- Quotes Display ----------------------- // 
var displayQuote = document.getElementById("display-quote");
    function renderQuote() {
        quote.style.display = "flex";
        displayQuote.textContent = quotesList[Math.floor(Math.random() * quotesList.length)];
    }    
// ----------------------- New Quote ----------------------- // 
var addQuoteBtn = document.getElementById("newQuotebtn");
    addQuoteBtn.addEventListener("click", displayInputQuote)
    
var inputQuote = document.getElementById("input-quote");
    inputQuote.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addQuote();
        }
    });   
var getQuote = document.getElementById("get-quote");
    function displayInputQuote() {
        inputQuote.value = "";
        displayQuote.style.display = "none";
        getQuote.style.display = "flex";
     }
    
    function addQuote() {
        quotesList.push(inputQuote.value);
        displayQuote.textContent = inputQuote.value;
        displayQuote.style.display = "flex";
        getQuote.style.display = "none";
    }
    