const menuItems = document.querySelectorAll("input");
let roomServiceObj = {
    naamValue: "",
    kamerNoValue: "",
    ScrambledValue: "",
    Full_englishValue: "",
    GranolahValue: "",
    nachosValue: "",
    bitterballenValue: "",
    kaasstengelsValue: "",
    tijdValue: "",
    wensenValue: ""
};

menuItems.forEach(menuItem => {
    menuItem.addEventListener('blur', (e) => {
        switch (menuItem.id) {
            case "naam":
                roomServiceObj.naamValue = menuItem.value;
                break;
            case "kamerNo":
                roomServiceObj.kamerNoValue = menuItem.value;
                break;
            case "Scrambled":
                roomServiceObj.ScrambledValue = menuItem.value;
                break;
            case "Full_english":
                roomServiceObj.Full_englishValue = menuItem.value;
                break;
            case "Granolah":
                roomServiceObj.GranolahValue = menuItem.value;
                break;
            case "nachos":
                roomServiceObj.nachosValue = menuItem.value;
                break;
            case "bitterballen":
                roomServiceObj.bitterballenValue = menuItem.value;
                break;
            case "kaasstengels":
                roomServiceObj.kaasstengelsValue = menuItem.value;
                break;
            case "tijd":
                roomServiceObj.tijdValue = menuItem.value;
                break;
            case "spec-wensen":
                roomServiceObj.wensenValue = menuItem.value;
                break;
        }
    });
});

showOrder = () => {
    document.querySelector('#naamSummary').innerHTML = "<b>Uw naam is: </b>" + roomServiceObj.naamValue;
    document.querySelector('#kamerSummary').innerHTML = "<b>Uw kamernummer is: </b> " + roomServiceObj.kamerNoValue;
    document.querySelector('#tijdSummary').innerHTML = "<b>Wij komen om </b>" + roomServiceObj.tijdValue + "<b> uw bestelling brengen. </b>";
    //TODO @Bouke maken dat de bestelling ook in de html komt
    //TODO @Bouke de tekst van de next knop laten veranderen naar Bevestig bestelling
    //TODO @Bouke er kan niet gesubmit worden als er geen gerechten zijn gekozen.. Laat dit als een tekst zien en de volgende knop is niet te zien.
};
