//import $ from 'jquery';
const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('test', () => {
  //let window;
  let splitCodeSolution;
  const html = fs.readFileSync('./U3/U3EJ2.html', 'utf-8');
  const window = new JSDOM(html, {
    runScripts: 'dangerously',
    resources: 'usable'
  }).window;
  //window = dom.window;

  beforeAll(() => {
    const codeSolution = window.document.getElementById('solutionJS').innerHTML;
    splitCodeSolution = codeSolution.split('=');
  });

  it('checks if method addEventListener has been used three times', () => {
    let total = 0;
    splitCodeSolution.forEach(function (myCode, ind) {
      if (myCode.indexOf('addEventListener') > 0) {
        total++;
      }
    });
    expect(total).toBeGreaterThan(2);
  });
  it('checks if function showClass works correctly', () => {
    expect(window.test[0]).toBe('red');
    expect(window.test[1]).toBe('green');
    expect(window.test[2]).toBe('orange');
  });
});
