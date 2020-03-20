document.getElementById('generate-password').addEventListener('click', function() {
    // Validate input
    var numCharactersInput = document.getElementById('num-characters').value;
    var assumedValue = parseInt(numCharactersInput, 10);

    if (isNaN(assumedValue)) {
        alert('Please enter a valid number');
        return;
    }

    // Generate password based on clicked options
    document.getElementById('generator-text').textContent = generatePassword(assumedValue);
});

function generatePassword(numCharacters) {
    var generatedPassword = '';
    var possibleCharacters = '';

    // Check if using lowercase, uppercase, or both
    possibleCharacters = possibleCharacters.concat(getCaseString());

    // Check if we're using numbers
    possibleCharacters = possibleCharacters.concat(getNumString());

    // Check if we're using special characters
    possibleCharacters = possibleCharacters.concat(getSpecialCharacters());

    if (possibleCharacters.length === 0) {
        alert('Password must include characters');
        return generatedPassword;
    }

    // For numCharacters length, generate password with possible valid characters
    for (var i = 0; i < numCharacters; i++) {
        var index = Math.floor(Math.random() * possibleCharacters.length);
        generatedPassword += possibleCharacters[index];
    }

    return generatedPassword;
}

// Determines which letter-case we're using, and returns valid string of possible characters
function getCaseString() {
    return '1';
}

// Determines whether we're using numbers, and returns valid string of possible characters
function getNumString() {
    return '2';
}

// Determines whether we're using special characters, and returns valid string of possible characters
function getSpecialCharacters() {
    return '3';
}