const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('test', () => {
  let window;
  let splitCodeSolution;
  beforeAll(() => {
    const html = fs.readFileSync('./U2/U2EJ1.html', 'utf-8');
    const dom = new JSDOM(html, { runScripts: 'dangerously' });
    window = dom.window;
    const codeSolution = window.document.getElementById('solution').innerHTML;
    splitCodeSolution = codeSolution.split('=');
  });

  it('checks if constant myCircle has the circle element defined in its value', () => {
    const myCircle = window.test[0];
    splitCodeSolution.forEach(function (myCode, ind) {
      if (myCode.indexOf('myCircle') > 0) {
        expect(
          splitCodeSolution[ind + 1].indexOf('getElementById')
        ).toBeGreaterThan(0);
      }
    });
    expect(myCircle.indexOf('li id="circle"')).toBeGreaterThan(0);
  });
  it('checks if constant myRect has the rectangle element defined in its value', () => {
    const myRect = window.test[1];
    splitCodeSolution.forEach(function (myCode, ind) {
      if (myCode.indexOf('myRect') > 0) {
        expect(
          splitCodeSolution[ind + 1].indexOf('getElementsByClassName')
        ).toBeGreaterThan(0);
      }
    });
    expect(myRect.indexOf('li class="rect"')).toBeGreaterThan(0);
  });
  it('checks if constant myPolygon has the polygon element defined in its value', () => {
    const myPolygon = window.test[2];
    splitCodeSolution.forEach(function (myCode, ind) {
      if (myCode.indexOf('myPolygon') > 0) {
        expect(
          splitCodeSolution[ind + 1].indexOf('getElementsByTagName')
        ).toBeGreaterThan(0);
      }
    });
    expect(myPolygon.indexOf('points="60,20 100,80 20,80"')).toBeGreaterThan(0);
  });
});
