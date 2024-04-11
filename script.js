function displayText(text) {
    const gameText = document.getElementById('gameText');
    gameText.textContent = text;
}

function clearChoices() {
    const choicesContainer = document.getElementById('choicesContainer');
    while (choicesContainer.firstChild) {
        choicesContainer.removeChild(choicesContainer.firstChild);
    }
}

function addChoice(text, onClick) {
    const choicesContainer = document.getElementById('choicesContainer');
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = onClick;
    choicesContainer.appendChild(button);
}

function startGame() {
    parkWalk();
}

function parkWalk() {
    displayText("You are taking a walk in a park. You see Olga. Olga: Do you want to play piano or drums?");
    clearChoices();
    addChoice("Piano", () => catInteraction(true));
    addChoice("Drums", () => dogInteraction(true));
}

function catInteraction(fromParkWalk) {
    if (fromParkWalk) {
        displayText("You start playing piano and attract a cat. The cat approaches you. Do you want to play with the cat?");
    } else {
        displayText("The cat approaches you. Do you want to play with the cat?");
    }
    clearChoices();
    addChoice("Yes", () => hospitalVisit("The cat bites you."));
    addChoice("No", () => hospitalVisit("The cat bites you."));
}

function dogInteraction(fromParkWalk) {
    if (fromParkWalk) {
        displayText("You start playing drums and attract a dog. The dog approaches you. Do you want to play with the dog?");
    } else {
        displayText("The dog approaches you. Do you want to play with the dog?");
    }
    clearChoices();
    addChoice("Yes", () => hospitalVisit("The dog bites you."));
    addChoice("No", () => hospitalVisit("The dog bites you."));
}

function hospitalVisit(reason) {
    displayText(`${reason} You go to the hospital after being bitten. Dr.Park approaches you: Hello would you like a bandage or an ice pack?`);
    clearChoices();
    addChoice("Bandage", () => leaveHospital("Your arm heals and you leave the hospital."));
    addChoice("Ice Pack", () => leaveHospital("Your arm heals and you leave the hospital."));
}

function leaveHospital(message) {
    displayText(`${message} You go back to Olga. Olga: Welcome back! Are you okay?`);
    clearChoices();
    addChoice("Yes", () => finalChoice());
    addChoice("No", () => {
        displayText("Olga: Oh no, let's eat sushi with shrimp! Okay now that we ate, do you want to play volleyball or football?");
        finalChoice();
    });
}

function finalChoice() {
    clearChoices();
    addChoice("Volleyball", () => gameOver("You play volleyball and get tired."));
    addChoice("Football", () => gameOver("You play football and get tired."));
}

function gameOver(reason) {
    displayText(`${reason} You get sleepy. Olga: I'm also sleepy, let's leave. You leave the park and go to sleep. Would you like to play again?`);
    clearChoices();
    addChoice("Yes", startGame);
    addChoice("
