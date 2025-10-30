// Function to process the inputs and display results
function processInputs() {
    const numberInput = document.getElementById('numberInput').value;
    const seasonInput = document.getElementById('seasonInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    // Process the number input
    const userNumber = parseInt(numberInput);
    let numberMessage = '';

    if (!isNaN(userNumber)) {
        if (userNumber === 5 || userNumber === 13 || userNumber % 3 === 0) {
            numberMessage = `The number ${userNumber} meets the condition!`;
        } else {
            numberMessage = `The number ${userNumber} doesn't meet the condition.`;
        }
    } else {
        numberMessage = "Please enter a valid number.";
    }

    // Process the season input
    let seasonMessage = '';

    switch (seasonInput) {
        case 'summer':
            seasonMessage = "Perfect time for beach days!";
            break;
        case 'winter':
            seasonMessage = "Great for cozy nights by the fire!";
            break;
        case 'autumn':
            seasonMessage = "Beautiful with all the falling leaves!";
            break;
        case 'spring':
            seasonMessage = "Lovely with all the flowers blooming!";
            break;
        default:
            seasonMessage = "That's not a valid season!";
    }

    // Display the results in the result div
    resultDiv.innerHTML = `
        <p><strong>Number Check:</strong> ${numberMessage}</p>
        <p><strong>Season Response:</strong> ${seasonMessage}</p>
    `;
}
