


// Intro video forsvinder efter 12 sekunder 
setTimeout("hideVideo()", 12000);

function hideVideo() {
    document.getElementById('video-logo').style.display="none";
    document.getElementById('skipbtn').style.display='none';
}

function skipVideo(){
    document.getElementById('video-logo').style.display="none";
    document.getElementById('skipbtn').style.display='none';
}



// Forside links 
var button = document.getElementById('btnone'); 

button.addEventListener('click', ()=> {
    window.open('kamille.html', "_self");
});


var buttonTwo = document.getElementById('btntwo'); 

buttonTwo.addEventListener('click', ()=> {
    window.open('sadgirlsummer.html', "_self");
});


var buttonThree = document.getElementById('btnthree'); 

buttonThree.addEventListener('click', ()=> {
    window.open('mental.html', "_self");
});



// Logo hjem link 

var logoHome = document.getElementById("logo"); 

logoHome.addEventListener('click', ()=> {
    window.open('index.html', "_self");
});



// Får ja muligheden og svaret til at forsvindeog tilføjer det næste spørgsmål og svarmuligheder efter 3 sekunder
function hideOther() {
    var hide = document.getElementById('choice-one');
    var normal = document.getElementById('yesNormal');

    hide.style.display = "none";
    normal.style.display = "none";

    const myTime = setTimeout(showNew, 2000);

    function showNew() {
    const situations = document.getElementById('situations');
    const helpWhere = document.getElementById('helpWhere');

    situations.style.display = 'block';
    helpWhere.style.display = 'block';
    }
}

// Får nej muligheden og svaret til at forsvinde og tilføjer det næste spørgsmål og svarmuligheder efter 3 sekunder
function hideOtherAnswer() {
    var hideSecond = document.getElementById('choice-two');
    var normalSecond = document.getElementById('no-normal');

    hideSecond.style.display = "none";
    normalSecond.style.display = "none";

    const myTimeTwo = setTimeout(showNewTwo, 2000);

    function showNewTwo() {
    const situations = document.getElementById('situations');
    const helpWhere = document.getElementById('helpWhere');

    situations.style.display = 'block';
    helpWhere.style.display = 'block';
    }
}


// Funktion, der viser nye beskder, når man har angivet sit svar. Første spørgsmål.
document.getElementById('choice-one').addEventListener('click', myAnswer);

function myAnswer() {
    var x = document.getElementById('yesNormal');
    if (x.style.display === "none") {
        x.style.display = "block";
        hideOtherAnswer();
    } else {
        x.style.display = "none";
    }
}


document.getElementById('choice-two').addEventListener('click', noAnswer);

function noAnswer() {
    var x = document.getElementById('no-normal');
    if (x.style.display === "none") {
        x.style.display = "block";
        hideOther();
    } else {
        x.style.display = "none";
    }
}






// Funktion, der viser nye beskder, når man har angivet sit svar. Andet spørgsmål.

document.getElementById('help').addEventListener('click', helpAnswer);

function helpAnswer() {
    var x = document.getElementById('professional');

    if (x.style.display === "none") {
        x.style.display = "block";
        helpFocus();
    } else {
        x.style.display = "none";
    }
}


document.getElementById('inside').addEventListener('click', insideAnswer)

function insideAnswer() {
    var x = document.getElementById('proces');

    if (x.style.display === "none") {
        x.style.display = "block";
        insideFocus();
    } else {
        x.style.display = "none";
    }
}

document.getElementById('closest').addEventListener('click', closestAnswer)

function closestAnswer() {
    var x = document.getElementById('feelings');
    if (x.style.display === "none") {
        x.style.display = "block";
        closestFocus();
    } else {
        x.style.display = "none";
    }
}


// Får det første svar i fokus, og fjerner de andre to svar
function helpFocus() {
    var hideInside = document.getElementById('inside');
    var hideClosest = document.getElementById('closest');

    hideInside.style.display = "none";
    hideClosest.style.display = "none";
}

//Får det andet svar i fokus, og fjerner de andre to svar
function insideFocus() {
    var hideHelp = document.getElementById('help');
    var hideClosest = document.getElementById('closest');

    hideHelp.style.display = "none";
    hideClosest.style.display = "none";
}

// Får det tredje svar i fokus, og fjerner de andre to svar
function closestFocus() {
    var hideHelp = document.getElementById('help');
    var hideInside = document.getElementById('inside');

    hideHelp.style.display = "none";
    hideInside.style.display = "none";
}




// Links til de andre sider 
function kL() {
    window.open('kamille.html', '_self');
}

function sadGirl() {
    window.open('sadgirlsummer.html', '_self');
}




// Scroll til den nyeste besked




// Smooth animation 


// video starter når den er inscreen og pauser når den er udenfor skærmen
/*
window.onscroll = function() {
    var blooper = document.getElementById("videoplay");
    if (blooper.getBoundingClientRect().bottom < 250 || blooper.getBoundingClientRect().top > 250)
      blooper.pause();
    else 
      blooper.play(); 
}

*/















