# data-type-js
<p><strong>Utility module for determining data type in JavaScript<strong><p>.
<p>Version 1.0.0<p>

<h3>Motivation</h3>
<p>As we all know, in JS we have native typeof operator for determining data types. But there is some problems when we use typeof 
with Object, Array, Date and Null data types. In these cases, typeof returns 'object' and that's all.
This module helps to resolve the problem.</p>

<h3>How to use:</h3>
<p>1. Import dataType.js to your code.</p>
<p>2. Just use one of module methods, e.g.:</p>
<p><code>dataType.getType(new Date()); // "Date"</code></p>
<p><code>dataType.getType(null); // "Null"</code></p>

<h3>Interface description:</h3>

<p><code>dataType.getType(arg)</code> - returns one of next strings: "Array", "Object", "Date", "Function", "String", "Boolean", "Number", "Null" or "Undefined".</p>

<p><code>dataType.isNum(arg)</code> - returns true or false. Helps to understand if arg is a number. Checks if number is not empty string, boolean true/false expression, NaN or Infinity</p>  

<p><code>dataType.isUndef(arg)</code> - checks if arg is undefined and returns true or false.</p> 

<p><code>dataType.isNull(arg)</code> - checks if arg is null and returns true or false.</p>
<p><code>dataType.isBool(arg)</code> - checks if arg is boolean and returns true or false.</p>
<p><code>dataType.isStr(arg)</code> - checks if arg is string and returns true or false.</p>
<p><code>dataType.isFunc(arg)</code> - checks if arg is function and returns true or false.</p>
<p><code>dataType.isArr(arg)</code> - checks if arg is array and returns true or false.</p>
<p><code>dataType.isObj(arg)</code> -  checks if arg is object and returns true or false.</p>
<p><code>dataType.isDate(arg)</code> - checks if arg is date and returns true or false.</p>

<p>Created due to ES 5.</p> 
<p>In current version Symbol data type has not supported yet.</p>
<p>Browser support: IE 8+</p>
