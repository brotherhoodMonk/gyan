Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.
 Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
==
 How to create an instance of Vue.js?

Every Vue application starts by creating a new Vue instance with the Vue function:

var vm = new Vue({
  // options
})
===
Features
Following are the features available with VueJS.

Virtual DOM
VueJS makes the use of virtual DOM, which is also used by other frameworks such as React, Ember, etc. The changes are not made to the DOM, instead a replica of the DOM is created which is present in the form of JavaScript data structures. Whenever any changes are to be made, they are made to the JavaScript data structures and the latter is compared with the original data structure. The final changes are then updated to the real DOM, which the user will see changing. This is good in terms of optimization, it is less expensive and the changes can be made at a faster rate.

Data Binding
The data binding feature helps manipulate or assign values to HTML attributes, change the style, assign classes with the help of binding directive called v-bind available with VueJS.

Components
Components are one of the important features of VueJS that helps create custom elements, which can be reused in HTML.

Event Handling
v-on is the attribute added to the DOM elements to listen to the events in VueJS.

Animation/Transition
VueJS provides various ways to apply transition to HTML elements when they are added/updated or removed from the DOM. VueJS has a built-in transition component that needs to be wrapped around the element for transition effect. We can easily add third party animation libraries and also add more interactivity to the interface.

Computed Properties
This is one of the important features of VueJS. It helps to listen to the changes made to the UI elements and performs the necessary calculations. There is no need of additional coding for this.

Templates
VueJS provides HTML-based templates that bind the DOM with the Vue instance data. Vue compiles the templates into virtual DOM Render functions. We can make use of the template of the render functions and to do so we have to replace the template with the render function.

Directives
VueJS has built-in directives such as v-if, v-else, v-show, v-on, v-bind, and v-model, which are used to perform various actions on the frontend.

Watchers
Watchers are applied to data that changes. For example, form input elements. Here, we don’t have to add any additional events. Watcher takes care of handling any data changes making the code simple and fast.

Routing
Navigation between pages is performed with the help of vue-router.

Lightweight
VueJS script is very lightweight and the performance is also very fast.

Vue-CLI
VueJS can be installed at the command line using the vue-cli command line interface. It helps to build and compile the project easily using vue-cli.
===
Explain Vue.js reactivity and common issues when tracking changes.

All properties defined in a Vue instance’s data option are reactive, meaning that if they change, the component is automatically updated and re-rendered as needed.

All such properties are converted to getters and setters during initialization, thus allowing Vue to detect when those properties are accessed or changed.

The following limitations must be accounted for when designing a Vue app:

Vue cannot detect object property addition or deletion due to a JavaScript limitation, so the Vue.set method must be used to add new root-level reactive properties.
Similarly, Vue cannot detect when an array item is modified using an index. Vue.set must be used here as well.
===
virtual DOM

The virtual DOM is a tree-like data structure (or a collection) of JavaScript objects representing DOM nodes that are managed by Vue.js and that should be rendered on the page. These objects are called “virtual nodes” or VNodes for short.

The main purpose of the virtual DOM is faster and more efficient DOM manipulation. When there are lots of nodes in the DOM, updating them can be expensive in terms of processing power and resources required.

Working with the virtual DOM JavaScript object is significantly faster. Subsequently, Vue.js organizes DOM updates in batches for more efficiency.

===

computed
1. In fact, when the Vue is instantiated, computed properties are converted into a property of the Vue with
a getter and sometimes a setter.
2. Basically you can think of a computed value as a derived value that will be automatically updated
 whenever one of the underlying values used to calculate it is updated.

3. Computed values are also cached to avoid repetitively calculating a value that doesn't need to be re-calculated when it hasn't changed (as it might not be in a loop for example).

Computed properties are getter function in Vue instance rather than actual methods. we can define the same function as a method instead. However, the difference is that computed properties are cached based on their dependencies. A computed property will only re-evaluate when some of its dependencies have changed. In comparison, a method invocation will always run the function whenever a re-render happe


Method

A method is just a function bound to the Vue instance. It will only be evaluated when you explicitly
 call it. Like all javascript functions it accepts parameters and will be re-evaluated every time
  it's called. Methods are useful in the same situations any function is useful.

===
What is $parent in Vue?

Similar to $root, the $parent property can be used to access the parent instance from a child.

Although it provides direct access, it makes the application hard to test and debug. And we can not easily find out the where the mutation come from.

Vue also provides $child just like $parent, but it can be used to access the child instance.
===
