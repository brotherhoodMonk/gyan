component-
1. Components are the most basic building block of an UI in an Angular application.
2. A component controls a patch of screen called a view.
3. , it is a basically a class which is defined to be visible in any elements in the screen or browsers.
3.  An Angular application is a tree of Angular components.
4.  Angular components are a subset of directives. Unlike directives, components always have a template
and only one component can be instantiated
  per an element in a template.
5. Components are defined using the @component decorator. A component has a selector, template, style and other properties,
 using which it specifies
the metadata required to process the component.
Components are typically used to create UI widgets	Directive
====
Directives-
At the core, a directive is a function that executes whenever the Angular compiler finds it in the DOM.
Angular directives are used to extend the power of the HTML by giving it new syntax.
There are three kinds of directives in Angular:
Components— directives with a template.
Structural directives— change the DOM layout by adding and removing DOM elements.asterisk (* ) precedes  NgFor and NgIf,
 NgSwitch
Attribute directives— change the appearance or behavior of an element, component, or another directive. NgStyle

custom directive--
ng g directive name
ElementRef grants direct access to the host DOM element through its nativeElement property.
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}
<p appHighlight>Highlight me!</p>


What are the differences between Component and Directive?
In a short note, A component(@component) is a directive-with-a-template.

Some of the major differences are mentioned in a tabular form

Component	Directive
1. To register a component we use @Component meta-data annotation	To register directives we use @Directive meta-data
annotation
2. Components are typically used to create UI widgets
Directive is used to add behavior to an existing DOM element
3Component is used to break up the application into smaller components
Directive is use to design re-usable components
Only one component can be present per DOM element.	Many directives can be used per DOM element
@View decorator or templateurl/template are mandatory	Directive doesn't use View

selector:-
 A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding
  tag in template HTML.
so selector is just provide the name of the component which is being called by its className in the directives list and
 called by selector
name in the view of the another
====
1. AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by angular
community.
It aims to simplify both the development and the testing of such applications
 by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM)
 architectures.
 The AngularJS framework works by first reading the Hypertext Markup Language page,
  which has additional custom HTML attributes embedded into it. Angular interprets those attributes as
  directives to bind input or output parts of the page to a model that is represented by standard
  JavaScript variables. The values of those JavaScript variables can be manually set within the code,
  or retrieved from static or dynamic JSON resources.

The framework adapts and extends traditional HTML to present dynamic content through two-way data-binding that allows
 for the automatic
 synchronization of models and views.
 ===
 As a result,
Template reference variables
What is component decorators

 diff between constructor and ngOnInit?
  dependency injection
  Dependency Hierarchy formed
  async pipe
  interpolation
  observables
  HttpClient
  RxJS
  difference between promise and observable
multicasting
angular elements
custom elements

-=====
angular  library used
alertify.js
bower
angular-ckeditor
angular-file-upload
font-awesome
js-logger
ng-material
sortablejs
moment
-------
angular folder structure -

packg.json
src - app/ component/middlewares/ services main.ts - app.js
public - index.html
node modules
===========
2. Reactive- model-driven forms and Template-Driven Forms
What Are Angular Reactive Forms?
Reactive forms are also known as model-driven forms. This means that the HTML content changes
depending on the code in the component.

What Are Angular Template-Driven Forms?
Template-driven forms are driven by derivatives in the template. This means that you will see derivatives such as
ngModel in the
 template as opposed to the code.

Differences Between Template-Driven and Reactive Forms
Template-driven forms use the FormsModule, while reactive forms use the ReactiveFormsModule.
Template-driven forms are asynchronous, while reactive forms are synchronous.
In template-driven forms, most of the interaction occurs in the template,
while in reactive-driven forms, most of the interaction occurs in the component.

3. Advantages and Disadvantages of Template-Driven Forms
Although template forms are easier to create, they become a challenge when you want to do unit testing,
because testing requires the presence of a DOM.

Advantages and Disadvantages of Reactive Forms
It's easier to write unit tests in reactive forms since all the form code and functionality is contained in the component.
 However, reactive forms require more coding implementation in the component.

Simply we can say

Reactive form can be used in the following situation

Complex forms with more number of fields.
Multiple complex validation are there. Custom validations are required
Require JSON structure to be send with the values in the form.

Template Driven Form : It can be used when using simple forms. Like login page. With the two way data binding.
We can simply assign value to variable from ui and vice versa.

Simple example is if we are givng two way binding for the below input.

Template Driven Forms Features

Easy to use
Suitable for simple scenarios and fails for complex scenarios
Similar to AngularJS
Two way data binding(using [(NgModel)] syntax)
Minimal component code
Automatic track of the form and its data(handled by Angular)
Unit testing is another challenge

Reactive Forms Features

More flexible, but needs a lot of practice
Handles any complex scenarios
No data binding is done (immutable data model preferred by most developers)
More component code and less HTML markup
Reactive transformations can be made possible such as
Handling a event based on a debounce time
Handling events when the components are distinct until changed
Adding elements dynamically
Easier unit testing

4. FormArray vs FormFroup
FormArray is a variant of FormGroup. The key difference is that its data gets serialized as
an array (as opposed to being serialized as an object in case of FormGroup). This might be especially
useful when you don’t know how many controls will be present within the group, like dynamic forms.

FormArray offers more flexibility than FormGroup in the sense that it is easier to manipulate
FormControls using "push", "insert" and "removeAt" than using FormGroup's "addControl",
"removeControl", "setValue" etc. FormArray methods ensure the controls are properly tracked in the
form's hierarchy.

5. Form Control
FormControl are the basic building blocks of a reactive form or a form in general. Think of them as input box, select box,
radio buttons, dropdown etc.
Under the hood it’s a class which tracks a particular form control and keeps track of its validity and values.

6. Form Group
FormGroup is a collection/group of FormControls. It also offers many api’s such as tracking validity and values of the whole
formGroup.

FormArray
Verbatim from angular docs It tracks the value and validity state of an array of FormControl instances.
However I would later show how that definition is not accurate and it should be Tracks the value and validity state of an array of
 FormControl/FormGroup/FormArray instances.

RULE 1: Whenever there is a formControl(smallest entity of a form like an input) with any other
 basic block like FormControl, FormGroup, FormArray. We have to nest them under a FormGroup.
RULE 2: Whenever you find yourself saying something like X has many Y, that is when you should
know you are looking at a possible FormArray of Y inside X(where X is almost always a FormGroup).
==================
what is NgModule

1.As applications started to become more and more complex, it became evident that all applications should be divided into
modules. Each module is a small mini application on its own, but now you can bundle all these mini-applications to make your
 larger application.
2. A module in angular consists of components or other module's components
3. A module (or @NgModule) in itself is nothing but just a briefcase containing a bunch of components, and really,
 the components are what actually your application is made of.
4. Basic NgModule usage looks like this:
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ MyComponent ],
  bootstrap: [ MyComponent ]
})
class MyAppModule {}
  This decorator tells Angular two important things about your application:

  declarations tell angular that MyComponent belongs to the MyAppModule

  bootstrap advises angular that when it creates this module at startup, we want to automatically bootstrap MyComponent
   into the DOM.
-------
declarations: The components, directives, and pipes that belong to this NgModule.

exports: The subset of declarations that should be visible and usable in the component templates of other NgModules.

imports: Other modules whose exported classes are needed by component templates declared in this NgModule.

providers: Creators of services that this NgModule contributes to the global collection of services; they become
 accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)

bootstrap: The main application view, called the root component, which hosts all other app views. Only the
root NgModule should set the bootstrap property.

====
What is JIT?
Just-in-Time (JIT) is a type of compilation that compiles your app in the browser at runtime. JIT compilation is the default when you run the ng build (build only) or ng serve (build and serve locally) CLI commands. i.e, the below commands used for JIT compilation,
ng build
ng serve
arrow_up Back to Top

What is AOT?
Ahead-of-Time (AOT) is a type of compilation that compiles your app at build time. For AOT compilation, include the --aot option with the ng build or ng serve command as below,
ng build --aot
ng serve --aot
Note: The ng build command with the --prod meta-flag (ng build --prod) compiles with AOT by default.

What are the advantages with AOT?
Below are the list of AOT benefits,
Faster rendering: The browser downloads a pre-compiled version of the application. So it can render the application immediately without compiling the app.
Fewer asynchronous requests: It inlines external HTML templates and CSS style sheets within the application javascript which eliminates separate ajax requests.
Smaller Angular framework download size: Doesn't require downloading the Angular compiler. Hence it dramatically reduces the application payload.
Detect template errors earlier: Detects and reports template binding errors during the build step itself
Better security: It compiles HTML templates and components into JavaScript. So there won't be any injection attacks.
===
7. What is Traceur compiler?
Traceur compiler is a Google project. It compiles ECMAScript Edition 6 (ES6) (including classes, generators and so on) code
 on the fly to regular
 Javascript (ECMAScript Edition 5 [ES5]) to make it compatible for the browser.
Traceur itself is written in ES6, compiled to ES5.
====
what is RXJS
1. RXjs Is reactive Extension for Javscrpt and it is library used by many developer in angular
2. Rxjs provide functional and reactive programming pattern for working with events and stream of data.
3. Rxjs make uses of observer design pattern to handle such data.
4. the observer pattern is a software design pattern in which an object called subject maintains the list of dependancy
called observers.
So whenever there is changes in the state, it notifies automatically to the observers usually by calling their method.
===
What are the utility functions provided by RxJS? uses of rxjs
The RxJS library also provides below utility functions for creating and working with observables.
Converting existing code for async operations into observables
Iterating through the values in a stream
Mapping values to different types
Filtering streams
Composing multiple streams
=====
What is subscribing?

1. An observable instance start to publish value, when an suscriber is suscribe to it.
2. So we need to suscribe by calling  suscribe* method of an instance , passig an observer object to create notification.
Creates an observable sequence of 5 integers, starting from 1
const source = range(1, 5);
const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

source.suscribe(myObserver);
======
What is Observable

1. An Observable is an entity that emits or publishes multiple data values stream of data over time and asynchronously.
2. An Observable is a unique Object similar to a Promise that can help manage async code.
3. The observables are created Usingg nw keyword
4. Observables open up a continuous channel of communication in which multiple values of
data can be emitted over time.

const observable = new Observable(observer => {
  setTimeout(() => {
    observer.next('Hello from a Observable!');
  }, 2000);
});
========
Observer

1. Observers are also called listeners or consumers as they can listen or subscribe to get the observed data.
2. Observer is a collection of callbacks that knows how to listen to values delivered by the Observable.
3.Observer  Execute some code whenever recieve new value or error
Obesrvables invokes this methods
next()- whenever new value is immited
error()- throes error
complete()p- whenever observable is done

====
what is Subject
1. An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers
1. A Subject is a special type of Observable that observers can also subscribe to it to receive published
values but with one
difference:
The values are multicasted to many Observers.
2 An Observable is a unique Object similar to a Promise that can help manage async code
3. By default an RxJS Observable is unicast.
===
unicast vs multicast

1. Unicast simply means that each subscribed observer has an independent execution of the Observable while
2. multicast means that the Observable execution is shared by multiple Observers.

3. Multi-casting is the practice of broadcasting to a list of multiple subscribers in a single execution
4. With a multicasting observable, you don't register multiple listeners on the document, but instead re-use the first
listener and send values out to each subscriber.
====
what is subscription

Subscriptions are objects that are returned when you subscribe to an Observable. They contain many methods such as the
 unsubscribe()
method that you can call to unsubscribe from receving published values from the Observable.
=====
How do Observables differ from Promises?
Answer:
1. As soon as a promise is made, the execution takes place.
- .  However, this is not the case with observables
 because they are lazy. This means that nothing happens until a subscription is made.
2. While promises handle a single event,
-   observable is a stream that allows passing of more than one event. A callback is made for each event in an observable.
3. Subscribe method is used for error handling which makes centralized and predictable error handling
- need to reject promise for error handling
4. Provides chaining and subscription to handle complex applications
- Uses only .then() clause

===

Hot and Cold Observables

Unlike regular Observables, Subjects are called hot. A hot Observable starts emitting events even before any observer subscribes
to it which means observers may lose previous emitted values if they don’t subscribe at that right time
 while cold Observables ****start emitting values when at least one observer is subscribed.
=======
What are observable creation functions?
RxJS provides creation functions for the process of creating observables from things such as promises, events,
 timers and Ajax requests. Let us explain each of them with an example,
1. promise- from //import { from } from 'rxjs';
2. AJAX request - ajax //import { ajax } from 'rxjs/ajax';
3. counter - interval //import { interval } from 'rxjs';
4. event - fromEvent//import { fromEvent } from 'rxjs';

Create an observable from a promise
import { from } from 'rxjs'; // from function
const data = from(fetch('/api/endpoint')); //Created from Promise
data.subscribe({
 next(response) { console.log(response); },
 error(err) { console.error('Error: ' + err); },
 complete() { console.log('Completed'); }
});

Create an observable that creates an AJAX request
import { ajax } from 'rxjs/ajax'; // ajax function
const apiData = ajax('/api/data'); // Created from AJAX request
// Subscribe to create the request
apiData.subscribe(res => console.log(res.status, res.response));

Create an observable from a counter
import { interval } from 'rxjs'; // interval function
const secondsCounter = interval(1000); // Created from Counter value
secondsCounter.subscribe(n =>
  console.log(`Counter value: ${n}`));

Create an observable from an event
import { fromEvent } from 'rxjs';
const el = document.getElementById('custom-element');
const mouseMoves = fromEvent(el, 'mousemove');
const subscription = mouseMoves.subscribe((e: MouseEvent) => {
  console.log(`Coordnitaes of mouse pointer: ${e.clientX} * ${e.clientY}`);
  });
===
What will happen if you do not supply handler for observer?
Normally an observer object can define any combination of next, error and complete notification type handlers.
If you don't supply a handler for a notification type, the observer just ignores notifications of that type.

====
ReplaySubject works by using a buffer that keeps the emitted values and re-emit them when new Observers are subscribed.

BehaviorSubject works like ReplaySubject but only re-emits the last emitted value.

An observer is a plain JavaScript object that contains methods such as next(), complete() and error().
This means it knows how to get notified by the Observable.

getItems(): Observable<Item[]> {
   return this.httpClient.get<Item[]>(this.itemUrl);
}

getItems(): Observable {
  this.items$ = this.httpClient.get(this.itemUrl);
}
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
getItems(): Observable> {
  return this.aService.getItems().pipe(map(response => response.data));
}

8. Observables

Obesrvables - some wrapper over data values(stream of data values)
we specially use for asynchronius data

Observer-
Execute some code whenever recieve new value or error
Obesrvables invokes this methods
next()- whenever new value is immited
error()- throes error
complete()p- whenever observable is done

subscription
 Using the subscribe method we tell the Observables someone is caring about the value or listening to thje value.,

As seen above ... an Observable is a stream of events or data. They are often returned from Angular methods, such as the http.get and the myinputBox.
valueChanges.
Without a subscribe (or an async pipe) the stream won't start emitting values.

Angular makes use of observables as an interface to handle a variety of common asynchronous operations.

Observables provide support for passing messages between publishers and subscribers in your application.
Observables are declarative—that is, you define a function for publishing values, but it is not executed until
 a consumer subscribes to it. The subscribed consumer then receives notifications until the function completes,
  or until they unsubscribe.
An observable can deliver multiple values of any type—literals, messages, or events, depending on the context.

Observables open up a continuous channel of communication in which multiple values of
data can be emitted over time. From this we get a pattern of dealing with data by using
array-like operations to parse  , modify and maintain data.
Observables provide support for passing messages between publishers and subscribers
in your application. Observables offer significant benefits over other techniques for event handling, asynchronous programming,
and handling multiple values.
Observables are declarative—that is, you define a function for publishing values, but it is not executed until a consumer subscribes to it.

An observable can deliver multiple values of any type—literals, messages, or events, depending on the context

next	Required. A handler for each delivered value. Called zero or more times after execution starts.
error	Optional. A handler for an error notification. An error halts execution of the observable instance.
complete	Optional. A handler for the execution-complete notification. Delayed values can continue to be delivered to the
next handler after execution is complete.

var observer = {
  next : (value) => {
    console.log(value);
  },
  error : (error) => {
    console.log(error);
  },
  complete : () => {
    console.log(completed);
  }
}
var subscribe = Rx.Observable.create((obs) => {
  obs.next('a value');
  obs.error('an error');
  }).subscribe(observer);

  subscribe.unsubscribe();
  ====
  version 9
  With the release of Angular 9, Ivy is now the default compiler and runtime. Ivy improves bundle size, allows for better
  debugging, adds improved type checking, faster testing, enables the AOT compiler on by default, and improves CSS class
  and style binding.

All the major releases are supported for 18 months. This consists of 6 months of active support, during which
regularly-scheduled updates and patches are released. It is then followed by 12 months of long-term support (LTS),
 during which only critical fixes and security patches are released.[23]

  Version	Status	Released	Active Ends	LTS Ends
  ^9.0.0	Active (LTS)	Feb 6, 2020	Jul 6, 2020	Jul 6, 2021
  ^8.0.0	LTS	May 28, 2019	Nov 28, 2019	Nov 28, 2020
  ^7.0.0		Oct 18, 2018	April 18, 2019	Apr 18, 2020
  ^6.0.0	LTS	May 3, 2018	Nov 3, 2018	Nov 3, 2019
==
#Multicasting
Multicasting is the practice of broadcasting to a list of multiple subscribers in a single execution.


When creating an observable you should determine how you want that observable to be used and whether or not you want
to multicast its values.
===

9. Angular Life Cycle-

A component in Angular has a life-cycle, a number of different phases it goes through from birth to death.
Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change,
and destroys it before removing it from the DOM

1. constructor
This is invoked when Angular creates a component or directive by calling new on the class.

2. ngOnChanges
Invoked every time there is a change in one of th input properties of the component
Called before ngOnInit() and whenever one or more data-bound input properties change.

3. ngOnInit
Invoked when given component has been initialized.
This hook is only called once after the first ngOnChanges

ngDoCheck
Invoked when the change detector of the given component is invoked.
It allows us to implement our own change detection
algorithm for the given component.

ngDoCheck and ngOnChanges should not be implemented together on the same component.

ngOnDestroy
This method will be invoked just before Angular destroys the component.
Use this hook to unsubscribe observables and detach event handlers to avoid memory leaks.

ngAfterContentInit()
Respond after Angular projects external content into the component's view .
Called once after the first ngDoCheck*.

ngAfterContentChecked()
Respond after Angular checks the content projected into the directive/component.

ngAfterViewInit()
Respond after Angular initializes the component's views and child views / the view that a directive is in.
Called once after the first ngAfterContentChecked*.

ngAfterViewChecked()
Respond after Angular checks the component's views and child views / the view that a directive is in.
Called after the ngAfterViewInit* and every subsequent ngAfterContentChecked*.

ngOnDestroy*
Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
Called just before Angular destroys the directive/component.
====
10. @input and @output

Pass data from parent to child with input binding
@Input links a property of a component
(which is generally the child component) with a value that was given by another component the parent.

@Input is used to pass data from parent to child and the opposite,
@Output, can be used when you want to pass data from the child to the parent

@output

@Output decorator is used to link a property of a child component and emit it through the event emitter.
So the parent component can call the property and get the data emitted from it.

Parent listens for child event
The child component exposes an EventEmitter property with which it emits events when something happens.
The parent binds to that event property and reacts to those events.
The child's EventEmitter property is an output property, typically adorned with an
 @Output decoration as seen in this VoterComponent:


Parent interacts with child via local variable
A parent component cannot use data binding to read child properties or invoke child methods.
You can do both by creating a template reference variable for the child element and then reference
 that variable within the parent template as seen in the following example.

 Parent calls an @ViewChild()
The local variable approach is simple and easy. But it is limited because the parent-child wiring must be done
entirely within the parent template. The parent component itself has no access to the child.

You can't use the local variable technique if an instance of the parent component class must read or write child
component values or must call child component methods.

When the parent component class requires that kind of access, inject the child component into the parent as a ViewChild.



parent---
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-test-component',
  templateUrl: `  <app-child-test-component [anotherMessage]="parentTestMessage"
  (changeValueFromChild)="changeTheValue($event)" [messageFromParent]="parentMessage">
  </app-child-test-component>
`,
  styleUrls: ['./parent-test-component.component.css']
})
export class ParentTestComponentComponent implements OnInit {

  constructor() { }
  parentMessage = "hello";
  parentTestMessage = "hello bhaisab";
  ngOnInit() {
  }

  changeTheValue(params) {
    console.log('params-in parent-- ', params);
  }
}

child----

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-test-component',
  templateUrl: `<p>
    child-test-component works! {{messageFromParent}}---{{anotherMessage}}
    <button type="button" (click)="sendEventToParent(messageFromParent)" name="button">click child</button>
  </p>`,
  styleUrls: ['./child-test-component.component.css']
})
export class ChildTestComponentComponent implements OnInit {
  @Input() messageFromParent : string;
@Input() anotherMessage : string;
@Output() changeValueFromChild = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendEventToParent(params) {
    this.changeValueFromChild.emit(params);
  }

}
====
11. factories and services

Services -
Singleton objects in Angular that get instantiated only once during the lifetime of an application are called services.
An Angular service
contains methods that maintain the data throughout the life of an application.

The primary intent of an Angular service is to organize as well as share business logic, models, or data and functions
 with various components of an Angular application.

The functions offered by an Angular service can be invoked from any Angular component, such as a controller or directive.
=====
 * They both allow us to create an object that can then be used anywhere in our app.
 * a service is a constructor function whereas a factory is not.
 * It turns out that it’s actually better to use services where possible, when it
  comes to migrating to ES6. The reason for that is simply that a service is a constructor
  function and a factory is not. Working with constructor functions in ES5 allows us to easily
  use ES6 classes when we migrate to ES6.
A component can delegate certain tasks to services, such as fetching data from the server,
 validating user input, or logging directly to the console. By defining such processing tasks
 in an injectable service class, you make those tasks available to any component.

 import { Injectable } from '@angular/core';

 @Injectable({
   providedIn: 'root',
 })
 export class HeroService {

   constructor() { }

 }

 12. Services
 Syntax: module.service( 'serviceName', function );
 Result: When declaring serviceName as an injectable argument you will be provided the
 actual function reference passed to module.service.
 Usage: Could be useful for sharing utility functions that are useful to invoke by simply appending ()
 to the injected function reference.
 Could also be run with injectedArg.call( this ) or similar.

 Factories
 Syntax: module.factory( 'factoryName', function );
 Result: When declaring factoryName as an injectable argument you will be provided the value that is returned
  by invoking the function reference passed to module.factory.
 Usage: Could be useful for returning a 'class' function that can then be new'ed to create instances.

 Providers
 Syntax: module.provider( 'providerName', function );
 Result: When declaring providerName as an injectable argument you will be provided the value that is
  returned by invoking the $get method of
  the function reference passed to module.provider.
 Usage: Could be useful for returning a 'class' function that can then be new'ed to create instances but that
 requires some sort of
  configuration before being injected. Perhaps useful for classes that are reusable across projects? Still kind of
   hazy on this one.


  Used for the business layer of the application, the service() function operates as a constructor function.
  The function is invoked at runtime using the new keyword.

Although the factory() function works in pretty much the same way as the service() function does,
 the former is more flexible and powerful. In actual, the factory() function are design patterns that help in creating objects.
=====
forRoot=== https://stackoverflow.com/questions/40498081/routermodule-forrootroutes-vs-routermodule-forchildroutes

No problems with eagrly loaded module.
but problem lies with the Lazy loaded modules.
when lazy loded module is loaded another instance of the service is created.
To prevent creation of another instance of the service or to use the single instance of the
service throughout application we should use forRoot method .
-----
If the RouterModule didn’t have forRoot() then each route component would instantiate a new Router instance,
which would break the application as there can only be one Router. For this reason, the RouterModule has the
 RouterOutlet declaration so that it is available everywhere, but the Router provider is only in the forRoot().
  The result is that the root application module imports RouterModule.forRoot(...) and gets a Router, whereas all
  route components import RouterModule which does not include the Router.

Angular services are loaded onto the page 1 time (singleton) and all references point back to this 1 instance.

There is a risk that a lazy loaded module will try to create a 2nd instance of what should be a singleton, and the forRoot()
method is a way to ensure that the app module / shared module / and any lazy loaded module all use the same 1 instance
(the root instance).

The best approach is to create module with providers. Keep in mind that if your service is in shared module, you may get
multiple instances of it. Best idea then is to configure module with Module.forRoot.

By convention, the forRoot static method both provides and configures services at the same time. It takes a service
configuration object and returns a ModuleWithProviders.


-------------------\

lazy loaded module

So we know that Angular creates its own injector for the lazy loaded modules. This happens because Angular generates a
 separate factory for each loaded module.
  It means that providers defined in such module are not merged into the main module injector. So if a lazy loaded module
   defines a provider with the same token as in the root module, Angular will create a new instance of that service even
    if there’s already one in the main module injector.

https://indepth.dev/avoiding-common-confusions-with-modules-in-angular/

@NgModule({})
class A {
  static forRoot() {
    return {ngModule: A, providers: [AService]};
  }
  static forChild() {
    return {ngModule: A, providers: [BService]};
  }
}

@NgModule({
  imports: [A.forRoot()]
})
export class NonLazyLoadedModule {}

@NgModule({
  imports: [A.forChild()]
})
export class LazyLoadedModule {}
====
What is lazy loading?
Lazy loading is one of the most useful concepts of Angular Routing. It helps us to download the web pages in chunks instead of downloading everything in a big bundle. It is used for lazy loading by asynchronously loading the feature module for routing whenever required using the property loadChildren. Let's load both Customer and Order feature modules lazily as below,

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(module => module.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(module => module.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
==
13. Dependancy Injector-
https://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html
 1. It allows us to inject dependencies in different components across our applications,
 without needing to
 know, how those dependencies are created, or what dependencies they need themselves.
 2 An injector creates dependencies using providers. Providers are recipes that know how to create dependencies
 4. DI is wired into the Angular framework and used everywhere to provide new components with
  the services or other things they need.
  5. The DI in Angular basically consists of three things:

  Injector - The injector object that exposes APIs to us to create instances of dependencies.
  Provider - A provider is like a recipe that tells the injector how to create an instance of a
           dependency. A provider takes a token and maps that to a factory function that creates an
           object.
  Dependency - A dependency is the type of which an object should be created.

3. Components consume services; that is, you can inject a service into a
   component, giving the component access to that service class.
To define a class as a service in Angular, use the @Injectable() decorator to provide the
 metadata that allows Angular to inject it into a component as a dependency.
 Angular creates an application-wide injector for you during the bootstrap process,
  and additional injectors as needed. You don't have to create injectors.
An injector creates dependencies, and maintains a container of dependency instances that it reuses if possible.
====
14. Providers
A provider is an instruction to the DI system on how to obtain a value for a dependency.
Most of the time, these dependencies are services that you create and provide.
Provider scope
When you add a service provider to the root application injector, it’s available throughout the app.
 Additionally, these providers are also available to
 all the classes in the app as long they have the lookup token.


 15. Pipe
 A pipe takes in data as input and transforms it to a desired output.
 built in pipes-DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, and PercentPipe.
 Lowercasepipe
 Uppercasepipe
 Datepipe
 Currencypipe
 Jsonpipe
 Percentpipe
 Decimalpipe
 Slicepipe

 custom pipes
 import { Pipe, PipeTransform } from '@angular/core';


  * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024


@ Pipe({name: 'exponentialStrength', pure : true/false})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
===
What is the purpose of async pipe?
The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted. When a new value
is emitted, the pipe marks the component to be checked for changes. Let's take a time observable which continuously
 updates the view for every 2 seconds with the current time.
@Component({
  selector: 'async-observable-pipe',
  template: `<div><code>observable|async</code>:
       Time: {{ time | async }}</div>`
})
export class AsyncObservablePipeComponent {
  time = new Observable(observer =>
    setInterval(() => observer.next(new Date().toString()), 2000)
  );
}
=====
16. pure and impure pipes
pure pipes
1. in pure pipe output is strictly determined by the input parameters
2. The pure pipes call transform method only when input parametrs changes.
3. If the input parameters don’t change the output won’t change. This reasoning allows Angular to +
optimize

@Pipe({name:'myPipe', pure: false})

impure pipes
1. An impure pipe is called for every change detection cycle no matter whether the value or parameters changes.
i.e, An impure pipe is called often, as often as every keystroke or mouse-move.
2. But if a pipe is impure and has internal state the same parameters do
 not guarantee that same output as demonstrated
3. This is relevant for changes that are not detected by Angular

when you pass an array or object that got the content changed (but is still the same instance)
when the pipe injects a service to get access to other values, Angular doesn't recognize if they have changed.

Suppose a pipe is used several times in a HTML code. Like:

<p> {{'Hello' | translate }}<p>
<p> {{'World' | translate }}<p>

If pipe is pure: there will be only one instance of the pipe. The transform method will be called twice but on the same instance.
If pipe is impure: there will be two instances of the pipe.
===

So if a pipe is pure we know that it’s output through transform method
 is strictly determined by the input parameters.
 If the input parameters don’t change the output won’t change. This reasoning allows Angular to +
 optimize
 the pipe and call transform method only when input parameters change.
But if a pipe is impure and has internal state the same parameters do
 not guarantee that same output as demonstrated with the call to impure addFn function in the
  first chapter. It means that Angular is forced to trigger transform function on a pipe instance
  on every digest.
===
What are the security principles in angular?
You should avoid direct use of the DOM APIs.
You should enable Content Security Policy (CSP) and configure your web server to return appropriate CSP HTTP headers.
You should Use the offline template compiler.
You should Use Server Side XSS protection.
You should Use DOM Sanitizer.
You should Preventing CSRF or XSRF attacks.
===
17. How to create a service in Angular?
In Angular, a service is a substitutable object that is wired together using dependency injection. A service is created by
registering it in the module it is going to be executed within. There are basically three ways in which you can create
 an angular service. They are basically three ways in which a service can be created in Angular:

Factory
Service
Provider


18. What is a singleton pattern and where we can find it in Angular?
Singleton pattern in Angular is a great pattern which restricts a class from being used more than once.
Singleton pattern in Angular is
majorly implemented on dependency injection and in the services.
Thus, if you use ‘new Object()’ without making it a singleton, then two different
 memory locations will be allocated for the same object. Whereas, if the object is declared as a singleton,
  in case it already exists in the memory then simply it will be reused.
===
19. What do you understand by REST in Angular?

REST stands for REpresentational State Transfer. REST is an API (Application Programming Interface) style that works on the
 HTTP request. In this, the requested URL pinpoints the data that needs to be processed. Further ahead, an HTTP method then
 identifies the specific operation that needs to be performed on that requested data. Thus, the APIs which follows
 this approach are known as RESTful APIs.

20. Http req in angualr
Most front-end applications communicate with backend services over the HTTP protocol.
 Modern browsers support two different APIs for making HTTP requests: the XMLHttpRequest interface and the fetch() API.

The HttpClient in @angular/common/http offers a simplified client HTTP API for Angular applications that rests
on the XMLHttpRequest interface exposed by browsers. Additional benefits of HttpClient include testability features,
typed request and response objects, request and response interception, Observable apis, and streamlined error handling.

import { HttpClientModule } from '@angular/common/http'; import in main module
import { HttpClient } from '@angular/common/http'; in component.
===
21. ngRoute vs ui-router
ngRoute is a module developed by the AngularJS team which was earlier part of the AngularJS core.

ui-router is a framework which was made outside the AngularJS project to improve and enhance routing capabilities.

ui-router allows for nested views and multiple named views. This is very useful with larger app where you may
 have pages that inherit from other sections.

ui-router allows for you to have strong-type linking between states based on state names. Change the url in
one place will update every link to that state when you build your links with ui-sref.
 Very useful for larger projects where URLs might change.

states allow you to map and access different information about different states and you can easily pass information
 between states via $stateParams.

You can easily determine if you are in a state or parent of a state to adjust UI element -highlighting the navigation of
   the current state) within your templates via $state provided by ui-router which you can expose via setting it in
    $rootScope on run.
===
22. Feature	AngularJS	Angular
Architecture-	Supports MVC design model	=-- Uses components and directives
Language- 	Recommended Language: == JavaScript 	Recommended Language: TypeScript
Expression Syntax- 	Specific ng directive is required for the image/property and an event
	Uses () to bind an event and [] for property binding
Mobile Support- 	Doesn’t provide any mobile support===	Provides mobile support
Routing- 	$routeprovider.when() is used for routing configs===	@RouteConfig{(…)} is used for routing config
Dependency Injection- 	Doesn’t supports the concept of Dependency Injection
	Supports hierarchical Dependency Injection with a unidirectional tree-based change detection

Structure	- Less manageable
Simplified structure and makes the development and maintenance of large applications easier
Speed-
	With two-way data binding development effort and time are reduced
  Faster than AngularJS with upgraded features
Support- 	No support or new updates are provided anymore
	Active support and frequent new updates are made

===
  23. Typescript
  Microsoft TypeScript is an open-source programming language developed and maintained by Microsoft.
  It is a strict syntactical superset of JavaScript, and adds optional static typing to the language

  TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces.
   One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.

 typescript has some additional features like
 1.static typing,
 2. class based object oriented programming.

  TypeScript is modern JavaScript + types. It's about catching bugs early and making you a more efficient developer,
  while at the same time leveraging the JavaScript community.

  You can almost rename your .js files to .ts files and start using TypeScript
  This means JavaScript does not know what type a variable is until it is actually instantiated at run-time.
  This also means that it may be too late. TypeScript adds type support to JavaScript.

====
24. how would you optimize angular apps
1. consider aot compilation
2. Consider lazi loading instead of full bundle app if app size is bigger
3. unneccessary import statements
4. 3rd party unused Librairies
5. Removing app. dependancies if not Required.
====
25. Routing in angular apps.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

ng generate module app-routing --flat --module=app
First, AppRoutingModule imports RouterModule and Routes so the app can have routing functionality.

The following line adds the RouterModule to the AppRoutingModule imports array and configures it with
the routes in one step by calling RouterModule.forRoot*:

imports: [ RouterModule.forRoot(routes) ],

The method is called forRoot() because you configure the router at the application's root level. The forRoot() method
 supplies the service providers and directives needed for routing, and performs the initial navigation based on the current
 browser URL.

Next, AppRoutingModule exports RouterModule so it will be available throughout the app.
exports: [ RouterModule ]

add <router-outlet></router-outlet>

navigate through routerLink
<a routerLink="/heroes">Heroes</a>
[routerLink]="['/setting']
or
in component
this.router.navigate(['search']);

Add a default route
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }

===
26. Architecture of angular Apps
NgModule
Component
Template
Directives
Services and dependancy Injection
Routing

Together, a component and template define an Angular view

27. features/characterastics of angular

Angular CLI
Angular provides support for command line interfaceeee toolssssss . These tools can be used for adding components,
testing, instant
 deploying, etc.

Animation Support
Angular’s intuitive API allows the creation of high-performance, complex animation timelines with very little code.

Cross-Platform App Development
Angular can be used for building an efficient and powerful desktop, native, and progressive web apps. Angular provides
 support for building native mobile applications using Cordova, Ionic, or NativeScript.

Angular allows creating high performance, offline, and zero-step installation progressive web apps using modern web
platform capabilities. The popular JS framework can also be used for building desktop apps for Linux, macOS, and Windows.

Templates
Allows creating UI views with a simple and powerful template syntax.

Testing
Angular lets you carry out frequent unit tests using Karma. The Protractor allows running faster scenario tests in a
stable way.

28. Discuss the advantages and disadvantages of using Angular?
Answer: Following are the various advantages of using Angular:

Ability to add a custom directive
Exceptional community support
Facilitates client and server communication
Features strong features, such as Animation and Event Handlers
Follows the MVC pattern architecture
Offers support for static template and Angular template
Support for two-way data-binding
Supports dependency injection, RESTful services, and validations
Disadvantages of using Angular are enumerated as follows:

Complex SPAs can be inconvenient and laggy to use due to their size
Dynamic applications do not always perform well
Learning Angular requires a decent effort and time


29. What are the building blocks of Angular?
Answer: There are essentially 9 building blocks of an Angular application. These are:

Components – A component controls one or more views. Each view is some specific section of the screen.
Every Angular application has at least one component, known as the root component.
 It is bootstrapped inside the main module, known as the root module. A component contains application
  logic defined inside a class. This class is responsible for interacting with the view via an API of properties and methods.

Data Binding – The mechanism by which parts of a template coordinates with parts of a component is known as data binding.
 In order to let Angular know how to connect both sides (template and its component), the binding markup is added to
  the template HTML.

Dependency Injection *DI) – Angular makes use of DI to provide required dependencies to new components.
Typically, dependencies
 required by a component are services. A component’s constructor parameters tell Angular about the services that a
 component requires. So, a dependency injection offers a way to supply fully-formed dependencies required by a new
 instance of a classss.

Directives –
The templates used by Angular are dynamic in nature. Directives are responsible for instructing Angular about how to
transform the DOM when rendering a template. Actually, components are directives with a template.
Other types of directives are attribute and structural directives.

Metadata –
 In order to let Angular know how to process a class, metadata is attached to the class. For doing so decorators are used.

Modules – Also known as NgModules, a module is an organized block of code with a specific set of capabilities.
It has a specific application domain or a workflow. Like components, any Angular application has at least one module.
This is known as the root module. Typically, an Angular application has several modules.

Routing – An Angular router is responsible for interpreting a browser URL as an instruction to navigate to a
 client-generated view. The router is bound to links on a page to tell Angular to navigate the application
 view when a user clicks on it.
Services – A very broad category, a service can be anything ranging from a value and function to a feature
 that is required by an Angular app. Technically, a service is a class with a well-defined purpose.

Template – Each component’s view is associated with its companion template. A template in Angular is a form
 of HTML tags that lets Angular know that how it is meant to render the component.
===
30. What is string interpolation in Angular?
Answer: Also referred to as moustache syntax, string interpolation in Angular refers to a special type of
syntax that makes use of template expressions in order to display the component data.
 These template expressions are enclosed within double curly braces i.e. {{ }}.

The JavaScript expressions that are to be executed by Angular are added within the curly braces and the
corresponding output is embedded into the HTML code. Typically, these expressions are updated and registered
 like watches as a part of the digest cycle.
====
31. Question: Can you explain the concept of scope hierarchy in Angular?
Answer: Angular organizes the $scope objects into a hierarchy that is typically used by views.
This is known as the scope hierarchy in Angular. It has a root scope that can further contain one or several
scopes called child scopes.

In a scope hierarchy, each view has its own $scope. Hence, the variables set by a view’s view controller will remain hidden
to other view controllers. Following is a typical representation of a Scope Hierarchy:

Root $scope
$scope for Controller 1
$scope for Controller 2
…
..
.
$scope for Controller n
===
33. Could you explain the difference between Angular expressions and JavaScript expressions?
Answer: Although both Angular expressions and JavaScript expressions can contain literals, operators, and variables,
 there are some notable dissimilarities between the two.
 Important differences between Angular expressions and JavaScript expressions are enlisted below:

Angular expressions support filters while JavaScript expressions do not
It is possible to write Angular expressions inside the HTML tags. JavaScript expressions, contrarily, can’t
be written inside the HTML tags
While JavaScript expressions support conditionals, exceptions, and loops, Angular expressions don’t
===
35. What is Data Binding? How many ways it can be done?
Answer: In order to connect application data with the DOM (Data Object Model), data binding is used.
It happens between the template *HTML) and component *TypeScript). There are 3 ways to achieve data binding:

1. Event Binding –
From view-to-source(One-way)
1. (target)="statement" 2. on-target="statement"
 Enables the application to respond to user input in the target environment
2. Property Binding –
From the source-to-view(One-way)
1. {{expression}} 2. [target]="expression" 3. bind-target="expression"
Enables interpolation of values computed from application data into the HTML

3. Two-way Binding – Changes made in the application state gets automatically reflected in the view and vice-versa.
 The ngModel directive is used for achieving this type of data binding.

1. [(target)]="expression" 2. bindon-target="expression"


types of databinding in angular
Component & DOM
<li>{{hero.name}}</li> C to D
<app-hero-detail [hero]="selectedHero"></app-hero-detail> C to D
<li (click)="selectHero(hero)"></li> D to C
<input [(ngModel)]="hero.name"> D ==== C
====
36. Please explain the digest cycle in Angular?
Answer: The process of monitoring the watchlist in order to track changes in the value of the watch variable is
termed the digest cycle in Angular. The previous and present versions of the scope model values are compared in each
digest cycle.

Although the digest cycle process gets triggered implicitly, it is possible to start it manually by using the $apply() function.

37. What is new in Angular 6?
Answer: Here are some of the new aspects introduced in Angular 6:

Angular Elements –
 It allows converting Angular components into web components and embeds the same in some non-Angular application

 Provider –
  Angular 6 introduces a new way of registering a provider directly inside the @Injectable() decorator.
 It iss achieveddd bys ussing the providedIn attribute

RxJS 6 –
 Angular 6 makes use of RxJS 6 internally
i18n (internationalization) – Without having to build the application once per locale, any Angular application can have
“runtime i18n”
===
38. What is SPA (Single Page Application) in Angular? Contrast SPA technology with traditional web technology?
Answer: In the SPA technology, only a single page, which is index.HTML, is maintained although the URL keeps on changing.
Unlike the traditional web technology, SPA technology is faster and easy to develop as well.

In the conventional web technology, as soon as a client requests a webpage, the server sends the resource.
However, when again the client requests for another page, the server responds again with sending the requested resource.
The problem with this technology is that it requires a lot of time.

A single-page application (SPA) is a web application or web site that interacts with the user by dynamically rewriting the
 current page rather than loading entire new pages from a server. This approach avoids interruption of the user experience
 between successive pages, making the application behave more like a desktop application. In a SPA, either all necessary
  code – HTML, JavaScript, and CSS – is retrieved with a single page load,[1] or the appropriate resources are dynamically
   loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in
    the process, nor does control transfer to another page, although the location hash or the HTML5 History API can be used
     to provide the perception and navigability of separate logical pages in the application.[2] Interaction with the single
      page application often involves dynamic communication with the web server behind the scenes.

39. What is the code for creating a decorator?
Answer: We create a decorator called Dummy:

     function Dummy(target) {
        dummy.log('This decorator is Dummy', target);
     }

40. What is the process called by which TypeScript code is converted into JavaScript code?
     Answer: It is called Transpiling. Even though TypeScript is used for writing code in Angular applications,
      it gets internally transpiled into equivalent JavaScript.

41. What is ViewEncapsulation and how many ways are there do to do it in Angular?
Answer: To put simply, ViewEncapsulation determines whether the styles defined in a particular component will
 affect the entire application or not. Angular supports 3 types of ViewEncapsulation:

Emulated – Styles used in other HTML spread to the component
Native – Styles used in other HTML doesn’t spread to the component
None – Styles defined in a component are visible to all components of the application

42. What is metadata?
Metadata is used to decorate a class so that it can configure the expected behavior of the class. The metadata
is represented by decorators
Class decorators, e.g. @Component and @NgModule
Property decorators Used for properties inside classes, e.g. @Input and @Output
Method decorators Used for methods inside classes, e.g. @HostListene
Parameter decorators Used for parameters inside class constructors, e.g. @Inject
====\
BrowserModule – The browser module is imported from @angular/platform-browser and it is used when you want to run your
application in a browser.

CommonModule – The common module is imported from @angular/common and it is used when you want to use directives -
 NgIf, NgFor and so on.

FormsModule – The forms module is imported from @angular/forms and it is used when you build template driven forms.

RouterModule – The router module is imported from @angular/router and is used for routing RouterLink, forRoot, and forChild.

HttpClientModule –The HttpClientModule is imported from @angular/common/http and it used to initiate HTTP request and
\ responses in angular apps. The HttpClient is more modern and easy to use the alternative of HTTP
===

What are template statements?
A template statement responds to an event raised by a binding target such as an element, component, or directive. The template statements appear in quotes to the right of the = symbol like (event)="statement". Let's take an example of button click event's statement
<button (click)="editProfile()">Edit Profile</button>
In the above expression, editProfile is a template statement. The below JavaScript syntax expressions are not allowed.
new
increment and decrement operators, ++ and --
operator assignment, such as += and -=
the bitwise operators | and &
the template expression operators
===
What are template expressions?
A template expression produces a value similar to any Javascript expression. Angular executes the expression and assigns it to a property of a binding target; the target might be an HTML element, a component, or a directive. In the property binding, a template expression appears in quotes to the right of the = symbol as in [property]="expression". In interpolation syntax, the template expression is surrounded by double curly braces. For example, in the below interpolation, the template expression is {{username}},
<h3>{{username}}, welcome to Angular</h3>
The below javascript expressions are prohibited in template expression
assignments * =, +=, -=, ...
new
chaining expressions with ; or ,
increment and decrement operators (++ and --)

==

What is a parameterized pipe?
A pipe can accept any number of optional parameters to fine-tune its output. The parameterized pipe can be created by declaring the pipe name with a colon ( : ) and then the parameter value. If the pipe accepts multiple parameters, separate the values with colons. Let's take a birthday example with a particular format(dd/MM/yyyy):
==
How do you chain pipes?
You can chain pipes together in potentially useful combinations as per the needs. Let's take a birthday property which uses date pipe(along with parameter) and uppercase pipes as below
template: `<p>Birthday is {{  birthday | date:'fullDate' | uppercase}} </p>` // THURSDAY, JUNE 18, 1987
===
What is a bootstrapping module?
Every application has at least one Angular module, the root module that you bootstrap to launch the application is called as bootstrapping module. It is commonly known as AppModule.
===
angular elemets
createCustomElement()
$ ng add @angular/elements
Angular Elements is a new package in Angular that helps us publish Angular components as custom elements.
It does this by taking the Angular component and compiling it into a web component
#1. Reusability to a Whole New Level

With Angular Elements, we can make our components truly reusable. Meaning, you can use Angular Components in other frameworks
 and libraries, such as React, Vue, and Ember!
#2. Use Angular in the Server-Side

With Angular Elements, you can add Angular, which is famously known as a front-end framework, to your project’s backend! Is
that cool or what!?
#3. Publish Parts of the Application

Angular Elements also allows you to develop and publish parts of the application independently!
==
What are dynamic components?
Dynamic components are the components in which components location in the application is not defined at
build time.i.e, They are not used in any angular template. But the component is instantiated and placed in
the application at runtime.
