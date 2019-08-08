1. redux

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
perform an action and returns a new state. These states are stored as objects and they specify
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
In Redux, the state is always predictable.
If the same state and action are passed to a reducer,
 the same result is always produced as reducers are pure functions.
 The state is also immutable and is never changed. This makes it possible to implement
  arduous tasks like infinite undo and redo. It is also possible to implement time travel that is, the ability to move back and forth among the previous states and view the results in real-time.
  uses/advantages
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

============
Most of your components should simply take some data from props and render it.
 However, sometimes you need to respond to user input,
 a server request or the passage of time. For this you use state.

 try to keep as many of your components as possible stateless.
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


Lifecycle-
Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
Updating: Updating is the stage when the state of a component is updated and the application is repainted.
Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

Q12. What is PureComponent? When to use PureComponent over Component?
PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for us. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.
When comparing previous props and state to next, a shallow comparison will check that primitives have the same value (eg, 1 equals 1 or that true equals true) and that the references are the same between more complex javascript values like objects and arrays.
It is good to prefer PureComponent over Component whenever we never mutate our objects.

Q16. What are controlled and uncontrolled components in React?
This relates to stateful DOM components (form elements) and the difference:
A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component “controls” it by handling the callback and managing its own state and passing the new values as props to the controlled component.
You could also call this a “dumb component”.

For a controlled component the value is passed in through props. An uncontrolled component would use state to control the value itself internally. This is the key difference

A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
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

18. What is React.cloneElement? And the difference with this.props.children?
React.cloneElement clone and return a new React element using using the passed element as the starting point. The resulting element will have the original element's props with the new props merged in shallowly. New children will replace existing children. key and ref from the original element will be preserved.
React.cloneElement only works if our child is a single React element.
For almost everything {this.props.children} is the better solution. Cloning is useful in some more advanced scenarios, where a parent send in an element and the child component needs to change some props on that element or add things like ref for accessing the actual DOM element.

jsx-
JSX produces React “elements”.
JSX is simply converting XML-like markup into JavaScript.
asically, by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures) in the same file as you write JavaScript code,
Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.
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
By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that
you can never inject anything that’s not explicitly written in your application. Everything is
converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

JSX Represents Objects
Babel compiles JSX down to React.createElement() calls.

The merits of JSX in four bullet points:
Less technical people can still understand and modify the required parts. CSS developers and designers will find JSX more familiar than JavaScript alone. I.e., HTML markup looks like HTML markup.
You can leverage the full power of JavaScript in HTML and avoid learning or using a templating language. JSX is not a templating solution. It is a declarative syntax used to express a tree structure of UI components.
By adding a JSX transformation step you'll find errors in your HTML you might otherwise miss.
JSX promotes the idea of inline styles. Which can be a good thing.

conditional operator=

if else

Element Variables

Inline If with Logical && Operator
You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element:

Inline If-Else with Conditional Operator

Keys
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:


What are the major features of React?
The major features of React are:

It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.
Supports server-side rendering.
Follows Unidirectional* data flow or data binding.
Uses reusable/composable UI components to develop the view.


What is the difference between Element and Component?
An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.

The object representation of React Element would be as follows:
const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)
And finally it renders to the DOM using ReactDOM.render():

<div id='login-btn'>Login</div>
