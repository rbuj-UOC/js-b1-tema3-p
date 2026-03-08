//import $ from 'jquery';
const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('test', () => {
  const html = fs.readFileSync('./U4/U4EJ1.html', 'utf-8');
  const window = new JSDOM(html, {
    runScripts: 'dangerously',
    resources: 'usable'
  }).window;
  let splitFormCode;
  let test1 = -1;
  let test2 = -1;
  let test3 = false;
  let test4 = false;
  let test5 = false;
  let test6 = false;
  let test7 = false;
  let test8 = false;
  let test9 = false;
  let test10 = false;
  let test11 = false;
  let test12 = false;
  let test13 = false;
  let test14 = false;
  let test15 = false;
  beforeAll(() => {
    splitFormCode = window.test.outerHTML.split('<');
  });

  it('checks if the form has the [action] attribute and his value is an mailto action', () => {
    splitFormCode.forEach(function (myTag) {
      myTag = '<' + myTag;
      if (myTag.indexOf('<form') > -1) {
        test1 = myTag
          .replaceAll(' ', '')
          .replaceAll("'", '"')
          .indexOf('action="mailto:');
      }
    });
    expect(test1).toBeGreaterThan(-1);
  });
  it('checks if the form has the [method] attribute and is set as post', () => {
    splitFormCode.forEach(function (myTag) {
      myTag = '<' + myTag;
      if (myTag.indexOf('<form') > -1) {
        test2 = myTag
          .replaceAll(' ', '')
          .replaceAll("'", '"')
          .indexOf('method="post"');
      }
    });
    expect(test2).toBeGreaterThan(-1);
  });
  it('checks if the labels has been defined correctly', () => {
    splitFormCode.forEach(function (myTag) {
      myTag = '<' + myTag;
      if (myTag.indexOf('<label') > -1) {
        test3 =
          myTag.replaceAll(' ', '').replaceAll("'", '"').indexOf('for="age"') >
          -1
            ? true
            : test3;
        test4 =
          myTag.replaceAll(' ', '').replaceAll("'", '"').indexOf('for="male"') >
          -1
            ? true
            : test4;
        test5 =
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('for="female"') > -1
            ? true
            : test5;
        test6 =
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('for="rabies"') > -1
            ? true
            : test6;
        test7 =
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('for="parvovirus"') > -1
            ? true
            : test7;
        test8 =
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('for="distemper"') > -1
            ? true
            : test8;
        test9 =
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('for="hepatitis"') > -1
            ? true
            : test9;
        test10 =
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('for="breed"') > -1
            ? true
            : test10;
      }
    });
    expect(test3).toBe(true);
    expect(test4).toBe(true);
    expect(test5).toBe(true);
    expect(test6).toBe(true);
    expect(test7).toBe(true);
    expect(test8).toBe(true);
    expect(test9).toBe(true);
    expect(test10).toBe(true);
  });
  it('checks if the types are correctly defined', () => {
    splitFormCode.forEach(function (myTag) {
      myTag = '<' + myTag;
      if (myTag.indexOf('<input') > -1 && myTag.indexOf('type') > -1) {
        test11 =
          myTag.replaceAll(' ', '').replaceAll("'", '"').indexOf('id="name"') >
            -1 &&
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('type="text"') > -1
            ? true
            : test11;
        test12 =
          myTag.replaceAll(' ', '').replaceAll("'", '"').indexOf('name="age"') >
            -1 &&
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('type="number"') > -1
            ? true
            : test12;
        test13 =
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('name="gender"') > -1 &&
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('type="radio"') > -1
            ? true
            : test13;
        test14 =
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('name="vaccinations[]"') > -1 &&
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('type="checkbox"') > -1
            ? true
            : test14;
      }
    });
    expect(test11).toBe(true);
    expect(test12).toBe(true);
    expect(test13).toBe(true);
    expect(test14).toBe(true);
  });
  it('checks if the name properties are correctly defined', () => {
    splitFormCode.forEach(function (myTag) {
      myTag = '<' + myTag;
      if (myTag.indexOf('<input') > -1 && myTag.indexOf('type') > -1) {
        console.log('NAME');
        test15 =
          myTag.replaceAll(' ', '').replaceAll("'", '"').indexOf('id="name"') >
            -1 &&
          myTag
            .replaceAll(' ', '')
            .replaceAll("'", '"')
            .indexOf('name="name"') > -1
            ? true
            : test15;
      }
    });
    expect(test15).toBe(true);
  });
});
