/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
 **** AIMING FOR EXCEEDS EXPECTATIONS GRADE ****
 * 
  Creating an array of objects (named quotess) with properties quote and source. Optional for at least one: citation and year
***/

var quotes = [
    {
        quote: 'If You Are Working On Something That You Really Care about, You Don\t Have To Be Pushed. The Vision Pulls You',
        source: 'Steve Jobs',
        tags: '#Inspire#Lead'
    },
    {
        quote: 'The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today',
        source: 'Franklin D. Roosevelt',
        citation: 'Speech',
        year: 1945,
        tags: '#Doubt#Tomorrow#Limits'
    },
    {
        quote: 'True Individual Freedom Cannot Exist Without Economic Security And Independence',
        source: 'Franklin D. Roosevelt',
        citation: 'Speech',
        year: 1944,
        tags: '#Freedom'
    },
    {
        quote: 'Leadership Is Unlocking People\'s Potential To Become Better',
        source: 'Bill Bradley',
        tags: '#WhatIsLeadership'
    },
    {
        quote: 'Think Little Goals And Expect Little Achievements. Think Big Goals And Win Big Success',
        source: 'David Joseph Schwartz',
        tags: '#Goals#DreamBig'
    }
];


/***
  getRandomQuote() picks out a random quote from the array and returns that quote
***/

function getRandomQuote() {
    var randNum = Math.floor(Math.random() * quotes.length); //code for random number between 0-length of quote array
    return quotes[randNum];
}


/***
  Getting random quote and setting up a variable to hold the html value before targeting the div in the HTML document 
***/

function printQuote() {
    randColor();
    var randQuote = getRandomQuote();
    var HTML = '';

    HTML += '<p class="quote">' + randQuote.quote + '</p>';
    HTML += '<p class="source">' + randQuote.source;
    if (randQuote.hasOwnProperty('citation')) {
        HTML += '<span class="citation">' + randQuote.citation + '</span>';
    }
    if (randQuote.hasOwnProperty('year')) {
        HTML += '<span class="year">' + randQuote.year + '</span>';
    }
    HTML += '</p>';
    HTML += '<p class="tags">' + randQuote.tags + '</p>';

    document.getElementById('quote-box').innerHTML = HTML;
}

/***
  Randomly select background color
  Sites that helped:
  https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp -for using correct call to style background
  https://stackoverflow.com/questions/1484506/random-color-generator -page used for inspiration for random color
***/

function randColor() {
    var colorOpt = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var color = '#';
    for (var i = 0; i < 6; i += 1) // Setting correct length for color
    {
        color += colorOpt[Math.floor(Math.random() * colorOpt.length)];
    }
    document.body.style.backgroundColor = color;
}

/***
 Periodically resets the quote
 Sites that helped:
 https://www.w3schools.com/js/js_timing.asp - for using setInterval() method
***/

setInterval(printQuote, 20000);

/***
  Event listener to change quote at button click. Do not change code.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
