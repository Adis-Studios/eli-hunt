// scripts.js
const correctMessages = [
    'message1',
    'message2',
    'message3',
    'message4',
    'message5'
];

function checkInput(step) {
    const userInput = document.getElementById(`input-${step}`).value;
    console.log(`User input for step ${step}: ${userInput}`); // Debugging

    if (userInput === correctMessages[step - 1]) {
        console.log(`Correct message for step ${step}`); // Debugging
        if (step < 5) {
            document.getElementById(`input-container-${step + 1}`).style.display = 'block';
        } else {
            alert('All messages entered correctly!');
        }
    } else {
        console.log(`Incorrect message for step ${step}`); // Debugging
        alert('Incorrect message. Please try again.');
    }
}
