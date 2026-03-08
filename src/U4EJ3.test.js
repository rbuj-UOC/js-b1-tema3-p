//import $ from 'jquery';
const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('test', () => {
  //let window;
  let splitCodeSolution;
  const html = fs.readFileSync('./U4/U4EJ3.html', 'utf-8');
  const window = new JSDOM(html, {
    runScripts: 'dangerously',
    resources: 'usable'
  }).window;
  console.log(window.test);
  //window = dom.window;

  beforeAll(() => {
    const codeSolution = window.document.getElementById('solutionJS').innerHTML;
    splitCodeSolution = codeSolution.split('=');
    console.log(window.test);
  });

  it('checks if function showClass works correctly', () => {
    console.log(window.test.toLowerCase().replaceAll(' ', ''));
    expect(
      window.test
        .toLowerCase()
        .replaceAll(' ', '')
        .indexOf('selectalmostoneextra')
    ).toBeGreaterThan(-1);
  });
});
