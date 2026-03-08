import '@testing-library/jest-dom';
import { tests } from '../U5/U5EJ1';
describe('tests', () => {
  const myTriangles = tests()[0];
  const localMyTriangles = tests()[1];
  const myJSON =
    '[{"base":10,"height":5,"rightTriangle":true},{"base":10,"height":8.660254037844386,"rightTriangle":false}]';
  test('comproves that constant myTriangles is correctly defined', () => {
    expect(JSON.stringify(myTriangles) === myJSON).toBe(true);
  });
  test('comproves that the value of localStorage["myTriangles"] is correctly defined', () => {
    let isValidJson = true;
    try {
      JSON.parse(localMyTriangles);
    } catch {
      isValidJson = false;
    }
    expect(isValidJson).toBe(true);
    expect(localMyTriangles).toBe(myJSON);
  });
});
