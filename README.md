<h1 align="center">Text Analyzer</h1>

Matthew Eilar | [LinkedIn](https://www.linkedin.com/in/eilar-503/) | [email](mailto:<meilar@gmail.com>) | [website](www.mattheweilar.com)

## About this project
 

## Features


## How to view

To view this webpage:

1. Ensure that you have the most recent version of Git installed. [Instructions can be found here.](https://github.com/git-guides/install-git) 
1. Clone this repository to your local machine using the Terminal or Bash command `git clone https://github.com/meilar/text-test.git`.
2. Open "index.html" in a CSS3 and HTML5-compliant browser such as Google Chrome, Mozilla Firefox, or Apple Safari.

[Alternately, a hosted version of this pages is available to view on Github Pages.](https://meilar.github.io/text-test)

## Technologies Used

This site incorporates the following frameworks and languages:

- HTML 5
- CSS 3
- jQuery 3.6.0
- Bootstrap 4.5

The following software tools were used to develop this page:

- VS Code
- Google Chrome
- Git

## Testing

#### Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
  `const text = "hello";`
  `wordCounter(text);`
Expected Output:1

Test: "It should return 2 if a passage has two words."
Code:
  `const text = "hello there";`
  `wordCounter(text);`
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: `wordCounter("")`;
Expected Output: 0

Test: "It should not count numbers as words."
Code: `wordCounter("hi there 77 19");`
Expected Output: 2

#### Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code: 
  `const text = "";`
  `const word = "red";`
  `numberOfOccurrencesInText(word, text);`
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
  `const text = "red";`
  `const word = "red";`
  `numberOfOccurrencesInText(word, text);`
Expected output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
  `const text = "red";`
  `const word = "blue";`
  `numberOfOccurrencesInText(word, text);`
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
`const text = "red blue red red red green";`
`const word = "red";`
`numberOfOccurrencesInText(word, text);`
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
`const text = "red RED Red green Green GREEN";`
`const word = "Red";`
`numberOfOccurrencesInText(word, text);`
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
`const text = "Red! Red. I like red, green, and yellow.";`
`const word = "Red";`
`numberOfOccurrencesInText(word, text);`
Expected Output: 3

## Known Issues

## Acknowledgements

Thank you to my partner, Alex, for support in all ways. Thank you to my parents for encouraging technology exploration, even when resources were scarce. Thank you to the Kohlenberg Foundation for CHANGE ME.

## License 

MIT License

© 2022 Matthew Eilar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.