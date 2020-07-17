/* eslint-disable no-use-before-define */

function isBadValue(obj) {
  return obj === null || typeof obj === 'undefined' || obj === undefined;
}

function handleFunction(fn, key, classList) {
  let result = false;
  try {
    result = fn();
    if (result) {
      classList.push(key.trim());
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

function handleObject(objArg, classList) {
  Object.keys(objArg).forEach((fieldName) => {
    if (typeof objArg[fieldName] === 'function') {
      // if field value is a function call it
      handleFunction(objArg[fieldName], fieldName, classList);
    } else if (objArg[fieldName]) {
      // if field value is truthy
      classList.push(fieldName);
    }
  });
}

function handleArray(params, classList) {
  params.forEach((param) => {
    const res = getClassNames(param);
    if (res.trim()) {
      classList.push(res);
    }
  });
}

function getClassNames() {
  const classList = [];
  // eslint-disable-next-line prefer-rest-params
  const parameters = Array.prototype.slice.call(arguments);
  parameters.forEach((param) => {
    if (!isBadValue(param)) {
      if (typeof param === 'number' || typeof param === 'string') {
        classList.push(String(param).trim());
      } else if (Array.isArray(param)) {
        handleArray(param, classList);
      } else if (typeof param === 'object') {
        handleObject(param, classList);
      }
    }
  });
  return classList.length > 0 ? classList.join(' ').trim() : '';
}

module.exports = {
  getClassNames,
  classList: getClassNames,
};
