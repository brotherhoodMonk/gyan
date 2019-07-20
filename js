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
holds the entire state of the application. Each component can access
the stored state without having to send down props from one component to another.

There are three building parts:
actions, store and reducers.

Actions in Redux
Simply put, actions are events. They are the only way you can send data from your application to your
Redux store. The data can be from user interactions, API calls or even form submission.
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
 the same result is always produced as reducers are pure functions. The state is also immutable and is never changed. This makes it possible to implement arduous tasks like infinite undo and redo. It is also possible to implement time travel that is, the ability to move back and forth among the previous states and view the results in real-time.
Maintainability.
Redux is strict about how code should be organized so it makes it easier for someone with knowledge of Redux to understand the structure of any Redux application. This generally makes it easier to maintain.
Debuggable for days.
Redux makes it easy to debug an application. By logging actions and state, it is easy to understand coding errors, network errors and other forms of bugs that might come up during production.
Ease of testing
It is easy to test Redux apps as functions used to change the state of pure functions.
You can persist some of the app’s state to local storage and restore it after a refresh. This can be really nifty.
Redux can also be used for server-side rendering. With it, you can handle the initial render of the app by sending the state of an app to the server along with its response to the server request. The required components are then rendered in HTML and sent to the clients.




props and state

The state of one component will often become the props of a child component.  ++
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
that passes its state to its children via props. The stateful component
encapsulates all of the interaction logic, while the stateless components
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


A cookie contains specific information that is encrypted for security purposes. Normally, a cookie is attached with an HTTP header from the HTTP server to a Web browser in response to a user request. This stored cookie is sent to the HTTP server whenever access to a specific website is required. Cookies are managed in two patterns: with expiry date and without expiry date. Cookies without expiry dates are automatically stored in users’ machines and remain inside the system’s memory until the user’s browsing terminates. Cookies with an expiry date expire when that date is surpassed. 
The following are the types/variations of cookies: Session Cookies: Created for a specific session, these expire upon the termination of the user’s browser session. Persistent Cookies: Normally known as tracking cookies, these cookies have a specific time period before they expire. 
