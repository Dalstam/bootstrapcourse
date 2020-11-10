const buttonChoices = document.querySelectorAll('button');
const stepRows = document.querySelectorAll(".step").length;
let steps = 0;
document.querySelector('#navB').style.display = "none";
buttonChoices.forEach(buttonChoosen => {
    buttonChoosen.addEventListener('click', (e) => {

        if ((steps == (stepRows - 1)) && buttonChoosen.id == "next") {
            // Dit is de laatste stap, hierna moet het form submit worden
            // alert('the end');
        } else {
            e.preventDefault();
            //    checken welke knop er gedruk wordt en dan de naar voren of terug.
            switch (buttonChoosen.id) {
                case 'next':
                    steps++;
                    showSteps(steps);
                    break;
                case 'back':
                    hideSteps(steps);
                    steps--;
                    break;
            }
        }
    });
});

showSteps = (step) => {
    console.log(step);
    // TODO @Bouke verplichte velden afvangen voordat je naar de volgende stap kan
    // laat de terugknop zien als je van af stap 0 naar voren gaat en laat de volgende stap zien
    document.querySelector('#back').style.display = "block";
    document.querySelector('#step' + step).style.display = "flex";
    document.querySelector('#step' + (step - 1)).style.display = "none";
    if (step == (stepRows - 1)) {
        showOrder();
    }

};

hideSteps = (step) => {
    /*haal bij de eerste stap de back knop weg en laat bij de rest beide knoppen zien
    haal  vorige stap weg*/

    if (step != 1) {
        document.querySelector('#next').style.display = "block";
        document.querySelector('#back').style.display = "block";
    } else {
        document.querySelector('#back').style.display = "none";
    }
    document.querySelector('#step' + step).style.display = "none";
    document.querySelector('#step' + (step - 1)).style.display = "flex";
};

showNav = (step) => {

    if (step == 1) {
        document.querySelector('#navB').style.display = "flex";
        document.querySelector('#ontbijt').focus();
    } else {
        document.querySelector('#navB').style.display = "none";
    }

};
