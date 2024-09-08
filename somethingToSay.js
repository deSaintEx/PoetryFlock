
let words = 
// Define the global variables.
// Create an array to store words from a poem

  ['something', 'to', 'say', 'and', 'voice', 'do', 'seldom', 'walk', 
    'abreast', 'too', 'far', 'ahead', 'might', 'run', 'while', 'still', 
    'dies', 'for', 'breath', 'so', 'was', 'one', 'that', 'the', 'other', 
    'strides', 'apace', 'it', 'seems', 'time', 'has', 'passed', 'which', 
    'did', 'thing', 'erase', 'then', 'will', 'not', 'recall', 'what', 'made', 
    'a', 'with', 'itself', 'else', 'away'];

// Set the amount of words to be drawn on the canvas, as
// well as the starting hue value. Declare the position variable,
// which will be used to randomly start the word selection in the array.
let wordCount = 500;
let hue;
let position;

function setup() {
  describe(
    'A random series of words related to p5.js scattered onto the canvas.'
  );

  // Import the selected font style defined in the canvas's style.css file.
  textFont('Space Mono');

  createCanvas(6000, 3300);

  // Set the text alignment to center and set the color mode to HSB.
  textAlign(CENTER);
  colorMode(HSB);

  // Define hue as a random value.
  hue = random(180, 360);

  // Define the random starting point for selecting the words in the
  // array.
  position = floor(random(0, words.length - wordCount));

  background(hue, 95, 25);

  // Draw as many words as set with the words variable in the
  // canvas in random positions.
  for (let i = 0; i < 100; i++) {
    textSize(random(50, 300));
    fill(hue, 200, random(50, 95));
    text(random(words), random(width), random(height));
  }
}
