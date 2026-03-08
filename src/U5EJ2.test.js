import '@testing-library/jest-dom';
import { tests } from '../U5/U5EJ2';
describe('tests', () => {
  const myTriangles = tests()[0];
  const newTriangle = tests()[1];
  const myJSON = '{"base":10,"height":5,"rightTriangle":false}';
  test('comproves that constant myTriangle is correctly defined', () => {
    expect(JSON.stringify(myTriangles) === myJSON).toBe(true);
  });
  test('comproves that the value of localStorage["newTriangle"] is correctly defined', () => {
    let isValidJson = true;
    try {
      JSON.parse(newTriangle);
    } catch {
      isValidJson = false;
    }
    expect(isValidJson).toBe(true);
    expect(newTriangle).toBe(myJSON);
  });
});
