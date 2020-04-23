
onClick, onMouseHover

jsx- JavaScript XML.

1. JSX is  an extension to JavaScript that allows to write XML-like code for simplicity and elegance,
and then we transpile this JSX code into pure JavaScript function calls with React.createElement.
3. React allows us to write HTML in JavaScript,
if JavaScript files contains JSX, that that file will have to be transpiled using babel.
 4. JSX produces React “elements”. which is simply an object representation of a DOM node.
  A React element isn’t actually the thing we see on our screen, instead, it’s just an object representation of it.

diff between html and jsx

1. HTML is a markup language which is used for creating attractive web pages with the help of styling, and which
  looks in a nice format on a web browser.
  where as JSX is extension to javascript that allows to write html-like syntax code to represent the web page.
2. The attribute names are based on the DOM API, not on the HTML language specs.
3. Tag attributes are camel cased.
4. All elements must be balanced.
5. className attribute instead of class

=======
React.createElement(type, [props], [...children])

The first is a tag name string (div, span, etc), the second is any attributes you want the element to have,
the third is contents or the children of the element.
=====
why do the Component names in JSX start with capital letter?

n JSX, lower-case tag names are considered to be HTML tags. However, lower-case tag names with a dot (property accessor) aren't.
==
Mounting
This process of creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.

React does so by "mounting" (adding nodes to the DOM), "unmounting" (removing them from the DOM), and "updating" (making changes to nodes
   already in the DOM).

====
props and state
props-
1. props are shorthand for properties of the component.
2. props allow us to pass custom data between coomponents.
3. Props enables us to create Stateless components which are just presentational component.
4. One of the most important features of props is that they can be passed by a parent component to its child components.
5. props are fixed throughout its lifecycle.

state-
1. The State of a component is an object that holds some information that may change over the lifetime of the component.
2. Components data is stored in component's State.
3. State can be modified based on user action or other action using setState method.
4. when a component state is changed React will re-render the component to the browser.

difference
1. Props are immutable i.e. once set the props cannot be changed, state is mutable
2. States can only be used in Class Components while Props don’t have this limitation.
3. While Props are set by the parent component, State is generally updated by event handlers using setState.
4. props get passed to the component (similar to function parameters) whereas state is managed within the component
(similar to variables declared within a function)

when to use state
If a Component needs to alter one of its attributes at some point in time, that attribute should be part of
 its state, otherwise it should just be a prop for that Component.
=====
why setState is asynchronous

setState actions are asynchronous and are batched for performance gains
setState() does not immediately mutate this.state but creates a pending state transition.

This is because setState alters the state and causes rerendering.
This can be an expensive operation and making it synchronous might leave the browser unresponsive.
Thus the setState calls are asynchronous as well as batched for better UI experience and performance.

get the latest value of state;
--
if we update the state of any component like the following the webpage will not re-render itself because React State will
 not be able to detect the changes made.
this.state.attribute = "new-value";
Thus, React provides its own method setState(). setState() method takes a single parameter and expects an object which
 should contain the set of values to be updated. Once the update is done the method implicitly calls the render() method
 to repaint the page. Hence the correct method of updating the value of a state will be similar to the code below.

this.setState({attribute: "new-value"});
===
HOC-
Higher order component

1. A higher-order component in React is a pattern used to share common functionality between components
 without repeating code.
2. A higher-order component is actually not a component though, it is a function.
3.  A HOC function takes a component as an argument and returns a component. It transforms a component
 into another component and adds additional data or functionality.


1. a higher-order component is a function that takes a component and returns a new component.
2. it is an advanced technique in React for reusing component logic.
3. Note that a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior.
 Rather, a HOC composes the original component by wrapping it in a container component.
 A HOC is a pure function with zero side-effects.

we can pass props to a wrapped component

// This function takes a component...
function withSubscription(WrappedComponent, selectData, additionalParams) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
  Don’t Use HOCs Inside the render Method
  React’s diffing algorithm (called reconciliation) uses component identity to determine whether it should update
  the existing subtree or throw it away and mount a new one. If the component returned from render is identical
  (===) to the component from the previous render, React recursively updates the subtree by diffing it with the new one.
  If they’re not equal, the previous subtree is unmounted completely.

  Refs Aren’t Passed Through
  If you add a ref to an element whose component is the result of a HOC, the ref refers to an instance of the
  outermost container component, not the wrapped component.
  The solution for this problem is to use the React.forwardRef API (introduced with React 16.3).

====
============
virtual DOM

1. The virtual DOM is a tree-like data structure or a collection of JavaScript objects representing DOM nodes
that are managed by React.js and that should be rendered on the page. These objects are called “virtual nodes” or
 VNodes for short.

2. Virtual Dom is node tree that lists attribute , elements, contents  as a properties and object.

3. Render method in react creates the node tree from react component and updates this tree in response to the change in the data model.
Each times it undergoes the data changes react creates a new virtual Dom representatuion of user interface.

4. The virtual DOM is an in-memory representation of the real DOM.

5. It is lightweight and detached from the browser-specific implementation details like the process Layout, Painting.

The main purpose of the virtual DOM is faster and more efficient DOM manipulation. When there are lots of nodes in the DOM,
 updating them can be expensive in terms of processing power and resources required.

Working with the virtual DOM JavaScript object is significantly faster. Subsequently, Vue.js organizes DOM updates in batches
for more efficiency.
----
The Virtual DOM is an abstraction of the HTML DOM.
 Since the DOM itself was already an abstraction, the virtual DOM is, in fact, an abstraction of an abstraction.

 n React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user
 interface.

Fibres
 React, however, also uses internal objects called “fibers” to hold additional information about the component tree.
 They may also be considered a part of “virtual DOM” implementation in React.

Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.
Read more.

By comparing changes between a virtual DOM and the real DOM USING DIFFING PROCESS, rendering engines can more efficiently
determine what actually needs to be updated. This avoids unnecessary redrawing of DOM nodes as only elements that have
changed are redrawn. Without the virtual DOM, every element is redrawn regardless of whether or not it has changed.
This adds a huge performance boost to DOM manipulation since redrawing elements is an expensive process.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen.
====
The reconciliation process is where React
Compares the previous internal instance with the next internal instance.
Updates the internal Instance which is a Component Tree structure in JavaScript Object(Virtual DOM).
And updates the actual DOM only at the node where there is an actual change along with it’s children.

MArking COmp Dirty
All the DOM event listeners are wrapper within custom React event listeners. Therefore on clicking Add, the event is
 dispatched to the react event listener and thereby executing the anonymous function() that you see above.
In the anonymous function(), we call the function this.setState() with the new state value.
The setState() function, will in turn mark the component dirty as you see in below lines of code.


If you are wondering, why React didn’t just mark the button as dirty, but instead the whole component? Well, this is
because you call setState as this.setState(), where this is the Calculator component.

Next step is to update the component.
This is done by React running batch update.
In the batch update, it will check if there are components marked as dirty and starts updating.

First it will check if we have used componentWillReceiveProps() and if we have used it, allows us to update the state
with the new props that we received.
5. Next it will check if we have used shouldComponentUpdate() and if we have used, we can check if a component should be
 re-render with the change in state or props.
Use this when you know of scenarios where you don’t need the component to re-render, and therefore improving on the performance.

Reconciliation starts from the main <div> of the component which is the one with class=”container”.
Its child is <div> which contains Output, and therefore react will start reconciliation of this child.
Now this child has it’s own children <hr> and <h2>
So react will start reconciliation for <hr>
Next, it will start with reconciliation of <h2> and since it has it’s own children which are the texts Output:
and the output from state, it will start reconciliation for these two.
First Output: text goes through reconciliation and since there is no change, nothing happens to the DOM.
Next, output from state goes through reconciliation and since we have a new value now, i.e 150, react will update the actual DOM.

===

Dom
The DOM is an interface to an HTML document.
 It is used by browsers as a first step towards determining what to render in the viewport, and
Javascript programs can modifyit to change  the content, structure, or styling of the page.

The DOM is an object-based representation of the source HTML document.
The object structure of the DOM is represented by what is called a “node tree”.
===
What is the Shadow DOM?

1. The shadow DOM is a way of encapsulating the implementation of web components.
2. Using the shadow DOM, you can hide
the implementation details of a web component from the regular DOM tree.
3. A popular example is the HTML5 slider input.
 While the regular DOM recognizes this as a simple <input/> tag, there is underlying HTML and CSS that make up the slide
 feature. This sub-tree of DOM nodes is hidden from the main DOM to encapsulate the implementation of the HTML5 slider.
 Additionally, the CSS properties for the slider are isolated from the rest of the DOM. This provides an isolated scope
 that prevents the component's styles from overriding other CSS properties defined elsewhere.

The Difference?
While the shadow DOM and virtual DOM are seemingly similar in their creation of separate DOM instances, they are fundamentally
different. The virtual DOM creates an additional DOM. The shadow DOM simply hides implementation details and provides isolated
scope for web components.
====
===
1. redux
1. When you have multiple components in an application that share data,
the complexity of their interconnections will increase to a point where the state of the data is no longer predictable or
 understandable. Consequentially the app becomes impossible to extend or maintain.

The idea of Flux was to create a set of guiding principles that describe a scalable front end architecture that
 sufficiently mitigates this flaw. Not just for a chat app, but in any complex UI app with components and shared data state.

1. Redux is a predictable state container for JavaScript applications.

2. There is a central store that holds the entire state of the application.
Each component can access the stored state without having to send down props from one component to another.

There are three building parts pf the redux:
actions, store and reducers.

1. Action
2. Store
3. reducers

1. Actions in Redux
1. Simply put, actions are events.
2. They are the only way you can send data from your application to your
Redux store.
3. The data can be from user interactions, API calls or even form submission.
Actions are sent using `store.dispatch()` method.

Actions are plain JavaScript objects and they must have a type property
to indicate the type of action to be carried out.
They must also have a payload that contains the information that
should be worked on by the action, i,e the data of the state. Actions are created via an action creator.

Here’s an example of an action that can be carried out during login in an app:
{
  type: "LOGIN",
  payload: {
    username: "foo",
    password: "bar"
  }
}

2. reducers-
1. Reducers are pure functions that take the current state of an application,
perform an action and returns a new state.
2. These states are stored as objects and they specify
how the state of an application changes in response to an action sent to the store.

3.It is based on the reduce function in JavaScript where a single value is gotten
from multiple values after a callback function has carried out.

4. As pure functions, they do not change the data in the object passed to it or
perform any side effect in the application.
Given the same object, it should always produce the same result.

3. Store in Redux
The store holds the application state. There is only one store in any Redux application.
You can access the state stored, update the state, and register or unregister
listeners via helper methods.

Redux makes the state predictable.

If the same state and action are passed to a reducer,
 the same result is always produced as reducers are pure functions.
 The state is also immutable and is never changed. This makes it possible to implement
  arduous tasks like infinite undo and redo.
  It is also possible to implement time travel
  that is, the ability to move back and forth among the previous states and view the results in real-time.
  uses/advantages

  advantages-

Maintainability.

Redux is strict about how code should be organized so it makes it easier for someone with knowledge of Redux
to understand the structure of any Redux application. This generally makes it easier to maintain.

Debuggable for days.
Redux makes it easy to debug an application. By logging actions and state, it is easy to understand coding errors,
 network errors and other forms of bugs that might come up during production.

Ease of testing
It is easy to test Redux apps as functions used to change the state of pure functions.
You can persist some of the app’s state to local storage and restore it after a refresh. This can be really nifty.
Redux can also be used for server-side rendering. With it, you can handle the initial render of the app by sending the
state of an app to the server along with its response to the server request. The required components are then rendered
in HTML and sent to the clients.

  ===
  memoising

  - to improve performance
  - to prevent rerendering of the component
  Memoizing in React is a performance feature of the framework that aims to speed up the render process of components.
   The technique is used in a wide spectrum of disciplines, from game engines to web applications.

Memoizing aims to speed up programs by caching results of expensive function
calls and re-using those cached results as to avoid repeating those expensive operations:

Memoizing in React is primarily used for increasing rendering speed while decreasing rendering operations,
caching a component’s render()
result upon an initial render cycle, and re-using it given the same inputs (props, state, class properties, function variables).

componentDidMount() {
  setInterval(() => {
      this.setState({
        count : this.state.count
      });
  }, 3000);

  import React from 'react';

/*  it will call once*/
  export default React.memo((props) => {
    console.log('props------ ', props);
    return <div> hello {props.value}</div>
  });

===
react hooks

we can use state in the functional componentv without writing class component
 hooks allows us to use statefull logics without changing the component hierarchy.
 allows to add additional feature in the functional component withput changing to class compoent
 useState hooks

 import {useState} from 'react';

 const [count , setState] = useState(0);

 <div onClick="{c1  => setCount(count + 1)}"><div>




Hooks are a new addition in React 16.8. They let you use state and other React features
 without writing a class.

16.7 support
useState gives to attributes 1. value 2. function to update the state.
we can have state in functional comp. using hooks.

It’s hard to reuse stateful logic between components

With Hooks, you can extract stateful logic from a component it can be tested independently and reused.
 Hooks allow you to reuse stateful
 logic without changing your component hierarchy. This makes it easy to share Hooks among many
 components or with the community.

Hooks let you split one component into smaller functions based on what pieces are related (such as
  setting up a subscription or fetching data),
 rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it
 more predictable.

 Hooks let you use more of React’s features without classes. Conceptually, React components have always been closer to functions. Hooks embrace
  functions, but without sacrificing the practical spirit of Reactnt so it can be tested independently and reused. Hooks allow you to reuse stateful
 logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data),
 rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it
 more predictable.

 Hooks let you use more of React’s features without classes. Conceptually, React components have always been closer to functions. Hooks embrace
  functions, but without sacrificing the practical spirit of React

==
conditional css -
style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
===
6- How to access child component properties in parent component?
====

Q12. What is PureComponent? When to use PureComponent over Component?

whenever we call setState react calls the render method blindly. whether or not state chenges still the render gets called
when not required, to fix this we use Pure component.

PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for us.
When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the
other hand wont compare current props and state to next out of the box.
Thus, the component will re-render by default whenever shouldComponentUpdate is called.
When comparing previous props and state to next, a shallow comparison will check that primitives have the
same value (eg, 1 equals 1 or that true equals true) and that the references are the same between more
complex javascript values like objects and arrays.
It is good to prefer PureComponent over Component whenever we never mutate our objects.

whenever we call setState react calls the render method blindly. whether or not state chenges still the render gets
 called
when not required, to fix this we use Pure component.

without using shouldComponent

shouldComponentUpdate(nextProps, nextState) {
  return (this.state.val === this.nextState.val ? false : true)
}

using pureComponent

import { PureComponent } from 'react';

class App exptend PureComponent {

}
===

Q16. What are controlled and uncontrolled components in React?

Uncontrolled Comp. in react is without set value and onChange event. React doesnt controll this element.

<input value="title" />- its read only
This relates to stateful DOM components (form elements) and the difference:

class Comp extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(
      {
        title : this.title.value,
        own : this.own.value
      }
      )
  }
  render() {
    return (
      <form onSubmit={handleSubmit}>
        <input ref = {input=> this.title = input} />
        <input type='checkbox' ref = {input=> this.own = input} />
      </form>
      )
  }
}


controlled component =
if u have more validation, show and hide other elements based on the cuurent elements then use controlled Component

class Comp extends React.Component {
  state = {
    title : '',
    check : false
  }
  onTitleChange = (e) => {
    this.setState({
      title : e.target.value
      })
  }
  onCheck = (e) => {
    this.setState({
      check : e.target.checked
      })
  }
  render() {
    return (
      <form onSubmit={handleSubmit}>
        <input value= {this.title} onChange={onTitleChange} />
        <input type='checkbox' checked= {this.check} onChange={onCheck} />
      </form>
      )
  }
}

A Controlled Component is one that takes its current value through props and notifies changes through callbacks
 like onChange.
A parent component “controls” it by handling the callback and managing its own state and passing the new values as props
to the controlled component. You could also call this a “dumb component”.

A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e,
every state mutation will have an associated handler function.

For a controlled component the value is passed in through props.
xt out of the box
An uncontrolled component would use state to control the value itself internally. This is the key difference

A Uncontrolled Component is one that stores its own state internally,
and you query the DOM using a ref to find its current value when you need it.
This is a bit more like traditional HTML.
The alternative is uncontrolled components, where form data is handled by the DOM itself.

class NameForm extends React.Component {
constructor(props) {
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.input = React.createRef();
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.input.current.value);
  event.preventDefault();
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" ref={this.input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
}
==
react testing

npm i @testing-library/react react-test-renderer jest-dom --save

testing the components


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


snapshot testing

it create the snapshot file of the elements virtiual Dom

===
reactElement and ReactComponent

What differs ReactComponent from ReactElement is - ReactComponents are stateful.
A ReactElement is a light, stateless, immutable, virtual representation of a DOM Element.

The biggest takeaway is that React elements are simply plain old JavaScript objects used to describe how the HTML
 for the component should look — there are no methods on the object, just data.

key — the key property is used to uniquely identify specific React elements within an array of the same element types.
You don’t have to provide a value for it, but if you do, React will be able to perform optimizations making the
 re-rendering process more efficient.
props — the props property is exactly what you think it is: it’s a mapping of all the props and values passed down to
child components.
ref — the ref property is used to access the underlying DOM element associated with a rendered version of this React element.
type

ReactElements lives in the virtual DOM. They make the basic nodes here.
Their immutability makes them easy and fast to compare and update.
This is the reason of great React performance.
=======
lifting-state-up???

When several components need to share the same changing data then it is recommended to lift the shared state up to
their closest common ancestor. That means if two child components share the same data from its parent,
 then move the state to parent instead of maintaining local state in both of the child components.

Answers ranging from “it allows to pass data between siblings” to “it allows you to have more pure-presentational components,
which make re-usability easier” are preferred.
====
syntheticEvents???
SyntheticEvent is a wrapper that forms part of React’s Event System.
 Event handlers will be passed instances of SyntheticEvent in react,
 which is a cross-browser wrapper around the browser’s native event
the events work identically across all browsers.

boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
DOMEventTarget target
number timeStamp
string type
==
====
Component types

Stateless Component/Presentational components/Dumb components/Functional Component —
Only props, no state. There's not much going on besides the render()
function and all their logic revolves around the props they receive.
This makes them very easy to follow (and test for that matter).
   You can use either a function or a class for creating stateless components.
   But unless you need to use a lifecycle hook in your components, you should go for stateless functional components
    Refs are also not supported.
    The downside is that you can't have lifecycle hooks.

Stateful Component/Smart Component/Container/Class component —
Stateful components are always class components.
stateful components have a state that gets initialized in the constructor.
Both props and state. We also call these state managers.
They are in charge of client-server communication (XHR, web sockets, etc.),
processing data and responding to user events. These sort of logistics should be encapsulated
in a moderate number of Stateful Components, while all visualization and formatting
logic should move downstream into as many Stateless Components as possible.

===
Lifecycle-

Initialization: This is the stage where the component is constructed with the given Props and default state.
This is done in the constructor of a Component Class.
constructor()

Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
UNSAFE_componentWillMount()
getDerivedStateFromProps()
render()
componentDidMount()

Updating: Updating is the stage when the state of a component is updated and the application is
 repainted.
shouldComponentUpdate()
UNSAFE_componentWillUpdate()
getSnapshotBeforeUpdate()
componentDidUpdate()

Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component
 is removed from the page.
componentWillUnmount()
componentDidCatch()

  What are the lifecycle methods of React?

  getDerivedStateFromProps:
  Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need derived state.
  Worth reading if you need derived state.
  componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
  shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true. If you are sure that the component
   doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it
    allows you to prevent a re-render if component receives new prop.
  getSnapshotBeforeUpdate: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into
  componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
  componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate()
  returns false.
  componentWillUnmount It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.
  Before 16.3

  componentWillMount: Executed before rendering and is used for App level configuration in your root component.
  componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
  componentWillReceiveProps: Executed when particular prop updates to trigger state transitions.
  shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true.
  If you are sure that the component doesn't need to render after state or props are updated, you can return false value.
  It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
  componentWillUpdate: Executed before re-rendering the component when there are props & state changes confirmed by
  shouldComponentUpdate() which returns true.
  componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes.
===
setting default props

if the props not provided by the parent componen, so instead of fallback ui, we can use the defaultProps
class ReactComp extends React.Component {}
ReactComp.defaultProps = {}


class ReactComp extends React.Component {
    static defaultProps = {}
}

or using logical || operators
===
react library or frameworks

React does not solve any structural or architectural problems on the app level.
It provides us with a set of methods for better (in my opinion) handling of front-end.

React does not have any Template design pattern.
It does not push app structure in any direction.

It is not only about the fact that React can be V (view) in an MVC, there is no HTML
 or any other kind of traditional templates in the React.

React approaches building user interfaces differently by breaking them into components.
 This means React uses a real, full featured programming language to render views (Source)

So Angular, Ember.js and ExtJS are frameworks, but React isn't, because it only gives you
the means to build components and render them into the DOM.
===
How would you write an inline style in React?

For example:

<div style={{ height: 10 }}>
===

context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Context is designed to share data that can be considered “global” for a tree of React components, such as the
 current authenticated user,
theme, or preferred language.

const MyContext = React.createContext(defaultValue);
<MyContext.Provider value={ some value }> in app.js;

const ThemeContext = React.createContext('light');

components

static contextType = ThemeContext;

  render() {
    return <Button theme={this.context} />;
  }
}

Context is primarily used when some data needs to be accessible by many components at different nesting levels.
 Apply it sparingly because it makes component reuse more difficult.

If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.

component composition

<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... which renders ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... which renders ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>

One way to solve this issue without context is to pass down the Avatar component itself so that the intermediate components don’t need to
 know about the user or avatarSize props:

function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout userLink={...} />
// ... which renders ...
<NavigationBar userLink={...} />
// ... which renders ...
{props.userLink}

===
How to pass a parameter to an event handler or callback?
<button onClick={() => this.handleClick(id)} />
<button onClick={this.handleClick.bind(this, id)} />
<button onClick={this.handleClick(id)} />
handleClick = (id) => () => {
    console.log("Hello, your ticket number is", id)
};
===
What is the use of refs?

The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when we need
direct access to DOM element or an instance of a component.
===
What is JEST?
Jest is a JavaScript unit testing framework made by Facebook based on Jasmine and provides automated mock creation and
 a jsdom environment. Its often used for testing React components.
==
When rendering a list what is a key and what is its purpose?
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array
 to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.

React uses the key to match children in the original tree with children in the subsequent tree.
For example, adding a key to our inefficient example above can make the tree conversion efficient:

render () {
  return (
    <ul>
      {this.state.todoItems.map(({task, uid}) => {
        return <li key={uid}>{task}</li>
      })}
    </ul>
  )
}

Most often you would use IDs from your data as keys. When you dont have stable IDs for rendered items, you may use the item index as a key as a last
resort.
It is not recommend to use indexes for keys if the items can reorder, as that would be slow.
======
Q31: How do you prevent the default behavior in an event callback in React?

You call e.preventDefault(); on the event e passed into the callback.
=====
Q32: How would you prevent a component from rendering in React?
Return null from the render method.
=====
flux
Flux is an architecture that Facebook uses internally when working with React. It is not a framework or a library.
It is simply a new kind of architecture that complements React and the concept of Unidirectional Data Flow.

Actions - Helper methods that facilitate passing data to the Dispatcher
Dispatcher - Receives actions and broadcasts payloads to registered callbacks
Stores - Containers for application state & logic that have callbacks registered to the dispatcher
Controller Views - React Components that grab the state from Stores and pass it down via props to child components.
==
React folder structure

packg.json
src - cpmonent - middleware - services- index.js - app.js
public - index.html
node modules

--react library used

react
axios
@material-ui/core
react-dom
react
react-icons
react-router-dom
socket.io-client
moment
lodash
====
why import react in functional component

After reading more about it and after seeing the code which get’s generated after transpilation, I could finally understand why it’s needed 😯

The reason is because of JSX 😃The code which looked like plain html to me is actually JSX 🙇
The important thing to focus here is React.createElement and this is the reason why we need to import React at the start of any functional component.
==
Q46: How to create refs?
Refs are created using React.createRef() method and attached to React elements via the ref attribute.
In order to use refs throughout the component, just assign the ref to the instance property with in constructor.

class MyComponent extends React.Component {
 constructor(props) {
   super(props);
   this.myRef = React.createRef();
 }
 render() {
   return <div ref={this.myRef} />;
 }
}

And:

class UserForm extends Component {
 handleSubmit = () => {
   console.log("Input Value is: ", this.input.value)
 }
 render () {
   return (
     <form onSubmit={this.handleSubmit}>
       <input
         type='text'
         ref={(input) => this.input = input} /> // Access DOM input in handle submit
       <button type='submit'>Submit</button>
     </form>
   )
 }
}

We can also use it in functional components with the help of closures.
===
What is the purpose of using super constructor with props argument?

A child class constructor cannot make use of this reference until super() method has been called.
 The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super()
  call is to access this.props in your child constructors.

  In JavaScript, there’s a distinction between a “constructor function of an inheriting class” and all others.
  In an inheriting class, the corresponding constructor function is labelled with a special internal property [[ConstructorKind]]:"derived".

The difference is:

When a normal constructor runs, it creates an empty object and assigns it to this.
But when a derived constructor runs, it doesn’t do this. It expects the parent constructor to do this job.
So if we’re making a constructor of our own, then we must call super, because otherwise the object for
this won’t be created. And we’ll get an error.
====
The above code snippets reveals that this.props behavior is different only with in the constructor. It would be same outside the constructor.

Passing props:

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);  // Prints { name: 'sudheer',age: 30 }
    }
}

Not passing props:

class MyComponent extends React.Component {
    constructor(props) {
        super();
        console.log(this.props); // Prints undefined
        // But Props parameter is still available
        console.log(props); // Prints { name: 'sudheer',age: 30 }
    }

    render() {
        // No difference outside constructor
        console.log(this.props) // Prints { name: 'sudheer',age: 30 }
    }
}

===
What is reconciliation?

When a component’s props or state change, React decides whether an actual DOM update is
necessary by comparing the newly returned element with the previously rendered one.
 When they are not equal, React will update the DOM. This process is called reconciliation.

 The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation
 of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
 This process is called reconciliation.
===
propTypes

but even if you don’t use those, React has some built-in typechecking abilities.
To run typechecking on the props for a component, you can assign the special propTypes property:

Default Prop Values
You can define default values for your props by assigning to the special defaultProps property:

import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

npm install prop-types --save

import React from 'react'
import PropTypes from 'prop-types'

class User extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }
  render() {
    return (
      <>
        <h1>{`Welcome, ${this.props.name}`}</h1>
        <h2>{`Age, ${this.props.age}`}</h2>
      </>
    )
  }
}

Note that propTypes type checking only happens in development mode, enabling you to catch bugs in your
 React application while developing. For performance reasons, it is not triggered in the production environment.

 PropTypes.any: The prop can be of any data type
 PropTypes.bool: The prop should be a Boolean
 PropTypes.number: The prop should be a number
 PropTypes.string: The prop should be a string
 PropTypes.func: The prop should be a function
 PropTypes.array: The prop should be an array
 PropTypes.object: The prop should be an object
 PropTypes.symbol: The prop should be a symbol
 ----

 PropTypes.node: The prop should be anything that can be rendered by React — a number, string, element, or array (or fragment) containing these types
PropTypes.element: The prop should be a React element
Component.propTypes = {
  nodeProp: PropTypes.node,
  elementProp: PropTypes.element
}

----
in case of choose bwtween  multiple

Component.propTypes = {

  enumProp: PropTypes.oneOf([true, false, 0, 'Unknown']),

  unionProp: PropTypes.oneOfType([
    PropType.bool,
    PropType.number,
    PropType.string,
    PropType.instanceOf(Person)
  ])

}
==---
Basic custom validators
The custom validation function takes three arguments:

props: An object containing all the props passed to the component
propName: The name of the prop to be validated
componentName: The name of the component
It should return an Error object if the validation fai

const isEmail = function(props, propName, componentName) {
  const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;

  if (!regex.test(props[propName])) {
    return new Error(`Invalid prop `${propName}` passed to `${componentName}`. Expected a valid email address.`);
  }
}

Component.propTypes = {
  email: isEmail,
  fullname: PropTypes.string,
  date: PropTypes.instanceOf(Date)
}
====

why not stateType

The important thing to remember here is that propTypes checks if you passed correct data to the current element in
the place where you render this component. You can reuse the component as many times as you wish, therefore it could
easily happen that you forgot to pass appropriate properties to it.

Therefore, checking data passed from "other source" is more important and more beneficial than checking the data
 you just use when you write the component itself. If you could work with the information from state somewhere else,
 which you cannot, it would be worth using.
===
Render Props

Render props comes handy when we want to share the same state across components.

render prop is a function
render prop is a function prop
render prop is used for sharing code between components
render prop is used by a component to know what to render
render prop makes it possible to write reusable components.

So, in summary
a prop can be a function
a function prop might be a render prop
a render prop is a function prop

A render prop is a function prop that a component uses to know what to render
The render prop can return a HTML markup:
===
ReactDOM
The react-dom package provides DOM-specific methods that can be used at the top
 level of your app and as an escape hatch to get outside of the React model if
 you need to. Most of your components should not need to use this module.

render()
hydrate()
unmountComponentAtNode()
findDOMNode()
createPortal()

render()
ReactDOM.render(element, container[, callback])
Render a React element into the DOM in the supplied container and return a
reference to the component (or returns null for stateless components).

If the React element was previously rendered into container, this will perform
an update on it and only mutate the DOM as necessary to reflect the latest React element.
===
What is the purpose of render method of react-dom?
This method is used to render a React element into the DOM in the supplied container and return a reference to the component.
If the React element was previously rendered into container,
 it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

ReactDOM.render(element, container[, callback])
If the optional callback is provided, it will be executed after the component is rendered or updated.
===
What are fragments?

Its common pattern in React which is used for a component to return multiple elements.
 Fragments let you group a list of children without adding extra nodes to the DOM.

React components are meant to return elements but they must be enclosed in a parent tag,
multiple elements cannot be returned. But adding extra node sometimes results in the wrong
formatting of our html output as we saw above.

render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}

There is also a shorter syntax which is not supported in many tools

render() {
    return (
      <>
         <ChildA />
         <ChildB />
         <ChildC />
      </>
    );
  }

====
What are portals in ReactJS?

Portal is a recommended way to render children into a DOM node that exists
 outside the DOM hierarchy of the parent component.

ReactDOM.createPortal(child, container);

The first argument (child) is any renderable React child, such as an element,
string, or fragment. The second argument (container) is a DOM element.

===
Q56: What are the limitations of ReactJS?

Below are the list of limitations:
   React is just a view library, not a full-blown framework
   There is a learning curve for beginners who are new to web development.
   Integrating React.js into a traditional MVC framework requires some additional configuration
   The code complexity increases with inline templating and JSX.
   Too many smaller components leading to over-engineering or boilerplate
=====

Handling error in React
Introducing Error Boundaries
A JavaScript error in a part of the UI shouldn’t break the whole app.
To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.

Error boundaries are React components that catch JavaScript errors anywhere in
their child component tree, log those errors, and display a fallback UI instead of
the component tree that crashed. Error boundaries catch errors during rendering, in
lifecycle methods, and in constructors of the whole tree below them.

A class component becomes an error boundary if it defines a new lifecycle
method called componentDidCatch(error, info):

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
Then you can use it as a regular component:

<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>

=====
flow
Static Type Checking
Static type checkers like Flow and TypeScript identify certain types of problems
before you even run your code. They can also improve developer workflow by adding
features like auto-completion. For this reason, we recommend using Flow or TypeScript
 instead of PropTypes for larger code bases.

Flow is a static type checker for your JavaScript code. It is developed at Facebook
 and is often used with React. It lets you annotate the variables, functions, and React
 components with a special type syntax, and catch mistakes early.
 You can read an introduction to Flow to learn its basics.

To use Flow, you need to:

Add Flow to your project as a dependency.
Ensure that Flow syntax is stripped from the compiled code.
Add type annotations and run Flow to check them.
We will explain these steps below in detail.
====
60: What is the difference between component and container in react Redux?

Component is part of the React API. A Component is a class or function that describes
 part of a React UI. Container is an informal term for a React component that is connected
 to a redux store. Containers receive Redux state updates and dispatch actions, and
  they usually dont render DOM elements; they delegate rendering to presentational child components.
===
How do you tell React to build in Production mode and what will that do?
https://reactjs.org/docs/optimizing-performance.html

When you want to build your app in production mode, you should use webpack production shortcut. Like this:

webpack -p
heroku git : remote -a "appname"
===
Normally, when we want to update our component we just call setState with a new value by passing in an object
to the setState function: this.setState({someField:someValue})
But, often there is a need to update our component’s state using the current state of the component.
Directly accessing this.state to update our component is not a reliable way to update our component’s
 next state. From the React documentation:

Because this.props and this.state may be updated asynchronously, you should not rely on their values for
 calculating the next state.

submit() {
   this.setState(function(prevState, props){
      return {showForm: !prevState.showForm}
   });
}
Passing in a function into setState instead of an object will give you a reliable value for your component’s state and props.
====
this.props.children
My simple explanation of what this.props.children does is that it is used to display whatever you include
between the opening and closing tags when invoking a component.

const Picture = (props) => {
  return (
    <div>
      <img src={props.src}/>
      {props.children}
    </div>
  )
}

render () {
  return (
    <div className='container'>
      <Picture key={picture.id} src={picture.src}>
          //what is placed here is passed as props.children
      </Picture>
    </div>
  )
}
=====
18. What is React.cloneElement? And the difference with this.props.children?
React.cloneElement clone and return a new React element  using the passed element as the starting point.
The resulting element will have the original elements props with the new props merged
in shallowly. New children will replace existing children. key and ref from the original
element will be preserved.

React.cloneElement only works if our child is a single React element.
For almost everything {this.props.children} is the better solution. Cloning is useful
in some more advanced scenarios, where a parent send in an element and the child component
 needs to change some props on that element or add things like ref for accessing the actual DOM element.

this.props.children

this.props.children does is that it is used to display whatever you include between the opening and closing tags
 when invoking a component.
====
jsx-
JSX produces React “elements”.
JSX is simply converting XML-like markup into JavaScript.
basically, by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures)
 in the same file as you write JavaScript code,
Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.
React embraces the fact that rendering logic is inherently coupled with other UI logic:
how events are handled, how the state changes over time, and how the data is prepared for display.
Instead of artificially separating technologies by putting markup and logic in separate files,
 React separates concerns with loosely coupled units called “components” that contain both.
  It also allows React to show more useful error and warning messages.

  JSX is an Expression Too
After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

For example, class becomes className in JSX, and tabindex becomes tabIndex.


It is safe to embed user input in JSX:

const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that
you can never inject anything that’s not explicitly written in your application. Everything is
converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

JSX Represents Objects
Babel compiles JSX down to React.createElement() calls.

The merits of JSX in four bullet points:
Less technical people can still understand and modify the required parts. CSS developers and
 designers will find JSX more familiar than JavaScript alone. I.e., HTML markup looks like HTML markup.
You can leverage the full power of JavaScript in HTML and avoid learning or using a templating
language. JSX is not a templating solution. It is a declarative syntax used to express a tree structure of UI components.
By adding a JSX transformation step you
ll find errors in your HTML you might otherwise miss.
JSX promotes the idea of inline styles. Which can be a good thing.

conditional operator=

if else

Element Variables

Inline If with Logical && Operator
You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical
&& operator.
It can be handy for conditionally including an element:

Inline If-Else with Conditional Operator

What are the major features of React?
The major features of React are:

It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.
Supports server-side rendering.
Follows Unidirectional* data flow or data binding.
Uses reusable/composable UI components to develop the view.

====
What is the difference between Element and Component?
An Element is a plain object describing what you want to appear on the screen in terms of
the DOM nodes or other components. Elements can contain other Elements in their props.
Creating a React element is cheap. Once an element is created, it is never mutated.

The object representation of React Element would be as follows:
const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)
And finally it renders to the DOM using ReactDOM.render():

<div id='login-btn'>Login</div>

==
Server-side rendering
1. Server-side rendering (SSR) is a popular technique for rendering a normally client-side only single page app (SPA) on the server and
 then sending a fully rendered page to the client. The client’s JavaScript bundle can then take over and the SPA can operate as normal.
 2.  One major benefit of using SSR is in having an app that can be crawled for its content even for crawlers that don’t execute JavaScript code.
  This can help with SEO and with providing meta data to social media channels.

3. SSR can also often help with performance because a fully loaded app is sent down from the server on the first request.

7- How you implement Server Side Rendering or SSR?
The reactjs provides the server-side rendering using 'react-dom/server' module.This module have renderToString() method to placed HTML string
into the body as a response.
const app = ReactDOMServer.renderToString(<App />);

hydrate method instead of render.

ReactDOM.hydrate(<App />, document.getElementById('root'));


import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});

===

where to fetch data

componentWillMount

aftre the componentWillMount immediately the renders functio executes,
so if our api call is asynchronous, then we will not get updated data.

This lifecycle is also called at the server side (if you are using SSR). In this case the external data won’t be used.
So the api will be called twice unnecessarily.

The componentWillMount is considered legacy, alias UNSAFE_componentWillMount is introduced in React v16.3 and will be depricated
after React v17. After React v17 only the alias will work fine.

constructor

Fetching data in constructor is considered to be a side effect and it is recommended to avoid that. As you all know we cannot call
setState() in the constructor.

A typical react constructor is used for two purpose -
➀ Initializing local state by assigning an object to this.state .
➁ Binding event handler methods to an instance.

Warning: Cant call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application.
 Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the App component.

====
react new features
fragment
portal
error boundary
getDerivedStateFromError()
static getDerivedStateFromProps
Fiber: React 16.0 introduced a brand new reconciliation engine known as Fiber. This new engine is a generation leap over the previous
generation of React’s core and is also responsible for the many new features that were introduced in this release.
 Fiber also introduces the concept of async rendering which results in more responsive apps because React prevents blocking the main thread.
  Fiber incorporates a smart scheduling algorithm that batches updates instead of synchronously re-

React.memo() is the functional component solution to React.PureComponent as used in class components.
 Its a higher order component that is wrapped around functional components to create memoized components.

React.lazy() allows us to render dynamic imports as regular components.
It takes a function that must call a dynamic import().
This must return a Promise which resolves to a module with a default export
containing a React component.

const OtherComponent = React.lazy(() => import('./OtherComponent'));

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}
==
hooks
Hooks let you "hook into" the underlying lifecycle and state changes of a component within a functional component.
 More than that, they often also improve readability and organization of your components.
===
Redux Thunk middleware allows you to write action creators that return a function instead of an action.
 The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
 The inner function receives the store methods dispatch and getState as parameters.Jan 2, 2016

==
binding function

 https://reactjs.org/docs/handling-events.html
 ==
Redux-Saga is a library that aims to make application side effects (e.g., asynchronous actions such as fetching data) easier to handle and more efficient to execute. ... Like Redux-Thunk, Redux-Saga has access to the full Redux application state and it can dispatch Redux actions as wel
==
static method

We can also assign a method to the class function itself, not to its "prototype". Such methods are called static.

Usually, static methods are used to implement functions that belong to the class, but not to any particular object of it.

Static properties are used when we’d like to store class-level data, also not bound to an instance.

As MDN describes it, “Static methods are called without instantiating their class and are also not callable when the class is instantiated.
 Static methods are often used to create utility functions for an application.” In other words, static methods have no access to data stored
  in specific objects.
Since these methods operate on the class instead of instances of the class, they are called on the class. There are two ways to call
static methods:

===
import React from 'react'
import ListItem from './ListItem';

export class Table extends React.Component {

// Dummy data for the table
state = {
   data: tableData
}

getData = (rowData) => {
// This is the row data from ChildComponent
  console.log(rowData);
}

render(){
     return(
          <div>
              {this.state.data.map(item => (
                   <ListItem rowData={item} handleClick={this.getData}/>
              ))}
       </div>
        );
    }
}


import React from 'react';
const ListItem = (props) => {
 return(
    // Using Props handleClick as callback function
          <div onClick={()=> props.handleClick(props.rowData)}>
                <p> {props.rowData.company} </p>
                <p> {props.rowData.contact} </p>
                <p> {props.rowData.country} </p>
           </div>
 );
}
export default ListItem;
===
