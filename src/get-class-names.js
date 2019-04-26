module.exports = {
  getClassNames,
  classList: getClassNames,
};

function handleObject(objArg, classList) {
  Object.keys(objArg).forEach((fieldName) => {
    if (typeof objArg[fieldName] === 'function') {
      // if field value is a function call it
      handleFunction(objArg[fieldName], fieldName, classList);
    } else if (objArg[fieldName]) {
      // if field value is truthy
      classList.push(getClassNames(fieldName).trim());
    }
  });
}

function handleFunction(fn, key, classList) {
  let result = false;
  try {
    result = fn();
  } catch (e) {}
  if (typeof result === 'boolean') {
    if (result) {
      classList.push(key.trim());
    }
  }
}

function handleArray(arrayArg, classList) {
  arrayArg.forEach((element) => {
    !isBadValue(element) && classList.push(getClassNames(element).trim()); // recursion
  });
}

function isBadValue(obj) {
  if (obj === null || typeof obj === 'undefined' || obj === undefined) {
    return true;
  }
  return false;
}

function getClassNames() {
  const classList = [];
  const args = [].slice.call(arguments, 0);
  args.forEach((arg) => {
    if (isBadValue(arg)) {
      return;
    }
    if (typeof arg === 'number' || typeof arg === 'string') {
      classList.push(String(arg).trim());
    } else if (Array.isArray(arg)) {
      handleArray(arg, classList);
    } else if (typeof arg === 'object') {
      handleObject(arg, classList);
    }
  });
  return classList.join(' ').trim();
}
