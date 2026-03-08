//import $ from 'jquery';
const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('test', () => {
  let splitCodeSolution;
  const html = fs.readFileSync('./U4/U4EJ2.html', 'utf-8');
  const window = new JSDOM(html, {
    runScripts: 'dangerously',
    resources: 'usable'
  }).window;

  beforeAll(() => {
    const codeSolution = window.document.getElementById('solutionJS').innerHTML;
    splitCodeSolution = codeSolution.split('=');
  });
  it('checks if programmed functionality in form works correctly', () => {
    expect(window.test[0][0]).toBe(false);
    expect(window.test[0][1]).toBe(false);
    expect(window.test[1]).toBe(false);
    expect(window.test[2]).toBe(false);
  });
});
