
onClick, onMouseHover
jsx

React allows us to write HTML in JavaScript,
 if JavaScript files contains JSX, that that file will have to be transpiled using babel.

 JSX produces React “elements”. A React element is simply an object representation of a DOM node. A React element isn’t actually the thing we see on our screen, instead, it’s just an object representation of it.

diff between html and jsx

 Tag attributes are camel cased.
All elements must be balanced.
The attribute names are based on the DOM API, not on the HTML language specs.

React.createElement(type, [props], [...children])

The first is a tag name string (div, span, etc), the second is any attributes you want the element to have, the third is contents or the children of the element.
===
where to fetch data


componentWillMount
aftre the componentWillMount immediately the renders functio executes,
so if our api call is asynchronous, then we will not get updated data.

This lifecycle is also called at the server side (if you are using SSR). In this case the external data won’t be used. So the api will be called twice unnecessarily.

The componentWillMount is considered legacy, alias UNSAFE_componentWillMount is introduced in React v16.3 and will be depricated after React v17. After React v17 only the alias will work fine.

constructor

Fetching data in constructor is considered to be a side effect and it is recommended to avoid that. As you all know we cannot call setState() in the constructor.

A typical react constructor is used for two purpose -
➀ Initializing local state by assigning an object to this.state .
➁ Binding event handler methods to an instance.

Warning: Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the App component.

=====
why do the Component names in JSX start with capital letter?

n JSX, lower-case tag names are considered to be HTML tags. However, lower-case tag names with a dot (property accessor) aren't.
==
Mounting
This process of creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.

React does so by "mounting" (adding nodes to the DOM), "unmounting" (removing them from the DOM), and "updating" (making changes to nodes already in the DOM).

====

setting default props

class ReactComp extends React.Component {}
ReactComp.defaultProps = {}

or

class ReactComp extends React.Component {
    static defaultProps = {}
}

or using logical || operators
===


react library or frameworks

React does not solve any structural or architectural problems on the app level. It provides us with a set of methods for better (in my opinion) handling of front-end.

React does not have any Template design pattern.
It does not push app structure in any direction.

It is not only about the fact that React can be V (view) in an MVC, there is no HTML or any other kind of traditional templates in the React.

React approaches building user interfaces differently by breaking them into components. This means React uses a real, full featured programming language to render views (Source)


People have different definitions for library and framework

One definition I know is:

a framework is a software where you plug your code into
a library is a software that you plug into your code
In terms of this definition, React is a framework.

But some people, especially in the front-end world, say a framework has to bring stuff like routers and/or widgets etc. pp.

So Angular, Ember.js and ExtJS are frameworks, but React isn't, because it only gives you the means to build components and render them into the DOM.
===
props and state

props-
props are shorthand for properties.
props allow us to pass custom data to the coomponent.
Props enables us to create Stateless components which are dumb UI component or preseentational component.
One of the most important features of props is that they can be passed by a parent component to its child components
props are fixed throughout its lifecycle.

state-
 the State of a component is an object that holds some information that may change over the lifetime of the component.
Components data will be stored in component's State.
This state can be modified based on user action or other action using setState method.
when a component state is changed React will re-render the component to the browser.

props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function)



differnce
1. Props are immutable i.e. once set the props cannot be changed, state is mutable
2. States can only be used in Class Components while Props don’t have this limitation.
3. While Props are set by the parent component, State is generally updated by event handlers using setState.

when to use state
If a Component needs to alter one of its attributes at some point in time, that attribute should be part of its state, otherwise it should just be a prop for that Component.

why setState is asynchronous

setState actions are asynchronous and are batched for performance gains
setState() does not immediately mutate this.state but creates a pending state transition.

This is because setState alters the state and causes rerendering. This can be an expensive operation and making it synchronous might leave the browser unresponsive.
Thus the setState calls are asynchronous as well as batched for better UI experience and performance.

get the latest value of state;
--
if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made.
this.state.attribute = "new-value";
Thus, React provides its own method setState(). setState() method takes a single parameter and expects an object which should contain the set of values to be updated. Once the update is done the method implicitly calls the render() method to repaint the page. Hence the correct method of updating the value of a state will be similar to the code below.

this.setState({attribute: "new-value"});
===

HOC-
a higher-order component is a function that takes a component and returns a new component.
A higher-order component (HOC) is an advanced technique in React for reusing component logic.
Note that a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.

we can pass props to a wrapped component

Don’t Use HOCs Inside the render Method
React’s diffing algorithm (called reconciliation) uses component identity to determine whether it should update the existing subtree or throw it away and mount a new one. If the component returned from render is identical (===) to the component from the previous render, React recursively updates the subtree by diffing it with the new one. If they’re not equal, the previous subtree is unmounted completely.

Refs Aren’t Passed Through
If you add a ref to an element whose component is the result of a HOC, the ref refers to an instance of the outermost container component, not the wrapped component.
The solution for this problem is to use the React.forwardRef API (introduced with React 16.3).


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
==

1. redux

Redux is a predictable state container for JavaScript applications.

In an app where data is shared among components, it might be confusing to actually
know where a state should live.
Ideally, the data in a component should live in just one component.
So sharing data among sibling components becomes difficult.

The way Redux works is simple.
There is a central store that
holds the entire state of the application.
Each component can access
the stored state without having to send down props from one component to another.

There are three building parts:
actions, store and reducers.

1. Actions in Redux
Simply put, actions are events. They are the only way you can send data from your application to your
Redux store.
The data can be from user interactions, API calls or even form submission.
Actions are sent using `store.dispatch()` method.

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
2. reducers-
Reducers are pure functions that take the current state of an application,
perform an action and returns a new state.
These states are stored as objects and they specify
how the state of an application changes in response to an action sent to the store.

It is based on the reduce function in JavaScript where a single value is gotten
from multiple values after a callback function has carried out.

As pure functions, they do not change the data in the object passed to it or
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

Redux is strict about how code should be organized so it makes it easier for someone with knowledge of Redux to understand the structure of any Redux application. This generally makes it easier to maintain.

Debuggable for days.
Redux makes it easy to debug an application. By logging actions and state, it is easy to understand coding errors, network errors and other forms of bugs that might come up during production.

Ease of testing
It is easy to test Redux apps as functions used to change the state of pure functions.
You can persist some of the app’s state to local storage and restore it after a refresh. This can be really nifty.
Redux can also be used for server-side rendering. With it, you can handle the initial render of the app by sending the state of an app to the server along with its response to the server request. The required components are then rendered in HTML and sent to the clients.



====




============
virtual DOM

Virtual Dom is node tree that lists attribute , elements to properties and object.

The virtual DOM is an in-memory representation of the real DOM.  
The Virtual DOM is an abstraction of the HTML DOM. It is lightweight and detached from the browser-specific implementation details. Since the DOM itself was already an abstraction, the virtual DOM is, in fact, an abstraction of an abstraction.

By comparing changes between a virtual DOM and the real DOM USING DIFFING PROCESS, rendering engines can more efficiently determine what actually needs to be updated. This avoids unnecessary redrawing of DOM nodes as only elements that have changed are redrawn. Without the virtual DOM, every element is redrawn regardless of whether or not it has changed. This adds a huge performance boost to DOM manipulation since redrawing elements is an expensive process.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen.


Dom

The DOM is an interface to an HTML document. It is used by browsers as a first step towards determining what to render in the viewport, and
Javascript programs can modifyit to change  the content, structure, or styling of the page.

The DOM is an object-based representation of the source HTML document. I
The object structure of the DOM is represented by what is called a “node tree”.


What is the Shadow DOM?
The shadow DOM is a way of encapsulating the implementation of web components. Using the shadow DOM, you can hide the implementation details of a web component from the regular DOM tree. A popular example is the HTML5 slider input. While the regular DOM recognizes this as a simple <input/> tag, there is underlying HTML and CSS that make up the slide feature. This sub-tree of DOM nodes is hidden from the main DOM to encapsulate the implementation of the HTML5 slider. Additionally, the CSS properties for the slider are isolated from the rest of the DOM. This provides an isolated scope that prevents the component's styles from overriding other CSS properties defined elsewhere.

The Difference?
While the shadow DOM and virtual DOM are seemingly similar in their creation of separate DOM instances, they are fundamentally different. The virtual DOM creates an additional DOM. The shadow DOM simply hides implementation details and provides isolated scope for web components.
====
reactElement and ReactComponent
What differs ReactComponent from ReactElement is - ReactComponents are stateful.
A ReactElement is a light, stateless, immutable, virtual representation of a DOM Element.

The biggest takeaway is that React elements are simply plain old JavaScript objects used to describe how the HTML for the component should look — there are no methods on the object, just data.

key — the key property is used to uniquely identify specific React elements within an array of the same element types. You don’t have to provide a value for it, but if you do, React will be able to perform optimizations making the re-rendering process more efficient.
props — the props property is exactly what you think it is: it’s a mapping of all the props and values passed down to child components.
ref — the ref property is used to access the underlying DOM element associated with a rendered version of this React element.
type

ReactElements lives in the virtual DOM. They make the basic nodes here. Their immutability makes them easy and fast to compare and update. This is the reason of great React performance.

===
lifting-state-up???

When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

Answers ranging from “it allows to pass data between siblings” to “it allows you to have more pure-presentational components, which make re-usability easier” are preferred.
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

  ==========
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
Flow
constructor
UNSAFE_componentWillMount
render
componentDidMount
shouldComponentUpdate
UNSAFE_componentWillUpdate
getSnapshotBeforeUpdate
renders
componentDidUpdate
UNSAFE_componentWillReceiveProps

These lifecycle methods have often been misunderstood and subtly misused; furthermore, we anticipate that their potential misuse may be more problematic with async rendering. Because of this, we will be adding an “UNSAFE_” prefix to these lifecycles in an upcoming release. (Here, “unsafe” refers not to security but instead conveys that code using these lifecycles will be more likely to have bugs in future versions of React, especially once async rendering is enabled.)

Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
constructor()
componentWillMount()
render()
componentDidMount()

Updating: Updating is the stage when the state of a component is updated and the application is
 repainted.
shouldComponentUpdate
componentWillUpdate
componentDidUpdate

Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.
componentWillUnmount()
  componentDidCatch()

  What are the lifecycle methods of React?
  React 16.3+

  getDerivedStateFromProps: Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need derived state. Worth reading if you need derived state.
  componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
  shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
  getSnapshotBeforeUpdate: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
  componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.
  componentWillUnmount It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.
  Before 16.3

  componentWillMount: Executed before rendering and is used for App level configuration in your root component.
  componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
  componentWillReceiveProps: Executed when particular prop updates to trigger state transitions.
  shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
  componentWillUpdate: Executed before re-rendering the component when there are props & state changes confirmed by shouldComponentUpdate() which returns true.
  componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes.
  componentWillUnmount: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

  ====

Q12. What is PureComponent? When to use PureComponent over Component?

PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for us. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.
When comparing previous props and state to next, a shallow comparison will check that primitives have the same value (eg, 1 equals 1 or that true equals true) and that the references are the same between more complex javascript values like objects and arrays.
It is good to prefer PureComponent over Component whenever we never mutate our objects.
===
Q16. What are controlled and uncontrolled components in React?
This relates to stateful DOM components (form elements) and the difference:
A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange.
 A parent component “controls” it by handling the callback and managing its own state and passing the new values as props to the controlled component.
You could also call this a “dumb component”.

A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function.

For a controlled component the value is passed in through props.

An uncontrolled component would use state to control the value itself internally. This is the key difference

A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it.
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

===
How would you write an inline style in React?

Add to PDF/md 	  		  	Entry

For example:

<div style={{ height: 10 }}>


===
context
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

const MyContext = React.createContext(defaultValue);
<MyContext.Provider value={/* some value }> in app.js

const ThemeContext = React.createContext('light');

components

static contextType = ThemeContext;

  render() {
    return <Button theme={this.context} />;
  }
}

Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

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

One way to solve this issue without context is to pass down the Avatar component itself so that the intermediate components don’t need to know about the user or avatarSize props:

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

The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when we need direct access to DOM element or an instance of a component.

===
What is JEST?

Jest is a JavaScript unit testing framework made by Facebook based on Jasmine and provides automated mock creation and a jsdom environment. It's often used for testing React components.

==
When rendering a list what is a key and what is it's purpose?

Add to PDF/md 	  		  	Junior

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.

render () {
  return (
    <ul>
      {this.state.todoItems.map(({task, uid}) => {
        return <li key={uid}>{task}</li>
      })}
    </ul>
  )
}

Most often you would use IDs from your data as keys. When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort. It is not recommend to use indexes for keys if the items can reorder, as that would be slow.
======
Q31: How do you prevent the default behavior in an event callback in React?

Add to PDF/md 	  		  	Junior

You call e.preventDefault(); on the event e passed into the callback.
=====
Q32: How would you prevent a component from rendering in React? 	
           Junior

Return null from the render method.
=====
flux
Flux is an architecture that Facebook uses internally when working with React. It is not a framework or a library. It is simply a new kind of architecture that complements React and the concept of Unidirectional Data Flow.

Actions - Helper methods that facilitate passing data to the Dispatcher
Dispatcher - Receives actions and broadcasts payloads to registered callbacks
Stores - Containers for application state & logic that have callbacks registered to the dispatcher
Controller Views - React Components that grab the state from Stores and pass it down via props to child components.
==
Q46: How to create refs?

Add to PDF/md 	  		  	Junior

Refs are created using React.createRef() method and attached to React elements via the ref attribute. In order to use refs throughout the component, just assign the ref to the instance property with in constructor.

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

Add to PDF/md 	  		  	Junior

A child class constructor cannot make use of this reference until super() method has been called.
 The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super()
  call is to access this.props in your child constructors.


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

 The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.


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
This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

ReactDOM.render(element, container[, callback])
If the optional callback is provided, it will be executed after the component is rendered or updated.
===

What are fragments?

It's common pattern in React which is used for a component to return multiple elements.
 Fragments let you group a list of children without adding extra nodes to the DOM.

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
 components with a special type syntax, and catch mistakes early. You can read an introduction to Flow to learn its basics.

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
  they usually don't render DOM elements; they delegate rendering to presentational child components.
===
How do you tell React to build in Production mode and what will that do?
https://reactjs.org/docs/optimizing-performance.html

When you want to build your app in production mode, you should use webpack production shortcut. Like this:

webpack -p
===
Normally, when we want to update our component we just call setState with a new value by passing in an object to the setState function: this.setState({someField:someValue})
But, often there is a need to update our component’s state using the current state of the component. Directly accessing this.state to update our component is not a reliable way to update our component’s next state. From the React documentation:

Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

submit(){
   this.setState(function(prevState, props){
      return {showForm: !prevState.showForm}
   });
}
Passing in a function into setState instead of an object will give you a reliable value for your component’s state and props.

=====



18. What is React.cloneElement? And the difference with this.props.children?
React.cloneElement clone and return a new React element using using the passed element as the starting point.
The resulting element will have the original element's props with the new props merged
in shallowly. New children will replace existing children. key and ref from the original
element will be preserved.
React.cloneElement only works if our child is a single React element.
For almost everything {this.props.children} is the better solution. Cloning is useful
in some more advanced scenarios, where a parent send in an element and the child component
 needs to change some props on that element or add things like ref for accessing the actual DOM element.

this.props.children

this.props.children does is that it is used to display whatever you include between the opening and closing tags when invoking a component.

jsx-
JSX produces React “elements”.
JSX is simply converting XML-like markup into JavaScript.
asically, by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures)
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
By adding a JSX transformation step you'll find errors in your HTML you might otherwise miss.
JSX promotes the idea of inline styles. Which can be a good thing.

conditional operator=

if else

Element Variables

Inline If with Logical && Operator
You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element:

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
