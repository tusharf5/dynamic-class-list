/* eslint-disable no-undef */
const { cl } = require('../dist');

test('Print Numbers', () => {
  expect(cl(1, 2)).toBe('1 2');
});

test('Print Strings', () => {
  expect(cl('class', 'another')).toBe('class another');
});

test('Print Array', () => {
  expect(cl(['as', 'asdd'])).toBe('as asdd');
});

test('Print Object', () => {
  expect(cl({ abc: true, cde: false })).toBe('abc');
});

test('Print Functions', () => {
  expect(cl({ abc: () => false, cde: () => true })).toBe('cde');
});

test('Print Bad Values', () => {
  expect(cl(null, undefined)).toBe('');
});

test('Print Bad Values in Object', () => {
  expect(
    cl({
      abs: undefined,
      cdb: null,
      abd: 2,
      cjn: true,
      askdj: 'sda',
    }),
  ).toBe('abd cjn askdj');
});

test('Print Bad Values in Functions', () => {
  expect(cl({ abc: () => undefined, cde: () => null, add: () => {} })).toBe('');
});

test('Print Bad Values in Array', () => {
  expect(cl([null, undefined, 1, 'asd', {}])).toBe('1 asd');
});

test('Print hybrid', () => {
  expect(
    cl(
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
