function checkInput(step) {
    alert(`Checking input for step ${step}`);
    const userInput = document.getElementById(`input-${step}`).value;
    alert(`User input: ${userInput}`);
    if (userInput === correctMessages[step - 1]) {
        if (step < 5) {
            document.getElementById(`input-container-${step + 1}`).style.display = 'block';
        } else {
            alert('All messages entered correctly!');
        }
    } else {
        alert('Incorrect message. Please try again.');
    }
}
