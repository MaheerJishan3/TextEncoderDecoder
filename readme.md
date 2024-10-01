# TextEncoderDecoder

TextEncoderDecoder is a simple web-based application that allows users to encode or decode text using a custom encoding scheme. This tool provides a user-friendly interface to convert text either into an encoded format or back into its original state.

## Features

- **Text Encoding**: Converts input text to a custom encoded format.
- **Text Decoding**: Converts encoded text back to its original form.
- **Clipboard Support**: Users can easily copy the result to the clipboard with a single click.
- **Error Handling**: Validates input to ensure that only English characters and certain punctuation are allowed.

## How It Works

1. **Select Option**: Choose either "Encode" or "Decode" from the dropdown menu.
2. **Input Text**: Enter the text you want to encode or decode.
3. **Submit**: Click the `Submit` button to see the result.
4. **Copy to Clipboard**: Click the `Copy to Clipboard` button to copy the result to your clipboard.

## Encoding/Decoding Logic

### Encoding
The application replaces each letter with a predetermined substitute. For example:
- `A` becomes `E`
- `B` becomes `C`
- `a` becomes `e`
- `b` becomes `c`
  
Similar substitutions are made for all letters in the alphabet.

### Decoding
The decoding process reverses the encoding substitutions, restoring the original text.

## Project Structure

- `index.html`: The main HTML file, providing the structure and layout for the app.
- `styles.css`: The CSS file that styles the webpage for a clean and user-friendly look.
- `script.js`: The JavaScript file containing the logic for encoding, decoding, and interacting with the DOM.

## Usage

To run this application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/MaheerJishan3/TextEncoderDecoder.git
   ```
2. Open `index.html` in your preferred web browser.

## Example

### Encoding:

Input: `Hello`
Output: `Jomiw`

### Decoding:

Input: `Jomiw`
Output: `Hello`

## Browser Support

This application works on modern web browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Contributing

If you'd like to contribute, feel free to fork the repository and submit a pull request with your changes. Any suggestions or issues can be submitted through the [Issues](https://github.com/MaheerJishan3/TextEncoderDecoder/issues) section.