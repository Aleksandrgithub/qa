const isNotTriangleErr = "не треугольник";
const undefineErr = "неизвестная ошибка";
const equilateralTriangle = "равносторонний";
const isoscelesTriangle = "равнобедренный";
const regularTriangle = "обычный"

const sum = require('./sum');

test('0 0 0', () => {
  expect(sum(0, 0, 0)).toEqual(isNotTriangleErr);
});

test('-1 -2 -3', () => {
  expect(sum(-1, -2, -3)).toEqual(undefineErr);
});

test('5, 4, -3', () => {
  expect(sum(5, 4, -3)).toEqual(undefineErr);
});

test('-5, 4, 3', () => {
  expect(sum(-5, 4, 3)).toEqual(undefineErr);
});

test('5, -4, 3', () => {
  expect(sum(5, -4, 3)).toEqual(undefineErr);
});

test('0, 5, 7', () => {
  expect(sum(0, 5, 7)).toEqual(isNotTriangleErr);
});

test('2, 3, 0', () => {
  expect(sum(2, 3, 0)).toEqual(isNotTriangleErr);
});

test('5, 0, 4', () => {
  expect(sum(5, 0, 4)).toEqual(isNotTriangleErr);
});

test('1, 1, 2', () => {
  expect(sum(1, 1, 2)).toEqual(isNotTriangleErr);
});

test('1.1, 1.1, 2.2', () => {
  expect(sum(1.1, 1.1, 2.2)).toEqual(isNotTriangleErr);
});

test('0.1, 0.2, 0.3', () => {
  expect(sum(0.1, 0.2, 0.3)).toEqual(regularTriangle);
});

test('10, 10, 20', () => {
  expect(sum(10, 10, 20)).toEqual(isNotTriangleErr);
});

test('2, 4, 2', () => {
  expect(sum(2, 4, 2)).toEqual(isNotTriangleErr);
});

test('4, 4, 8', () => {
  expect(sum(4, 4, 8)).toEqual(isNotTriangleErr);
});

test('8, 2, 5', () => {
  expect(sum(8, 2, 5)).toEqual(isNotTriangleErr);
});

test('8.3, 2.4, 5.6', () => {
  expect(sum(8.3, 2.4, 5.6)).toEqual(isNotTriangleErr);
});

test('2e30, 2e40, 2e50', () => {
  expect(sum(2e30, 2e40, 2e50)).toEqual(isNotTriangleErr);
});

test('0.1, 0.1, 0.1', () => {
  expect(sum(0.1, 0.1, 0.1)).toEqual(equilateralTriangle);
});

test('42, 42, 42', () => {
  expect(sum(42, 42, 42)).toEqual(equilateralTriangle);
});

test('276392450374688234953924852389458237, 276392450374688234953924852389458237, 276392450374688234953924852389458237', () => {
  expect(sum(276392450374688234953924852389458237, 276392450374688234953924852389458237, 276392450374688234953924852389458237)).toEqual(equilateralTriangle);
});

test('2, 2, 1', () => {
  expect(sum(2, 2, 1)).toEqual(isoscelesTriangle);
});

test('2, 1, 2', () => {
  expect(sum(2, 1, 2)).toEqual(isoscelesTriangle);
});

test('1, 2, 2', () => {
  expect(sum(1, 2, 2)).toEqual(isoscelesTriangle);
});

test('5, 4, 3', () => {
  expect(sum(5, 4, 3)).toEqual(regularTriangle);
});

test('5.2, 4, 3', () => {
  expect(sum(5.2, 4, 3)).toEqual(regularTriangle);
});

test('0.3, 0.4, 0.5', () => {
  expect(sum(0.3, 0.4, 0.5)).toEqual(regularTriangle);
});

test('asd, asd, asd', () => {
  expect(sum(a, a, a)).toEqual(undefineErr);
});

test('1, 2', () => {
  expect(sum(1, 2)).toEqual(undefineErr);
});

test('1, 2, 3, 4', () => {
  expect(sum(1, 2, 3, 4)).toEqual(isNotTriangleErr);
});