const submitBtn = document.getElementById('submitBtn');
const display = document.getElementById('display');

submitBtn.addEventListener('click', () => {
    const userInput = document.getElementById('goatInput').value;
    display.innerText = "Thinking...";

    // Your Promise logic
    const Goat = new Promise((resolve, reject) => {
        // Simulating a 2-second delay just like your original code
        setTimeout(() => {
            const answer = userInput.trim().toLowerCase();
            
            if (answer === "ronaldo" || answer === "cristiano" || answer === "cr7" || answer === "cristiano ronaldo" || answer === "penaldo" || answer === "cristiano dos santos aveiro" || answer === "georgina's fiance") {
                resolve("You're damn right!!");
            } else {
                reject("Go to hell!!");
            }
        }, 2000);
    });

    // Handling the Promise
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