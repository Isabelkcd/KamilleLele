// Links til de andre sider 
function kL() {
    window.open('kamille.html', '_self');
}

function sadGirl() {
    window.open('mental.html', '_self');
}



let rangevalue = document.getElementById('myRange');
let setValue = document.getElementById('rangevalue');
let imgchangevalue = document.getElementById('imgChange');
let headerchange = document.getElementById('heading');


rangevalue.oninput = function () {
    let getvalue = rangevalue.value;
    setValue.innerHTML = this.value;
    if(getvalue > -1 && getvalue < 9) {
        imgchangevalue.innerHTML = "Kamille starter på Medievidenskabs Uddannelsen på Syddansk universitet i 2015, men dropper ud året efter, i 2016";
        headerchange.innerHTML = "Medievidenskab - 2015";
    }
    else if (getvalue >= 10 && getvalue <=19) {
        imgchangevalue.innerHTML = "I 2016 begynder Kamille på Multimediedesigneruddannelsen på Erhvervsakademiet Lillebælt og afslutter den i 2018";
        headerchange.innerHTML = "Multimediedesign - 2016";
    }
    else if (getvalue >= 20 && getvalue <=29) {
        imgchangevalue.innerHTML = "Efter Multimedieuddannelsen fortsætter Kamille i 2018 med en Top up-uddannelse inden for konceptudvikling som hun gennemfører i 2020";
        headerchange.innerHTML = "Top up: Digital konceptudvikling - 2018";
    }
    else if (getvalue >= 30 && getvalue <=39) {
        imgchangevalue.innerHTML = "Efter sin Top up-uddannelse bliver Kamille Social Media Manager hos et stort sneaker-brand";
        headerchange.innerHTML = "Job: Sneaker butik - 2020";
    }
    else if (getvalue >= 40 && getvalue <=49) {
        imgchangevalue.innerHTML = "På grund af arbejdsmiljøet og trivslen bliver Kamille sygemeldt i juli 2020";
        headerchange.innerHTML = "Sygemeldt: 2 år - 2020";
    }
    else if (getvalue >= 50 && getvalue <=59) {
        imgchangevalue.innerHTML = "Den 8. oktober deler Kamille et hudløst ærligt opslag på sin Instagram, hvor hun for første gang taler åbent om sit mentale helbred og hvordan hun har det.";
        headerchange.innerHTML = "Starter deling af privatliv på instagram - 2020";
    }
    else if (getvalue >= 60 && getvalue <=69) {
        imgchangevalue.innerHTML = "Efter opslaget d. 8 oktober begynder Kamille for alvor at tiltrække følgere. Hun modtager en overvældende positiv respons fra andre, som kan relatere sig til hendes situation. Kamille oplever støtte og opbakning fra sine følgere, hvilket motiverer hende til at fortsætte med at dele ud af sit liv.";
        headerchange.innerHTML = "Opbygger en følgerskare - 2020";
    }
    else if (getvalue >= 70 && getvalue <=79) {
        imgchangevalue.innerHTML = "I foråret 2021 beslutter Kamille sig for at følge hendes psykologs råd om at lære at fordybe sig. Dette bliver startskuddet til hendes nye passion og hobby: tufting";
        headerchange.innerHTML = "Starter med at tufte - 2021";
    }
    else if (getvalue >= 80 && getvalue <=89) {
        imgchangevalue.innerHTML = "I januar 2022 mister Kamilles sin far efter et sygdomsforløb. Kamille har igennem hele sit liv haft et komplekst forhold til ham, hvor han primært har været mere en distanceret karakter i hendes liv frem for en nærværende far. Denne begivenhed vækker en bred vifte af følelser og udfordrer Kamille i sin søgen på forsogning og forståelse.";
        headerchange.innerHTML = "Kamilles fars død - 2022";
    }
    else if (getvalue >= 90 && getvalue <=100) {
        imgchangevalue.innerHTML = "Efter at være blevet erklæret raskmeldt d. 5 august 2022, begynder Kamille på sit nye job som blomsterbinder hos “De Fire Årstider” allerede mandagen efter. Her opdager hun, at hun er i stand til at håndtere flere ting sideløbende med sit arbejde. Denne indsigt resulterer i at hun starter sin egen tufting-virksomhed “Sad Girl Summer” den 8. august 2022.";
        headerchange.innerHTML = "Starter Sad Girl Summer - 2022";
    }
}




