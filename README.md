# data-type-js
Utility module for determining data type in JavaScript.
version 1.0.0.

Motivation.
As we all know, in JS we have native typeof operator for determining data types. But there is some problems when we use typeof 
with Object, Array, Date and Null data types. In these cases, typeof returns 'object' and that's all.
This module helps to resolve the problem.

How to use:
1. Import dataType.js to your code.
2. Just use one of module methods, e.g:
dataType.getType(new Date()); // "Date"
dataType.getType(null); // "Null"

Interface description:
dataType.getType(arg) - returns one of next strings: "Array", "Object", "Date", "Function", "String", "Boolean", "Number", "Null" or "Undefined".
dataType.isNum(arg) - returns true or false. Helps to understand if arg is a number. Checks if number is not empty string, boolean true/false expression, NaN or Infinity  
dataType.isUndef(arg) - checks if arg is undefined and returns true or false.
dataType.isNull(arg) - checks if arg is null and returns true or false.
dataType.isBool(arg) - checks if arg is boolean and returns true or false.
dataType.isStr(arg) - checks if arg is string and returns true or false.
dataType.isFunc(arg) - checks if arg is function and returns true or false.
dataType.isArr(arg) - checks if arg is array and returns true or false.
dataType.isObj(arg):  checks if arg is object and returns true or false.
dataType.isDate(arg): checks if arg is date and returns true or false.

Created due to ES 5. 
In current version Symbol data type has not supported yet.
Browser support: IE 8+



