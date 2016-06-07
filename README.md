# data-type-js

A utility module for determining data type in JavaScript


##Motivation

As we all know, in JS we have the native `typeof` operator for determining data types. But there is a problem when we use `typeof` with `Object`, `Array`, `Date` and `Null` data types. In these cases, `typeof` returns 'object' and that's all. This module might help to resolve the problem.

##How to use
1. Import or insert `dataType.js` to your code.

2. Just use one of the module methods, e.g.:
```javascript
dataType.getType(new Date()); // returns "Date"

dataType.getType(null); // returns "Null"
```

##Interface description

```javascript
dataType.getType(arg); // returns one of next strings: "Array", "Object", "Date", "Function", "String", "Boolean", "Number", "Null" or "Undefined".

dataType.isNum(arg); // returns true or false. Helps to understand if an argument is a number. 
                     // Checks if a number is not an empty string, boolean true/false expression, NaN or Infinity

dataType.isUndef(arg); // - checks if an argument is undefined and returns true or false. 

dataType.isNull(arg); // - checks if an argument is null and returns true or false.

dataType.isBool(arg); // - checks if an argument is a boolean and returns true or false.
dataType.isStr(arg); // - checks if an argument is a string and returns true or false.
dataType.isFunc(arg); // - checks if an argument is a function and returns true or false.
dataType.isArr(arg); // - checks if an argument is an array and returns true or false.
dataType.isObj(arg); // -  checks if an argument is an object and returns true or false.
dataType.isDate(arg); // - checks if an argument is date and returns true or false.
```

Created due to ES 5.

Browser support: IE 8+
