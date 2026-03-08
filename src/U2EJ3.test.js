const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('test', () => {
  let window;
  let codeSolution;
  let splitCodeSolution;
  let totalTitles;
  let totaParagraphs;
  let totalTitlesAfterFunction;
  let totaParagraphsAfterFunction;
  beforeAll(() => {
    const html = fs.readFileSync('./U2/U2EJ3.html', 'utf-8');
    const dom = new JSDOM(html, { runScripts: 'dangerously' });
    window = dom.window;
    codeSolution = window.document.getElementById('solutionJS').innerHTML;
    splitCodeSolution = codeSolution.split('=');
    totalTitles = window.document.getElementsByClassName('title').length;
    totaParagraphs = window.document.getElementsByClassName('paragraph').length;
    const elements = window.document.getElementsByClassName('title');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    window.test[2]('titleX');
    window.test[1]('paragraphX');
    totalTitlesAfterFunction =
      window.document.getElementsByClassName('title').length;
    totaParagraphsAfterFunction =
      window.document.getElementsByClassName('paragraph').length;
  });
  it('checks if function [createTitle] has been defined in code and is working', () => {
    expect(totalTitlesAfterFunction).toBe(1);
    expect(window.document.getElementsByTagName('h1')[0].innerHTML).toBe(
      'titleX'
    );
    expect(codeSolution.indexOf('createTitle')).toBeGreaterThan(-1);
  });
  it('checks if function [createParagraph] has been defined in code and is working', () => {
    expect(totaParagraphsAfterFunction).toBe(1);
    expect(codeSolution.indexOf('createParagraph')).toBeGreaterThan(-1);
  });
});
