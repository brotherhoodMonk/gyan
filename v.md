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