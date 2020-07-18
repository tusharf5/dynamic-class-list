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

* Support string arguments.
* Support number arguments.
* Support object arguments.
* Support array arguments.
* Support function arguments.
* No dependency.

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
var getClassNames = require('dynamic-class-list').getClassNames; // deprecated
var classList = require('dynamic-class-list').classList;
```

## OR using ES6 imports


```javascript
import { getClassNames, classList } from 'dynamic-class-list';
```

Note that `getClassNames` is deprecated and will be removed in next major release. You should use `classList` moving forward.

## API

### Arguments as strings

```javascript

// As Arguments
getClassNames('class1', 'class2'); // Output ==> "class1 class2"
// OR
classList('class1', 'class2'); // Output ==> "class1 class2"
```

### Arguments as an array of strings


```javascript
classList(['class1', 'class2']); // Output ==> "class1 class2"

classList([null, undefined, 3, 'class1', 'class2']); // Output ==> "3 class1 class2"
```

### Arguments as an object

`Note that the key is used as the class if its value is truthy`

```javascript
classList({class1: true, class2 : false}); // Output ==> "class1"

classList({class1: undefined, class2 : null, class3: true, class4: false}); // Output ==> "class3"
```

Note that the function **must** return a boolean.

```javascript
classList({ 
  class1: function() { return false; },
  class2 : function() { return true; }
});

// Output ==> "class2"
```

### Hybrid Arguments

```javascript
classList('class1', 'class2', 2, null, undefined, ['class3', null, undefined, 4, 'class4'], { 
    class5 : function() { return false; },
    class6 : function() { return true; },
    class7: undefined,
    class8: true,
    class9: false
});

// Output ==> "class1 class2 2 class3 4 class4 class6 class8"
```
