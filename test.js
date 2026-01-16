import readline from 'readline'; // Use import instead of require

const Goat = new Promise((resolve, reject) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Who is the football Goat? ', (answer) => {
        setTimeout(() => {
            if (answer.trim() === "Ronaldo" || answer.trim() === "Cristiano") {
                resolve("You're damn right!!");
            } else {
                reject("Wrong answer!");
            }
            rl.close();
        }, 2000);
    });
});

Goat
    .then((data) => console.log("Of course: " + data))
    .catch((error) => console.log("Nahhh: " + error));