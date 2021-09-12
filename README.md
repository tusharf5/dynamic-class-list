<p align="center">
   <a href="https://github.com/tusharf5/dynamic-class-list"><img src="https://raw.githubusercontent.com/tusharf5/dynamic-class-list/master/static/logo.gif" alt="css class conditional react dynamic" height="100"/></a>
</p>

<h1 align="center">dynamic-class-list</h1>

<p align="center">A tiny, no-dependency library for creating conditional css classes.</p>

<p align="center">
	<a href="https://github.com/tusharf5/dynamic-class-list">
     <img src="https://img.shields.io/npm/l/dynamic-class-list" height="20"/>
  </a>
	<a href="https://github.com/tusharf5/dynamic-class-list">
     <img src="https://img.shields.io/npm/v/dynamic-class-list" height="20"/>
  </a>
	<a href="https://github.com/tusharf5/dynamic-class-list">
     <img src="https://img.shields.io/npm/dt/dynamic-class-list" height="20"/>
  </a>
	<a href="https://github.com/tusharf5/dynamic-class-list">
     <img src="https://img.shields.io/bundlephobia/minzip/dynamic-class-list" height="20"/>
  </a>
</p><br/><br/>

Features:

- Support string arguments.
- Support number arguments.
- Support object arguments.
- Support array arguments.
- Support function arguments.
- No dependency.

## Quickstart - CommonJS

```shell
npm install dynamic-class-list
```

### Or using yarn

```shell
yarn add dynamic-class-list
```

Then require it in your module ...

```javascript
var cl = require('dynamic-class-list').cl;
```

## OR using ES6 imports

```javascript
import { cl } from 'dynamic-class-list';
```

## API

### Arguments as strings

```javascript
// As Arguments
cl('class1', 'class2'); // Output ==> "class1 class2"
```

### Arguments as an array of strings

```javascript
cl(['class1', 'class2']); // Output ==> "class1 class2"

cl([null, undefined, 3, 'class1', 'class2']); // Output ==> "3 class1 class2"
```

### Arguments as an object

`Note that the key is used as the class if its value is truthy`

```javascript
cl({ class1: true, class2: false }); // Output ==> "class1"

cl({ class1: undefined, class2: null, class3: true, class4: false }); // Output ==> "class3"
```

Note that the function **must** return a boolean.

```javascript
cl({
  class1: function () {
    return false;
  },
  class2: function () {
    return true;
  },
});

// Output ==> "class2"
```

### Mixed Arguments Types

```javascript
cl('class1', 'class2', 2, null, undefined, ['class3', null, undefined, 4, 'class4'], {
  class5: function () {
    return false;
  },
  class6: function () {
    return true;
  },
  class7: undefined,
  class8: true,
  class9: false,
});

// Output ==> "class1 class2 2 class3 4 class4 class6 class8"
```

## License

MIT © [tusharf5](https://github.com/tusharf5)
