const submitBtn = document.getElementById('submitBtn');
const display = document.getElementById('display');

submitBtn.addEventListener('click', () => {
    const userInput = document.getElementById('goatInput').value;
    display.style.color = "black";
    display.innerText = "Thinking...";

    const Goat = new Promise((resolve, reject) => {
        setTimeout(() => {
            // 1. Clean the input
            const answer = userInput.trim().toLowerCase();
            
            // 2. All options must be lowercase here!
            const correctAnswers = [
                "ronaldo", 
                "cristiano", 
                "cr7", 
                "cristiano ronaldo", 
                "penaldo", 
                "cristiano dos santos aveiro", 
                "georgina's boyfriend",
                "the fiance of georgina",
                "the father of alana martina",
                "the man who scores penalties",
                "the legend ronaldo",
                "the legend cristiano",
                "the goat ronaldo",
                "the goat cristiano",
                "the father of cristiano jr",
                "santos aveiro",
                "the man who broke the internet",
                "the man who has won 5 ballon dors",
                "the man who has won 4 european golden shoes",
                "the man who has scored over 900 career goals",
                "the man who will take the 2026 world cup",
                "el Bicho",
                "o bicho",
                "the red devil",
                "the portuguese magician",
                "the goal machine"
            ];

            if (correctAnswers.includes(answer)) {
                resolve("You're damn right!!");
            } else {
                reject("Wrong answer!!");
            }
        }, 2000);
    });

    Goat
        .then((data) => {
            display.style.color = "blue";
            display.innerText = "Suiiiiii: " + data;
        })
        .catch((error) => {
            display.style.color = "red";
            display.innerText = "Nahhh: " + error;
        });
});