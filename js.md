If you have ever extensively worked with callbacks, you'll notice one problem with them. They are difficult to track!
==
framework vs library
1.a framework is a certain way of writing your software not only a piece of code but your entire application. It’s solving structural and architectural problems on the code level.

You can say you build a standard while developing a framework. And framework consumer follows that standard. A library doesn't force you to follow any standard because it doesn't provide one in the first place.
When you use a library you have the control over your code. Whenever you need something from the library you simply call it.

So whenever the framework needs the application specific code it calls your code. So here the control is “inverted” from you to the framework. This is called inversion of control.

Library gives you a set of functions/modules/APIs which you can use to solve a certain problem, but it doesn’t change your code on the structural or architectural level.

On the other hand, frameworks also give you a set of functions/modules/APIs but it does change your code on the structural or architectural level. Library - you call it, Framework - it calls you.

===
Cookies-
A cookie contains specific information that is encrypted for security purposes.
Normally, a cookie is attached with an HTTP header from the HTTP server to a Web browser in response to a user request.
 This stored cookie is sent to the HTTP server whenever access to a specific website is required.

Cookies are managed in two patterns: with expiry date and without expiry date. Cookies without expiry dates are automatically stored in users’ machines and remain inside the system’s memory until the user’s browsing terminates.

 Cookies with an expiry date expire when that date is surpassed.
The following are the types/variations of cookies:

Session Cookies: Created for a specific session, these expire upon the termination of the user’s browser session.
 Persistent Cookies:
 Normally known as tracking cookies, these cookies have a specific time period before they expire.
====
to check the given array is array or not-
if(Object.prototype.toString.call(arrayList) === '[object Array]') {
  console.log('Array!');
}
for modern browser
Array.isArray(arrayList);
==

DOM
The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

===

Object.freeze()
The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42
==
Q22: How would you check if a number is an integer?
 		 	Junior
A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1.
function isInt(num) {
  return num % 1 === 0;
}

Q25: What language constructions do you use for iterating over object properties and array items? 	
Add to PDF/md	 		 	Junior
For objects:

for loops - for (var property in obj) { console.log(property); }. However, this will also iterate through its inherited properties, and you will add an obj.hasOwnProperty(property) check before using it.
Object.keys() - Object.keys(obj).forEach(function (property) { ... }). Object.keys() is a static method that will lists all enumerable properties of the object that you pass it.
Object.getOwnPropertyNames() - Object.getOwnPropertyNames(obj).forEach(function (property) { ... }). Object.getOwnPropertyNames() is a static method that will lists all enumerable and non-enumerable properties of the object that you pass it.
For arrays:

for loops - for (var i = 0; i < arr.length; i++). The common pitfall here is that var is in the function scope and not the block scope and most of the time you would want block scoped iterator variable. ES2015 introduces let which has block scope and it is recommended to use that instead. So this becomes: for (let i = 0; i < arr.length; i++).
forEach - arr.forEach(function (el, index) { ... }). This construct can be more convenient at times because you do not have to use the index if all you need is the array elements. There are also the every and some methods which will allow you to terminate the iteration early.
Most of the time, I would prefer the .forEach method, but it really depends on what you are trying to do. for loops allow more flexibility, such as prematurely terminate the loop using break or incrementing the iterator more than once per loop.

==
Q27: Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it? 	
Add to PDF/md	 		 	Junior
Every script has access to the global scope, and if everyone uses the global namespace to define their variables, collisions will likely occur. Use the module pattern (IIFEs) to encapsulate your variables within a local namespace.
==
Load vs DOMContentLoaded
Q28: Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those? 	
Add to PDF/md	 		 	Junior
The load event fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading.

The DOM event DOMContentLoaded will fire after the DOM for the page has been constructed, but do not wait for other resources to finish loading. This is preferred in certain cases when you do not need the full page to be loaded before initializing.

==
31: Explain the same-origin policy with regards to JavaScript. 	
Add to PDF/md	 		 	Junior
The same-origin policy prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model.

==
What's the difference between host objects and native objects? 	
Add to PDF/md	 		 	Junior
Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc.
Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.
==
Is there anyway to force using strict mode in Node.js? 	
Add to PDF/md	 		 	Junior
you can place

"use strict";
at the top of your file in node >= 0.10.7, but if you want your whole app to run in strict (including external modules) you can do this

node --use_strict
==
transpilation in js

Compiler: is an umbrella term to describe a program that takes source code written in one language and produce a (or many) output file in some other language. In practice we mostly use this term to describe a compiler such as gcc which takes in C code as input and produces a binary executable (machine code) as output.

Transpilers are also known as source-to-source compilers. So in essence they are a subset of compilers which take in a source code file and convert it to another source code file in some other language or a different version of the same language. The ouput is generally understandable by a human. This output still has to go through a compiler or interpreter to be able to run on the machine.

Some examples of transpilers:

Emscripten: Transpiles C/C++ to JavaScript
Babel: Transpiles ES6+ code to ES5 (ES6 and ES5 are different versions or generations of the JavaScript language)
===


The Object.is() method determines whether two values are the same value.
==
compare two objects

JSON.stringify(obj1) === JSON.stringify(obj2)

var abc = function(a, b) {
for (var p in a) {
if(a.hasOwnProperty(p)) {
if(a.p !== b.p) {
return false;
}
}

}
for (var p in b) {
if(b.hasOwnProperty(p)) {
if(a.p !== b.p) {
return false;
}
}

}
return true;
};
===========
named vs anonymous function

named fun are hoisted
Named functions are also easier to reuse. In both ways (declaration and expression) when a function is named it makes it easier for us to consume it again for similar use cases.

anonymous function
One of the more famous use cases for anonymous functions are Immediately Invokable Function Expressions (IIFE). IIFE, for short, is a pattern that uses an anonymous function which immediately creates and invokes the contents of the function.

The benefit of doing so is that you could use the function name in recursive situations as well as having the function name in your call stack for easier debugging.

ES6 arrow functions are also known as lambda expressions. In Javascript, not all lambdas are anonymous, and not all anonymous functions are lambdas. Lambda functions are quite similar to anonymous functions but what truly makes them different is that lambda functions are functions used as data.

Arrow functions are best suited for non-method functions, and they cannot be used as constructors.
==
purpose of symbols-
Symbols are a new, special kind of object that can be used as a unique property name in objects. Using Symbol instead of string's allows different modules to create properties that don't conflict with one another. Symbols can also be made private, so that their properties can't be accessed by anyone who doesn't already have direct access to the Symbol.

Symbols are a new primitive. Just like the number, string, and boolean primitives, Symbol have a function which can be used to create them. Unlike the other primitives, Symbols do not have a literal syntax (e.g how string have '') - the only way to create them is with the Symbol constructor in the following way:


Symbols can be used as Object keys
Symbols can be used as a unique value.

===
Currying
Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.

Currying helps you to avoid passing the same variable again and again.
It helps to create a higher order function. It extremely helpful in event handling. See the blog post for more information.
Little pieces can be configured and reused with ease.

add(1)(2)(3);

====
higher order function
A higher-order function is a function that can take another function as an argument, or that returns a function as a result.

First Class Functions
You may have heard it said that JavaScript treats functions as first-class citizens. What this means is that functions in JavaScript are treated as objects. They have the type Object, they can be assigned as the value of a variable, and they can be passed and returned just like any other reference variable.

This native ability gives JavaScript special powers when it comes to functional programming. Because functions are objects, the language supports a very natural approach to functional programming. In fact, it’s so natural, that I’ll bet you’ve been using it without even thinking about it.

Taking Functions as Arguments
If you’ve done much web-based JavaScript programming or front-end development, you’ve probably come across functions that use a callback. A callback is a function that gets executed at the end of an operation, once all of the other operations of been completed. Usually this callback function is passed in as the last argument in the function. Frequently, it’s defined inline as an anonymous function.
====
 What are the differences between ES6 class and ES5 function constructors?

https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e



object type in js-
The object type refers to a compound value where you can set properties (named locations) that each hold their own values of any type.

Bracket notation is also useful if you want to access a property/key but the name is stored in another variable, such as:
==
what is coersion in js-
== is the abstract equality operator while === is the strict equality operator.

*** https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/

Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion. To recall, primitives are: number, string, boolean, null, undefined + Symbol (added in ES6).

Implicit vs. explicit coercion

Type coercion can be explicit and implicit.

When a developer expresses the intention to convert between types by writing the appropriate code, like Number(value), it’s called explicit type coercion (or type casting).

Since JavaScript is a weakly-typed language, values can also be converted between different types automatically, and it is called implicit type coercion. It usually happens when you apply operators to values of different types, like

String conversion
String(123) // explicit
123 + ''    // implicit
Boolean conversion

To explicitly convert a value to a boolean apply the Boolean() function.
Implicit conversion happens in logical context, or is triggered by logical operators ( || && !) .
Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
=======
The simplest case is boolean conversion: any non-primitive value is always
coerced to true, no matter if an object or an array is empty or not.
Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function() {})  // true

Numeric conversion

For an explicit conversion just apply the Number() function, same as you did with Boolean() and String() .

Number('123')   // explicit
+'123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5/null          // implicit
true | 0        // implicit


js operators-
comparison operators (>, <, <=,>=)
bitwise operators ( | & ^ ~)
arithmetic operators (- + * / % ). Note, that binary+ does not trigger numeric conversion, when any operand is a string.
unary + operator
loose equality operator == (incl. !=).
Note that == does not trigger numeric conversion when both operands are strings.

unary opertaors-
https://scotch.io/tutorials/javascript-unary-operators-simple-and-useful
==
Objects are converted to primitives via the internal [[ToPrimitive]] method, which is responsible for both numeric and string conversion.

Here is a pseudo implementation of [[ToPrimitive]] method:

[[ToPrimitive]] is passed with an input value and preferred type of conversion: Number or String. preferredType is optional.

Both numeric and string conversion make use of two methods of the input object: valueOf and toString . Both methods are declared on Object.prototype and thus available for any derived types, such as Date, Array, etc.

In general the algorithm is as follows:

    If input is already a primitive, do nothing and return it.

2. Call input.toString(), if the result is primitive, return it.

3. Call input.valueOf(), if the result is primitive, return it.

4. If neither input.toString() nor input.valueOf() yields primitive, throw TypeError.

Numeric conversion first calls valueOf (3) with a fallback to toString (2). String conversion does the opposite: toString (2) followed by valueOf (3).

Most built-in types do not have valueOf, or have valueOf returning this object itself, so it’s ignored because it’s not a primitive. That’s why numeric and string conversion might work the same — both end up calling toString().

Different operators can trigger either numeric or string conversion with a help of preferredType parameter. But there are two exceptions: loose equality == and binary + operators trigger default conversion modes (preferredType is not specified, or equals to default). In this case, most built-in types assume numeric conversion as a default, except Date that does string conversion.
==
unary operator-
A unary operator is one that takes a single operand/argument and performs an operation.
A unary operation is an operation with only one operand. This operand comes either before or after the operator. Unary operators are more efficient than standard JavaScript function calls. Additionally, unary operators can not be overridden, therefore their functionality is guaranteed.
Operator	Explanation

Unary plus (+)	Tries to convert the operand into a number

Unary negation (-) *	Tries to convert the operand into a number and negates after
Logical Not (!)	Converts to boolean value then negates it
Increment (++)	Adds one to its operand
Postfix : - meaning the operator comes after the operand(y++). This returns the value before incrementing.
Prefix: - the operator comes before the operand (++y). Using it as a prefix, returns the value after incrementing.

Decrement (--)	Decrements by one from its operand
Bitwise not (~)	Inverts all the bits in the operand and returns a number
typeof	Returns a string which is the type of the operand
delete	Deletes specific index of an array or specific property of an object
void	Discards a return value of an expression. *

#diff betwn promises and callbacks
The main difference between callbacks and promises is that with callbacks you tell the executing function what to do when the asynchronous task completes, whereas with promises the executing function returns a special object to you (the promise) and then you tell the promise what to do when the asynchronous task completes.

So, in other words, an async function is itself an asynchronous task (that typically manages the execution of other asynchronous tasks).
In fact, the main innovation of async/await is to allow to write asynchronous code with promises that “looks like” synchronous code


43. XMLHttpRequest
Use XMLHttpRequest (XHR) objects to interact with servers.
 You can retrieve data from a URL without having to do a full page refresh.
  This enables a Web page to update just part of a page without disrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming.
Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.

If your communication needs to involve receiving event data or message data from a server, consider using server-sent events through the EventSource interface. For full-duplex communication, WebSockets may be a better choice.
Asynchronous JavaScript + XML, while not a technology in itself, is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together, including HTML or XHTML, Cascading Style Sheets, JavaScript, The Document Object Model, XML, XSLT, and most importantly the XMLHttpRequest object.

44. AJAX
AJAX stands for Asynchronous JavaScript and XML.
 AJAX is a new technique for creating better, faster, and more interactive web applications with the help of XML, HTML, CSS, and Java Script.

Ajax uses XHTML for content, CSS for presentation, along with Document Object Model and JavaScript for dynamic content display.
AJAX is a web browser technology independent of web server software.

A user can continue to use the application while the client program requests information from the server in the background.


45. XML is commonly used as the format for receiving server data, although any format, including plain text, can be used.

XML
XML is a software- and hardware-independent tool for storing and transporting data.
XML stands for eXtensible Markup Language
XML is a markup language much like HTML
XML was designed to store and transport data
XML was designed to be self-descriptive
XML is a W3C Recommendation

XML Does Not DO Anything
Maybe it is a little hard to understand, but XML does not DO anything.

This note is a note to Tove from Jani, stored as XML:

<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>

The XML above is quite self-descriptive:

It has sender information.
It has receiver information
It has a heading
It has a message body.
But still, the XML above does not DO anything. XML is just information wrapped in tags.

XML and HTML were designed with different goals:

XML was designed to carry data - with focus on what data is
HTML was designed to display data - with focus on how data looks
XML tags are not predefined like HTML tags are

XML Does Not Use Predefined Tags
The XML language has no predefined tags.

The tags in the example above (like <to> and <from>) are not defined in any XML standard. These tags are "invented" by the author of the XML document.

HTML works with predefined tags like <p>, <h1>, <table>, etc.

With XML, the author must define both the tags and the document structure.

It simplifies data sharing
It simplifies data transport
It simplifies platform changes
It simplifies data availability

W3C Recommendation

46. JSON
JavaScript Object Notation (JSON)is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value).
It is a very common data format used for asynchronous browser–server communication, including as a replacement for XML in some AJAX-style systems.
JSON is a language-independent data format. It was derived from JavaScript, but as of 2017, many programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.
Data types and syntax
JSON's basic data types are:

Number:
String:  .
Boolean:
Array:
Object:
null:

47. Objects
objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.

An object, is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.

48. class
In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).
When an object is created by a constructor of the class, the resulting object is called an instance of the class, and the member variables specific to the object are called instance variables, to contrast with the class variables shared across the class.
A JavaScript class is a type of function. Classes are declared with the class keyword. We will use function expression syntax to initialize a function and class expression syntax to initialize a class

class mailer {
  constructor(name) {
    this.scheduler = {
      name: name,
      startTime: moment().tz('Asia/Kolkata').format()
    };
  }



  49. Data Types in js

  Seven data types that are primitives:
primitive-
Boolean
Null
Undefined
Number
BigInt
String
Symbol

Object
 A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below).
 Symbols are called atoms. For more details see Symbol and the Symbol object wrapper in JavaScript.

 bigInt-

 In JavaScript, BigInt is a numeric data type that can represent integers in the arbitrary precision format.

  module.exports = mailer

  typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


50. Call by Value v.s Call by Reference in Js

The concepts “called by value” and “called by reference” refers to the way you pass an argument to a function.

Call by value
Javascript passes by value the primitive data types which are: Boolean, null, undefined, String and Number.
If you pass the argument by value it will make a new copy of variable inside the function, without affection the original variable.


Call by reference
Javascript passes by reference the object data types which are: Array, Function, and Object.
If you pass the argument by reference the change will be produced not only inside the function, but it will also affect the original variable.
When you pass an object you are calling by reference


51. Ec6 features-

1. Symbols

Symbols enable access control for object state.
Symbols allow properties to be keyed by either string (as in ES5) or symbol. Symbols are a new primitive type.
The Symbol() function returns a value of type symbol  which is is unique,
is incomplete as a constructor because it does not support the syntax "new Symbol()".
A symbol value may be used as an identifier for object properties; this is the data type's only purpose.
Every symbol value returned from Symbol() .  A symbol value may be used as an identifier for object properties; this is the data type's only purpose.+


2. proxy
Proxies
Proxies enable creation of objects with the full range of behaviors available to host objects. Can be used for interception, object virtualization, logging/profiling, etc.

3. Map
Map is a collection of keyed data items, just like an Object.
But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
var a = new Map(); a.set('snc', "sdsds");console.log(a);

VM184:1 Map(1) {"snc" => "sdsds"}

 has static properties that expose several members of built-in objects, has static methods that expose the global symbol registry, and resembles a built-in object class but is incomplete as a constructor because it does not support the syntax "new Symbol()".  


Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

converting array into objects-
var b = {}; var c  = Object.assign({}, [{id : 1, name: "vbv"}, {id : 2, name : "sdsd"}]);+
console.log(c);
VM542:1 {0: {…}, 1: {…}}0: {id: 1, name: "vbv"}1: {id: 2, name: "sdsd"}__proto__: Object

converting objects into array-
var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var result = Object.keys(obj).map(function(key) {
  return [Number(key), obj[key]];
});

4. Set
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
Iteration over Set
We can loop over a set either
with for..of or using forEach:


* WeakMap
WeakSet is a special kind of Set that does not prevent JavaScript from removing its items from memory. WeakMap is the same thing for Map.
The first difference from Map is that WeakMap keys must be objects, not primitive values:

let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null;
// john is removed from memory!

let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null;
WeakMap has only the following methods:

weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)


If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is the right choice!


WeakSet
WeakSet behaves similarly:

It is analogous to Set, but we may only add objects to WeakSet (not primitives).
An object exists in the set while it is reachable from somewhere else.
Like Set, it supports add, has and delete, but not size, keys() and no iterations.
Being “weak”, it also serves as an additional storage. But not for an arbitrary data, but rather for “yes/no” facts. A membership in WeakSet may mean something about the object.

For instance, we can use WeakSet to keep track of users that visited our site:  
WeakMap and WeakSet are used as “secondary” data structures in addition to the “main” object storage. Once the object is removed from the main storage, if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.

Asynchronous Module Definition(AMD)
The problem with CommonJs style module definition is that it is synchronous.
When you call ‘var add=require(‘add’);’, the system will be on

ES6 uses ‘import’ and ‘export’ keywords to import and export modules. Here’s the example application written in ES6 modules.


Webpack
Webpack is a module bundler. Just like Browserify, it traverses dependency tree and bundles up into a single or more files.
 Webpack can handle CommonJS, AMD and ES6 modules. And Webpack comes with more flexibility and cool features like:

Code Split: When you have multiple apps sharing same modules. Webpack can bundle your code into two or more files. For example, if you have two apps, app1 and app2, and both shares many modules. With Browserify, you would have app1.js and app2.js. And both contain all the dependency modules. But with Webpack, you can create app1.js, app2.js, and shared-lib.js. Yes, you will have to load 2 files from html page. But with hashed filename, browser cache and CDN, it can reduce initial loading time.

Loader: With custom loaders, you can load any file into your source. You can use ‘reuiqre()’ syntax to load not just JavaScript files, but also css, CoffeeScript, Sass, Less, HTML for template, images, etc.

Plugin: Webpack plugins manipulate your bundles before it is written into files. There are many community built plugins. For example, there are bundle for adding banners to bundled code, adding source map and splitting a bundle into chunks, and more.
WebpackDevServer is development server that automatically bundles your source code and refresh browser whenever source code changes detected. It will expedite your development process by providing instant feedback of your code.


Genretaor :
A generator is a function that can stop midway and then continue from where it stopped.
In short, a generator appears to be a function but it behaves like an iterator.
Generators are a special class of functions that simplify the task of writing iterators.
A generator is a function that produces a sequence of results instead of a single value, i.e you generate ​a series of values.

function * generatorFunction() { // Line 1
  console.log('This will be executed first.');
  yield 'Hello, ';   // Line 2
  console.log('I will be printed after the pause');  
  yield 'World!';
}
const generatorObject = generatorFunction(); // Line 3
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // Line 6
// This will be executed first.
// Hello,
// I will be printed after the pause
// World!
// undefined

Uses of Generators
Implementing Iterables
When you implement an iterator, you have to manually make an iterator object with a next() method. Also, you have to manually save the state.

Better Async functionality
Infinite Data Streams
It’s possible to create generators that never end. Consider this example —
Generators as observers
Generators can also receive values using the next(val) function. Then the generator is called an observer since it wakes up when it receives new values. In a sense, it keeps observing for values and acts when it gets one. You can read more about this pattern here.


IIFE
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

The second part creates the immediately executing function expression () through which the JavaScript engine will directly interpret the function.

An Immediately Invoked Function Expression is a good way at protecting the scope of your function and the variables within it.
Assigning the IIFE to a variable stores the function's return value, not the function definition itself.

var result = (function () {
    var name = "Barry";
    return name;
})();

This pattern is often used when trying to avoid polluting the global namespace, because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.


To intercept HTTP requests, use the webRequest API. This API enables you to add listeners for various stages of making an HTTP request. In the listeners, you can:

get access to request headers and bodies, and response headers
cancel and redirect requests
modify request and response headers

Creating Librairies

Interceptors
Interceptors have access to response/request before and after the route handler is called.

Middleware
Middleware is called only before the route handler is called. You have access to the response object, but you don't have the result of the route handler. They are basically express middleware functions.

Exception Filters
Exception Filters are called after the route handler and after the interceptors. They are the last place to make changes before a response goes out.

Service workers
Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.

Service worker concepts and usageSection
A service worker is an event-driven worker registered against an origin and a path.
It takes the form of a JavaScript file that can control the web-page/site that it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion to give you complete control over how your app behaves in certain situations (the most obvious one being when the network is not available).

Service workers only run over HTTPS, for security reasons.
Uses-
Background data synchronization.
Responding to resource requests from other origins.
Receiving centralized updates to expensive-to-calculate data such as geolocation or gyroscope, so multiple pages can make use of one set of data.
Client-side compiling and dependency management of CoffeeScript, less, CJS/AMD modules, etc. for development purposes.
Hooks for background services.
Custom templating based on certain URL patterns.
Performance enhancements, for example pre-fetching resources that the user is likely to need in the near future, such as the next few pictures in a photo album.


Arrow Functions-
Arrow functions make our code more concise, and simplify function scoping and the this keyword.
By using arrow functions, we avoid having to type the function keyword, return keyword (it’s implicit in arrow functions), and curly brackets.
Arrow functions do not have their own arguments object.
Arrow functions do not have a prototype property.
Arrow function expressions are ill suited as methods, and they cannot be used as constructors.
he methods call(), apply(), and bind() will not change the value of this in arrow functions. (In fact, the value of this inside a function simply can’t be changed; it will be the same value as when the function was called.);
ES6 arrow functions can’t be bound to a this keyword, so it will lexically go up a scope, and use the value of this in the scope in which it was defined.

Two factors influenced the introduction of arrow functions: the need for shorter functions and the behavior of the this keyword.
Before arrow functions, every new function defined its own this value based on how the function was called:

A new object in the case of a constructor.
undefined in strict mode function calls.
The base object if the function was called as an "object method".

When you should use them
Arrow functions shine best with anything that requires this to be bound to the context, and not the function itself.

Despite the fact that they are anonymous, I also like using them with methods such as map and reduce, because I think it makes my code more readable. To me, the pros outweigh the cons.

When you should not use Arrow Functions
Object methods

2. Callback functions with dynamic context
3. When it makes your code less readable

function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this`
    // as the global object (because it's where growUp() is executed.),
    // which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();

function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `that` variable of which
    // the value is the expected object.
    that.age++;
  }, 1000);
}

function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the Person object
  }, 1000);
}

var p = new Person();




Object destructuring-
The destructuring assignment syntax is a JavaScript expression that makes it possible to
 unpack values from arrays, or properties from objects, into distinct variables.
The object and array literal expressions provide an easy way to create ad hoc packages of data.
A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:

we can use alias and default value for property using
var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

var {name: foo, job: bar} = person;
===
var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

var {name = "myName", friend = "Annie"} = person;

console.log(name);//"Sarah"
console.log(friend);//"Annie"
Two variables values can be swapped in one destructuring expression.
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1


JavaScript Object Literal

A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.
Object literals encapsulate data, enclosing it in a tidy package.
This minimizes the use of global variables which can cause problems when combining code.
Object Literal Syntax
Object literals are defined using the following syntax rules:

A colon separates property name[1] from value.
A comma separates each name-value pair from the next.
There should be no comma after the last name-value pair.[2]

No need to invoke constructors directly or maintain the correct order of arguments passed to functions. Object literals are also useful for unobtrusive event handling; they can hold the data that would otherwise be passed in function calls from HTML event handler attributes.


Template literals
Template literals are string literals allowing embedded expressions.
You can use multi-line strings and string interpolation features with them.
Template literals are enclosed by the back-tick (` `)  character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).
The expressions in the placeholders and the text between the back-ticks (` `) get passed to a function. The default function just concatenates the parts into a single string.

hey are unique because they provide a lot of features that normal strings built with quotes do not, in particular:

they offer a great syntax to define multiline strings
they provide an easy way to interpolate variables and expressions in strings
they allow you to create DSLs with template tags (DSL means domain specific language, and it’s for example used in React by Styled Components, to define CSS for a component)

Expression interpolation
In order to embed expressions within normal strings,
console.log('Fifteen is ' + (a + b) + ' and \n not ' + (2 * a + b) + '.');

console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

In order to embed expressions within normal strings,

Tagged templates

A more advanced form of template literals are tagged templates.
 Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.
 In the end, your function can return your manipulated string (or it can return something completely different as described in the next example).
 The name of the function used for the tag can be whatever you want.


Object.assign==


Object.assign() Method
Among the Object constructor methods, there is a method Object.assign() which is used to copy the values and properties from one or more source objects to a target object.
It invokes getters and setters since it uses both [[Get]] method on the source and [[Set]] on the target. It returns the target object which has properties and values copied from the source object.
Object.assign() does not throw on null or undefined source values.
Applications:

Object.assign() is used for cloning an object.
Object.assign() is used to merge object with same properties.


For Of  vs For in
Both for..of and for..in statements iterate over lists; the values iterated on are different though, for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the numeric properties of the object being iterated.

Another distinction is that for..in operates on any object; it serves as a way to inspect properties on this object.
for..of on the other hand, is mainly interested in values of iterable objects.
 Built-in objects like Map and Set implement Symbol.iterator property allowing access to stored values.
for of-
You can also iterate over maps, sets, generators, DOM node collections and the arguments object available inside a functions.+


ForEach vs map

Let’s first take a look at the definitions on MDN:
forEach() — executes a provided function once for each array element.
map() — creates a new array with the results of calling a provided function on every element in the calling array.

Well, the forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.
Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.

ForEach muteate the array where map not.

hy forEach? Ease of Use and Readability.
To me, the most compelling case for using .forEach() in favor of a for loop is that it’s easier. Even though it’s the same number of lines, there’s less setup. With a regular for loop you have three steps:

When using the .forEach() you pass an individual function with it’s own scope. In a for loop you’re polluting whatever scope you place the loop in. Most, if not all, of the time, this is a bad thing.

.forEach() is great you need to execute a function for each individual element in an array. Good practice is that you should use .forEach() when you can’t use other array methods to accomplish your goal. I know this may sound vague, but .forEach() is a generic tool… only use it when you can’t use a more specialized tool.

When to use map?
.map() when you want to transform elements in an array.
When to use filter?
.filter() when you want to select a subset of multiple elements from an array.
When to use find?
.find() When you want to select a single element from an array.
When to use reduce?
.reduce() when you want derive a single value from multiple elements in an array.

Now lets talk about the difference between those methods First of all ,all of them can be used to
check if the DOM is fully loaded and ready to be manipulated by your JavaScript code .

Secondly , $(document).ready() and $(window).load() are jQuery methods and not pure JavaScript methods so to use them you need to include jQuery library .But window.onload is a pure JavaScript method that you can use without any external libraries

Thirdly ,the most important difference is that

$(document).ready() uses either the modern browser API event DOMContentLoaded to check if your dom is ready or readyState document variable in older browsers which makes it the best candidate if you need to check if your DOM is fully loaded and ready .On the contrary $(window).load() and window.onload are created to check if the page and its resources are loaded ,resources are images ,texts,css styles and stylesheets and JavaScript files so if you just want to check if the DOM is ready it may be slower than $(document).ready() .

The ready event occurs after the HTML document has been loaded, while the onload event occurs later, when all content (e.g. images) also has been loaded.

The onload event is a standard event in the DOM, while the ready event is specific to jQuery. The purpose of the ready event is that it should occur as early as possible after the document has loaded, so that code that adds functionality to the elements in the page doesn't have to wait for all content to load.

MEta tags
Metadata is data (information) about data.

The <meta> tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable.

Meta elements are typically used to specify page description, keywords, author of the document, last modified, and other metadata.

The metadata can be used by browsers (how to display content or reload page), search engines (keywords), or other web services.

HTML5 introduced a method to let web designers take control over the viewport (the user's visible area of a web page), through the <meta> tag (See "Setting The Viewport" example below).





Strict mode in JavaScript
- Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context.
 - This strict context prevents certain actions from being taken and throws more exceptions.
  - The statement “use strict”; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.
- Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
- Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations:
 - strict mode code can sometimes be made to run faster than identical code that’s not strict mode.

Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object)
It disables features that are confusing or poorly thought out.
Strict mode makes it easier to write “secure” JavaScript.
Also note you can apply "strict mode" to the whole file... Or you can use it only for a specific
function



typeof null === object why-
 In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value.

This is a bug and one that unfortunately can’t be fixed, because it would break existing code. Let’s explore the history of this bug.

function as type of function why---
why function has a type function not objects
You can logically think of Function as a subclass of Object. It has all the methods of Object plus some more that are specific to a function (such as .bind(), .call(), .apply(), etc...).

It is extremely useful that Function does report its own type so you can easily check if a property is callable as a function and perhaps that is the main reason why it was done this way.

why typeof NaN is number
The type of NaN, which stands for Not a Number is, surprisingly, a number. The reason for this is, in computing, NaN is actually technically a numeric data type. However, it is a numeric data type whose value cannot be represented using actual numbers.

...constant cannot change through re-assignment
...constant cannot be re-declared

When you're adding to an array or object you're not re-assigning or re-declaring the constant, it's already declared and assigned, you're just adding to the "list" that the constant points to.

Modern web development has many repetitive tasks like running a local server, minifying code, optimizing images, preprocessing CSS and more. This text discusses gulp, a build tool for automating these tasks.

Gulp
Modern web development has many repetitive tasks like running a local server, minifying code, optimizing images, preprocessing CSS and more. This text discusses gulp, a build tool for automating these tasks.
Gulp is a cross-platform, streaming task runner that lets developers automate many development tasks. At a high level, gulp reads files as streams and pipes the streams to different tasks.
These tasks are code-based and use plugins.
The tasks modify the files, building source files into production files.


for any changes and then perform some kind actions on it for eg. assume you change the styles.css or script.js files which are used for development purpose and later you want to push it for production then you need to minify it manually, instead of you minifying it gulp does it for you.

- Compile Sass, LESS files for you

- Combining multiple js/css files into single file respectively

- Converting SVG icons to fonts

- Live browser reload

Gulp uses plugins to automate the task and these plugins can be installed and managed by using Node Package Manager (​npm​)
gulp-nodemon  gulp-eslint

npm install --global gulp-cli
Gulp and Node rely on plugins (packages) for the majority of their functionality. Node plugins can be installed with the
following command line command:

npm install pluginName --save-dev

npm install gulp --save-dev

var gulp = require('gulp');
gulp.task('hello', function() {
  console.log('Hello, World!');
});
// Include plugins
var gulp = require('gulp'); // Required
var pluginA = require('pluginA');
var pluginB = require('pluginB');
var pluginC = require('pluginC');

// Define tasks
gulp.task('task-A', function() {
  gulp.src('some-source-files')
  .pipe(pluginA())
  .pipe(gulp.dest('some-destination'));
});

gulp.task('uglify', function() {
  gulp.src(`/**/*.js` )
  .pipe(uglify())
  .pipe(gulp.dest('build'));
});
+Gulp is a build system for automating tasks. The following is few listing which can be achieved with the help of gulpjs

- Minification (Compress/Uglyfy)

your js, css, image files for faster loading of websites and web applications

- Watch files


instanceof

The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.


Event bubbling and capturing and event delegation

event delegation

Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

I often use listening to all clicks in the document as an example, but it can be any element on the page.

For example, if you wanted to detect any time any field changed in value inside a specific form, you could do this:
var form = document.querySelector('#hogwarts-application');

// Listen for changes to fields inside the form
form.addEventListener('input', function (event) {

	// Log the field that was changed
	console.log(event.target);

}, false);


Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event.

With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

With capturing, the event is first captured by the outermost element and propagated to the inner elements.

By default javascript is set the event propagation to Bubble . If we want to use capture we have to set the 3rd argument in the addEventListener function to true.

The capturing phase is used very rarely, usually we handle events on bubbling. And there’s a logic behind that.

In real world, when an accident happens, local authorities react first. They know best the area where it happened. Then higher-level authorities if needed.

to stop bubbling
The method for it is event.stopPropagation().
* bubbling
document.querySelector('.box-1').addEventListener('click', e => {
    console.log('Box-1 is clicked');
});

* capturing

document.querySelector('.box-1').addEventListener('click', e => {
    console.log('Box-1 is clicked');
}, true);



how browser works

Browser has following main components
1. The User Interface:
2. Browser Engine
3. Render Engine
4. Networking layer
5. javascript enterpreter /
6. ui backend

the first step  starts with the The network layer.
Network layer Accepts URLs from the browser user interface and is responsible for making network calls to fetch resources via HTTP/FTP protocols.
The browser initially looks for any cache availability on local memory for requested URLs. Otherwise, the network layer creates an HTTP packet with a domain name for requesting a web resource over the internet.

This step involves accepting data from the network layer and feed the display subsystems. Render engine, JS engine and UI backend subsystems are part of the process.
The rendering engine subsystem processes data from the network layer and displays web content on the screen.

With rendering engines, web resources are parsed. For example, a HTML parser converts a HTML template into an object called the DOM tree.
Stylesheets are parsed to generate style rules for both external and inline style elements
A render tree is an object that combines both the parsed HTML and CSS. It is generated with visual instructions and attributes to render elements on the user’s screen.
Once the render tree is constructed, it undergoes layout and painting processes, and displays the output on the screen.
The layout process includes calculating dimensions and exact coordinates where each element should appear on the viewport.

The painting process includes filing the layout with style attributes like color, background and other CSS properties.

User Interface and Browser Engine are responsible for data presentation and handling user navigation.

The JavaScript engine
This is the subsystem for parsing JavaScript code to machine code and then executing it. These JS engines can be standard interpreters or JIT (just in time) compilers.

Browser Engine vs Render Engine
The Browser Engine: The browser engine works as a bridge between the User interface and the rendering engine. According to the inputs from various user interfaces, it queries and manipulates the rendering engine.
The Rendering Engine: The rendering engine, as the name suggests is responsible for rendering the requested web page on the browser screen. The rendering engine interprets the HTML, XML documents and images that are formatted using CSS and generates the layout that is displayed in the User Interface. However, using plugins or extensions, it can display other types data also. Different browsers user different rendering


Browser Storages

Indexdb
IndexedDB is a built-in database, much more powerful than localStorage.

Key/value storage: value can be (almost) anything, multiple key types.
Supports transactions for reliability.
Supports key range queries, indexes.
Can store much more data than localStorage.

That power is usually excessive for traditional client-server apps. IndexedDB is intended for offline apps, to be combined with ServiceWorkers and other technologies.

let openRequest = indexedDB.open(name, version);
let db = openRequest.result;

To store stomething in IndexedDB, we need an object store.

An object store is a core concept of IndexedDB.

db.createObjectStore(name[, keyOptions]);


webapps
Web apps, on the other hand, are accessed via the internet browser and will adapt to whichever device you’re viewing them on. They are not native to a particular system, and don’t need to be downloaded or installed. Due to their responsive nature, they do indeed look and function a lot like mobile apps — and this is where the confusion arises.

Mobile apps have the advantage of being faster and more efficient, but they do require the user to regularly download updates. Web apps will update themselves.

 While standard web apps lack some of the functionality that mobile apps can offer, progressive web apps fall somewhere in between.

 Reliable

 When launched from the user’s home screen, service workers enable a Progressive Web App to load instantly, regardless of the network state.

 A service worker, written in JavaScript, is like a client-side proxy and puts you in control of the cache and how to respond to resource requests. By pre-caching key resources you can eliminate the dependence on the network, ensuring an instant and reliable experience for your users.

 Fast

 Progressive Web Apps are installable and live on the user's home screen, without the need for an app store. They offer an immersive full screen experience with help from a web app manifest file and can even re-engage users with web push notifications.

 What is SQL Injection (SQLi) and How to Prevent It
SQL Injection (SQLi) is a type of an injection attack that makes it possible to execute malicious SQL statements. These statements control a database server behind a web application. Attackers can use SQL Injection vulnerabilities to bypass application security measures. They can go around authentication and authorization of a web page or web application and retrieve the content of the entire SQL database. They can also use SQL Injection to add, modify, and delete records in the database.

HTTP VS HTTPS

What is HTTP?#
HTTP stands for Hypertext Transfer Protocol. When you enter HTTP:// in your address bar in front of the domain, it tells the browser to connect over HTTP.
HTTP uses TCP (Transmission Control Protocol), generally over port 80, to send and receive data packets over the web. To put it simply it is a protocol that’s used by a client and server which allows you to communicate with other websites. The client sends a request message to a HTTP server (after the TCP handshake) which hosts a website, the server then replies with the response message. The response message contains completion status information, such as “HTTP/1.1 200 OK”.

What is HTTPS?#
HTTPS stands for Hypertext Transfer Protocol Secure (also referred to as HTTP over TLS or HTTP over SSL). When you enter HTTPS:// in your address bar in front of the domain, it tells the browser to connect over HTTPS. Generally sites running over HTTPS w0l have a redirect in place so even if you type in HTTP:// it will redirect to deliver over a secured connection. HTTPS also uses TCP (Transmission Control Protocol) to send and receive data packets, but it does so over port 443, within a connection encrypted by Transport Layer Security (TLS).

diff
HTTP URL in your browser’s address bar is HTTP:// and the HTTPS URL is HTTPS://.
HTTP is unsecured while HTTPS is secured.
HTTP sends data over port 80 while HTTPS uses port 443.
HTTP operates at application layer, while HTTPS operates at transport layer.
No SSL certificates are required for HTTP, with HTTPS it is required that you have an SSL certificate and it is signed by a CA.
HTTP doesn’t require domain validation, where as HTTPS requires at least domain validation and certain certificates even require legal document validation.
No encryption in HTTP, with HTTPS the data is encrypted before sending.


jsonp
Say you're on domain example.com, and you want to make a request to domain example.net. To do so, you need to cross domain boundaries, a no-no in most of browserland.

The one item that bypasses this limitation is <script> tags. When you use a script tag, the domain limitation is ignored, but under normal circumstances, you can't really do anything with the results, the script just gets evaluated.

Enter JSONP. When you make your request to a server that is JSONP enabled, you pass a special parameter that tells the server a little bit about your page. That way, the server is able to nicely wrap up its response in a way that your page can handle.
