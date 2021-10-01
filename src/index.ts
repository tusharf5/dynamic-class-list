/* eslint-disable no-use-before-define */

type Value = string | undefined | null | number;
type ObjectValue = (() => boolean) | boolean | undefined | null;
type ValueMore = Value | Record<string, ObjectValue>;
type PossibleValues = ValueMore | Array<ValueMore>;

function isBadValue<T>(obj: T): boolean {
  return obj === null || typeof obj === 'undefined' || obj === undefined;
}

function handleFunction(fn: () => boolean, key: string, classList: string[]) {
  let result = false;
  try {
    result = fn();
    if (result) {
      classList.push(key.trim());
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

function handleObject(objArg: Record<string, ObjectValue>, classList: string[]) {
  Object.keys(objArg).forEach((fieldName) => {
    const value = objArg[fieldName];
    if (typeof value === 'function') {
      // if field value is a function call it
      handleFunction(value, fieldName, classList);
    } else if (value) {
      // if field value is truthy
      classList.push(fieldName);
    }
  });
}

function handleArray(params: Array<ValueMore>, classList: string[]) {
  params.forEach((param) => {
    const res = cl(param);
    if (res.trim()) {
      classList.push(res);
    }
  });
}

function cl(..._args: PossibleValues[]): string {
  const classList: string[] = [];
  const parameters: PossibleValues[] = Array.prototype.slice.call(arguments);
  parameters.forEach((param) => {
    if (!isBadValue(param)) {
      if (typeof param === 'number' || typeof param === 'string') {
        classList.push(String(param).trim());
      } else if (Array.isArray(param)) {
        handleArray(param, classList);
      } else if (param && typeof param === 'object') {
        handleObject(param, classList);
      }
    }
  });
  return classList.length > 0 ? classList.join(' ').trim() : '';
}

export { cl };
