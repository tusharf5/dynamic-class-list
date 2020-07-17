/* eslint-disable no-undef */
const { classList } = require('../index');

test('Print Numbers', () => {
  expect(classList(1, 2)).toBe('1 2');
});

test('Print Strings', () => {
  expect(classList('class', 'another')).toBe('class another');
});

test('Print Array', () => {
  expect(classList(['as', 'asdd'])).toBe('as asdd');
});

test('Print Object', () => {
  expect(classList({ abc: true, cde: false })).toBe('abc');
});

test('Print Functions', () => {
  expect(classList({ abc: () => false, cde: () => true })).toBe('cde');
});

test('Print Bad Values', () => {
  expect(classList(null, undefined)).toBe('');
});

test('Print Bad Values in Object', () => {
  expect(
    classList({
      abs: undefined,
      cdb: null,
      abd: 2,
      cjn: true,
      askdj: 'sda',
    }),
  ).toBe('abd cjn askdj');
});

test('Print Bad Values in Functions', () => {
  expect(classList({ abc: () => undefined, cde: () => null, add: () => {} })).toBe('');
});

test('Print Bad Values in Array', () => {
  expect(classList([null, undefined, 1, 'asd', {}])).toBe('1 asd');
});

test('Print hybrid', () => {
  expect(
    classList(
      1,
      2,
      'class',
      'another',
      ['as', 'asdd'],
      { abc: true, cde: false },
      null,
      undefined,
      {
        abs: undefined,
        cdb: null,
        abd: 2,
        cjn: true,
        askdj: 'sda',
      },
      [null, undefined, 1, 'asd', {}],
      { abc: () => false, cde: () => true },
      { abc: () => undefined, cde: () => null, add: () => {} },
      {
        sdf: true,
        scf: undefined,
        abs: undefined,
        cdb: null,
        abd: 2,
        cjn: true,
        askdj: 'sda',
      },
    ),
  ).toBe('1 2 class another as asdd abc abd cjn askdj 1 asd cde sdf abd cjn askdj');
});
