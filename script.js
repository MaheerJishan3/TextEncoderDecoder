document.getElementById('submitButton').addEventListener('click', function() {
    const option = document.getElementById('option').value;
    const inputText = document.getElementById('inputText').value;

    // Clear previous error message
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';

    // Validate input for non-English characters
    const validInput = /^[A-Za-z0-9.,;:?!'"\s]*$/.test(inputText);
    if (!validInput) {
        errorMessage.textContent = 'Error: Please enter text in English only.';
        return;
    }

    let resultText = '';
    if (option === 'encode') {
        resultText = encodeText(inputText);
    } else if (option === 'decode') {
        resultText = decodeText(inputText);
    }

    document.getElementById('outputText').textContent = resultText;
});

// Copy to clipboard functionality
document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('outputText').textContent;
    if (outputText) {
        navigator.clipboard.writeText(outputText).then(() => {
            alert('Result copied to clipboard!');
        }).catch(err => {
            alert('Failed to copy text: ', err);
        });
    } else {
        alert('Nothing to copy.');
    }
});

// Function to encode the text
function encodeText(text) {
    let encoded = '';
    for (let i = 0; i < text.length; i++) {
        encoded += encode(text.charAt(i));
    }
    return encoded;
}

// Function to decode the text
function decodeText(text) {
    let decoded = '';
    for (let i = 0; i < text.length; i++) {
        decoded += decode(text.charAt(i));
    }
    return decoded;
}

// Encoding logic
function encode(c) {
    if (c >= 'A' && c <= 'Z') {
        switch(c) {
            case 'A': return 'E'; case 'B': return 'C'; case 'C': return 'D';
            case 'D': return 'F'; case 'E': return 'I'; case 'F': return 'G';
            case 'G': return 'H'; case 'H': return 'J'; case 'I': return 'O';
            case 'J': return 'K'; case 'K': return 'L'; case 'L': return 'M';
            case 'M': return 'N'; case 'N': return 'P'; case 'O': return 'U';
            case 'P': return 'Q'; case 'Q': return 'R'; case 'R': return 'S';
            case 'S': return 'T'; case 'T': return 'V'; case 'U': return 'A';
            case 'V': return 'W'; case 'W': return 'X'; case 'X': return 'Y';
            case 'Y': return 'Z'; case 'Z': return 'B'; default: return c;
        }
    } else if (c >= 'a' && c <= 'z') {
        switch(c) {
            case 'a': return 'e'; case 'b': return 'c'; case 'c': return 'd';
            case 'd': return 'f'; case 'e': return 'i'; case 'f': return 'g';
            case 'g': return 'h'; case 'h': return 'j'; case 'i': return 'o';
            case 'j': return 'k'; case 'k': return 'l'; case 'l': return 'm';
            case 'm': return 'n'; case 'n': return 'p'; case 'o': return 'u';
            case 'p': return 'q'; case 'q': return 'r'; case 'r': return 's';
            case 's': return 't'; case 't': return 'v'; case 'u': return 'a';
            case 'v': return 'w'; case 'w': return 'x'; case 'x': return 'y';
            case 'y': return 'z'; case 'z': return 'b'; default: return c;
        }
    }
    return c;
}

// Decoding logic
function decode(c) {
    if (c >= 'A' && c <= 'Z') {
        switch(c) {
            case 'E': return 'A'; case 'C': return 'B'; case 'D': return 'C';
            case 'F': return 'D'; case 'I': return 'E'; case 'G': return 'F';
            case 'H': return 'G'; case 'J': return 'H'; case 'O': return 'I';
            case 'K': return 'J'; case 'L': return 'K'; case 'M': return 'L';
            case 'N': return 'M'; case 'P': return 'N'; case 'U': return 'O';
            case 'Q': return 'P'; case 'R': return 'Q'; case 'S': return 'R';
            case 'T': return 'S'; case 'A': return 'U'; case 'V': return 'T';
            case 'W': return 'V'; case 'X': return 'W'; case 'Y': return 'X';
            case 'Z': return 'Y'; case 'B': return 'Z'; default: return c;
        }
    } else if (c >= 'a' && c <= 'z') {
        switch(c) {
            case 'e': return 'a'; case 'c': return 'b'; case 'd': return 'c';
            case 'f': return 'd'; case 'i': return 'e'; case 'g': return 'f';
            case 'h': return 'g'; case 'j': return 'h'; case 'o': return 'i';
            case 'k': return 'j'; case 'l': return 'k'; case 'm': return 'l';
            case 'n': return 'm'; case 'p': return 'n'; case 'u': return 'o';
            case 'q': return 'p'; case 'r': return 'q'; case 's': return 'r';
            case 't': return 's'; case 'a': return 'u'; case 'v': return 't';
            case 'w': return 'v'; case 'x': return 'w'; case 'y': return 'x';
            case 'z': return 'y'; case 'b': return 'z'; default: return c;
        }
    }
    return c;
}
