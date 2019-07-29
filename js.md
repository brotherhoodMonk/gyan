Redux is a predictable state container for JavaScript applications.
It helps you write applications that behave consistently,
run in different environments (client, server, and native), and are easy to test. 
It does well for applications with few components but as the application grows bigger,
managing states shared across components becomes a chore.

In an app where data is shared among components, it might be confusing to actually
know where a state should live.
Ideally, the data in a component should live in just one component.
So sharing data among sibling components becomes difficult.

The way Redux works is simple. There is a central store that
holds the entire state of the application.
Each component can access
the stored state without having to send down props from one component to another.

There are three building parts:
actions, store and reducers.

Actions in Redux
Simply put, actions are events. They are the only way you can send data from your application to your
Redux store.
The data can be from user interactions, API calls or even form submission.
Actions are sent using store.dispatch() method.

Actions are plain JavaScript objects and they must have a type property
to indicate the type of action to be carried out.
They must also have a payload that contains the information that
should be worked on by the action. Actions are created via an action creator.

Here’s an example of an action that can be carried out during login in an app:

{
  type: "LOGIN",
  payload: {
    username: "foo",
    password: "bar"
  }
}
reducers-
Reducers are pure functions that take the current state of an application,
perform an action and returns a new state. These states are stored as objects and they specify
how the state of an application changes in response to an action sent to the store.

It is based on the reduce function in JavaScript where a single value is gotten
from multiple values after a callback function has carried out.

As pure functions, they do not change the data in the object passed to it or
perform any side effect in the application.
Given the same object, it should always produce the same result.

Store in Redux
The store holds the application state. There is only one store in any Redux application.
You can access the state stored, update the state, and register or unregister
listeners via helper methods.

Redux makes the state predictable.
In Redux, the state is always predictable.
If the same state and action are passed to a reducer,
 the same result is always produced as reducers are pure functions.
 The state is also immutable and is never changed. This makes it possible to implement arduous tasks like infinite undo and redo. It is also possible to implement time travel that is, the ability to move back and forth among the previous states and view the results in real-time.
Maintainability.

Redux is strict about how code should be organized so it makes it easier for someone with knowledge of Redux to understand the structure of any Redux application. This generally makes it easier to maintain.

Debuggable for days.
Redux makes it easy to debug an application. By logging actions and state, it is easy to understand coding errors, network errors and other forms of bugs that might come up during production.

Ease of testing
It is easy to test Redux apps as functions used to change the state of pure functions.
You can persist some of the app’s state to local storage and restore it after a refresh. This can be really nifty.
Redux can also be used for server-side rendering. With it, you can handle the initial render of the app by sending the state of an app to the server along with its response to the server request. The required components are then rendered in HTML and sent to the clients.




props and state

The state of one component will often become the props of a child component.  
For parent-child communication, simply pass props.

Use state to store the data your current page needs in your controller-view.

Use props to pass data & event handlers down to your child components.

Props

are immutable
which lets React do fast reference checks
are used to pass data down from your view-controller
your top level component
have better performance
use this to pass data to child components

State

should be managed in your view-controller
your top level component
is mutable
has worse performance
should not be accessed from child components
pass it down with props instead


Most of your components should simply take some data from props and render it.
 However, sometimes you need to respond to user input,
 a server request or the passage of time. For this you use state.

 ry to keep as many of your components as possible stateless.
 By doing this you'll isolate the state to its most logical place and minimize redundancy,
 making it easier to reason about your application.

A common pattern is to create several stateless components that
just render data, and have a stateful component above them in the hierarchy
that passes its state to its children via props.
 The stateful component encapsulates all of the interaction logic, while the stateless components
take care of rendering data in a declarative way. - https:
//facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#what-components-should-have-state
State should contain data that a component's event handlers may change to trigger a UI update.
In real apps this data tends
 to be very small and JSON-serializable.
 When building a stateful component, think about the minimal possible representation of its state,
 and only store those properties in this.state.
 Inside of render() simply compute any other information you need based on this state.
 You'll find that thinking about and writing applications in this way tends to lead to
 the most correct application, since adding redundant or computed values to state means
  that you need to explicitly keep them in sync rather than rely on React computing them for you.

  ==========
  The main responsibility of a Component is to translate raw data into rich HTML. With that in mind, the props and the state together constitute the raw data that the HTML output derives from.

You could say props + state is the input data for the render() function of a Component, so we need to zoom in and see what each data type represents and where does it come from.


 If a Component needs to alter one of its attributes at some point in time, that attribute should be part of its state, otherwise it should just be a prop for that Component.

 props (short for properties) are a Component's configuration, its options if you may. They are received from above and immutable as far as the Component receiving them is concerned.

A Component cannot change its props, but it is responsible for putting together the props of its child Components.
The state starts with a default value when a Component mounts and then suffers from mutations in time (mostly generated from user events). It's a serializable* representation of one point in time—a snapshot.

A Component manages its own state internally, but—besides setting an initial state—has no business fiddling with the state of its children. You could say the state is private.

* We didn't say props are also serializable because it's pretty common to pass down callback functions through props.

state is optional. Since state increases complexity and reduces predictability, a Component without state is preferable. Even though you clearly can't do without state in an interactive app, you should avoid having too many Stateful Components.

Component types
Stateless Component — Only props, no state. There's not much going on besides the render()
function and all their logic revolves around the props they receive.
This makes them very easy to follow (and test for that matter).
 We sometimes call these dumb-as-f*ck Components (which turns out to be the only way to misuse
   the F-word in the English language).
Stateful Component — Both props and state. We also call these state managers.
They are in charge of client-server communication (XHR, web sockets, etc.),
processing data and responding to user events. These sort of logistics should be encapsulated
in a moderate number of Stateful Components, while all visualization and formatting
logic should move downstream into as many Stateless Components as possible.


Lifecycle-
Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
Updating: Updating is the stage when the state of a component is updated and the application is repainted.
Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

Stateful and stateless components have many different names.

They are also known as:

– Container vs Presentational components

– Smart vs Dumb components
The literal difference is that one has state, and the other doesn’t. That means the stateful components are keeping track of changing data, while stateless components print out what is given to them via props, or they always render the same thing.

Functional Component or Stateless component

Functional component is like pure function in JavaScript.
Functional component is also called as a stateless component.
The functional component only receives props from parent component and return you JSX elements.
The functional component doesn’t play with any lifecycle methods of React and doesn’t play with the component state.

Q12. What is PureComponent? When to use PureComponent over Component?
PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for us. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.
When comparing previous props and state to next, a shallow comparison will check that primitives have the same value (eg, 1 equals 1 or that true equals true) and that the references are the same between more complex javascript values like objects and arrays.
It is good to prefer PureComponent over Component whenever we never mutate our objects.

Q16. What are controlled and uncontrolled components in React?
This relates to stateful DOM components (form elements) and the difference:
A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component “controls” it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a “dumb component”.
A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

18. What is React.cloneElement? And the difference with this.props.children?
React.cloneElement clone and return a new React element using using the passed element as the starting point. The resulting element will have the original element's props with the new props merged in shallowly. New children will replace existing children. key and ref from the original element will be preserved.
React.cloneElement only works if our child is a single React element. For almost everything {this.props.children} is the better solution. Cloning is useful in some more advanced scenarios, where a parent send in an element and the child component needs to change some props on that element or add things like ref for accessing the actual DOM element.

Class component or statefull component

React class component is called as a stateful component.
Stateful component plays with all life cycle methods of React.
This component will modify state.


jsx-
JSX produces React “elements”.
React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.
  It also allows React to show more useful error and warning messages.

  JSX is an Expression Too
After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.


Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

For example, class becomes className in JSX, and tabindex becomes tabIndex.

It is safe to embed user input in JSX:

const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

JSX Represents Objects
Babel compiles JSX down to React.createElement() calls.
========
Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

Let’s say there is a <div> somewhere in your HTML file:

<div id="root"></div>
We call this a “root” DOM node because everything inside it will be managed by React DOM.

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

function Welcome(props) {
return <h1>Hello, {props.name}</h1>;
}

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.


Previously, we only encountered React elements that represent DOM tags:

const element = <div />;
However, elements can also represent user-defined components:

const element = <Welcome name="Sara" />;
When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object “props”.
All React components must act like pure functions with respect to their props.


Note how we pass props to the base constructor:

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
Class components should always call the base constructor with props.

types of error, mdules,
creating object method
classes method public and privates

We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.

The only place where you can assign this.state is the constructor.


Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

To show that all components are truly isolated, we can create an App component that renders three <Clock>s:

preventDefault???????

conditional operator=

if else

Element Variables

Inline If with Logical && Operator
You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element:

Inline If-Else with Conditional Operator

Keys
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

Cookies-
A cookie contains specific information that is encrypted for security purposes. Normally, a cookie is attached with an HTTP header from the HTTP server to a Web browser in response to a user request. This stored cookie is sent to the HTTP server whenever access to a specific website is required.
Cookies are managed in two patterns: with expiry date and without expiry date. Cookies without expiry dates are automatically stored in users’ machines and remain inside the system’s memory until the user’s browsing terminates. Cookies with an expiry date expire when that date is surpassed.
The following are the types/variations of cookies:
Session Cookies: Created for a specific session, these expire upon the termination of the user’s browser session.
 Persistent Cookies:
 Normally known as tracking cookies, these cookies have a specific time period before they expire.

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
var b = {}; var c  = Object.assign({}, [{id : 1, name: "vbv"}, {id : 2, name : "sdsd"}]);console.log(c);
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

Now lets talk about the difference between those methods First of all ,all of them can be used to check if the DOM is fully loaded and ready to be manipulated by your JavaScript code .

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
Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context.
 This strict context prevents certain actions from being taken and throws more exceptions.
  The statement “use strict”; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.
Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.

Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object)
It disables features that are confusing or poorly thought out.
Strict mode makes it easier to write “secure” JavaScript.
Also note you can apply "strict mode" to the whole file... Or you can use it only for a specific function



typeof null === object why-
 In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value.

This is a bug and one that unfortunately can’t be fixed, because it would break existing code. Let’s explore the history of this bug.

function as type of function why---
why function has a type function not objects
You can logically think of Function as a subclass of Object. It has all the methods of Object plus some more that are specific to a function (such as .bind(), .call(), .apply(), etc...).

It is extremely useful that Function does report its own type so you can easily check if a property is callable as a function and perhaps that is the main reason why it was done this way.

why typeof NaN is number
The type of NaN, which stands for Not a Number is, surprisingly, a number. The reason for this is, in computing, NaN is actually technically a numeric data type. However, it is a numeric data type whose value cannot be represented using actual numbers.


typeof class Foo {} // "function"
Classes have always just been a syntactical wrapper around the function method. The same function is actually being created, but just with the author writing it in a different, cleaner way. This is why the typeof a Class, is still just a Function.

...constant cannot change through re-assignment
...constant cannot be re-declared

When you're adding to an array or object you're not re-assigning or re-declaring the constant, it's already declared and assigned, you're just adding to the "list" that the constant points to.

Modern web development has many repetitive tasks like running a local server, minifying code, optimizing images, preprocessing CSS and more. This text discusses gulp, a build tool for automating these tasks.

Gulp
Modern web development has many repetitive tasks like running a local server, minifying code, optimizing images, preprocessing CSS and more. This text discusses gulp, a build tool for automating these tasks.
Gulp is a cross-platform, streaming task runner that lets developers automate many development tasks. At a high level, gulp reads files as streams and pipes the streams to different tasks. These tasks are code-based and use plugins. The tasks modify the files, building source files into production files. To get an idea of what gulp can do check the list of gulp recipes on GitHub.

Gulp uses plugins to automate the task and these plugins can be installed and managed by using Node Package Manager (​npm​)

npm install --global gulp-cli
Gulp and Node rely on plugins (packages) for the majority of their functionality. Node plugins can be installed with the following command line command:

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

for any changes and then perform some kind actions on it for eg. assume you change the styles.css or script.js files which are used for development purpose and later you want to push it for production then you need to minify it manually, instead of you minifying it gulp does it for you.

- Compile Sass, LESS files for you

- Combining multiple js/css files into single file respectively

- Converting SVG icons to fonts

- Live browser reload
