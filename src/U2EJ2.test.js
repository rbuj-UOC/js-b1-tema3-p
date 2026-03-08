const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('test', () => {
  let window;
  let codeSolution;
  let CSSSolution;
  let splitCodeSolution;
  let splitCSSSolution;
  beforeAll(() => {
    const html = fs.readFileSync('./U2/U2EJ2.html', 'utf-8');
    const dom = new JSDOM(html, { runScripts: 'dangerously' });
    window = dom.window;
    codeSolution = window.document.getElementById('solutionJS').innerHTML;
    CSSSolution = window.document.getElementById('solutionCSS').innerHTML;
    splitCodeSolution = codeSolution.split('=');
    splitCSSSolution = CSSSolution.split('{');
  });

  it('checks if class [featuredContent] has been defined in styles', () => {
    expect(CSSSolution.indexOf('.featuredContent')).toBeGreaterThan(-1);
    splitCSSSolution.forEach(function (myCode, ind) {
      if (myCode.indexOf('featuredContent') > 0) {
        expect(splitCSSSolution[ind + 1].indexOf('background')).toBeGreaterThan(
          -1
        );
        expect(splitCSSSolution[ind + 1].indexOf('color')).toBeGreaterThan(-1);
        expect(splitCSSSolution[ind + 1].indexOf('2px')).toBeGreaterThan(-1);
      }
    });
  });
  it('checks if element [myContent] has been modified in JS', () => {
    expect(
      codeSolution.indexOf('classList.remove("normalContent")') +
        codeSolution.indexOf("classList.remove('normalContent')")
    ).toBeGreaterThan(-1);
    expect(
      codeSolution.indexOf('classList.add("featuredContent")') +
        codeSolution.indexOf("classList.add('featuredContent')")
    ).toBeGreaterThan(-1);
    expect(codeSolution.indexOf('.textContent')).toBeGreaterThan(-1);
    expect(
      window.test.innerHTML.toUpperCase().indexOf('FEATURED CONTENT')
    ).toBeGreaterThan(-1);
    expect(
      window.window.test.classList
        .toString()
        .replace(',', ' ')
        .indexOf('normalContent')
    ).toBe(-1);
    expect(
      window.window.test.classList
        .toString()
        .replace(',', ' ')
        .indexOf('featuredContent')
    ).toBeGreaterThan(-1);
  });
});
