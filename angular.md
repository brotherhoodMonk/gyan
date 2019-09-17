component-
Components are the most basic building block of an UI in an Angular application.
A component controls a patch of screen called a view.
You define a component's application logic—what it does to support the view—inside a class. The class interacts with the view through an API of properties and methods.
 An Angular application is a tree of Angular components.
  Angular components are a subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template.
Components are defined using the @component decorator. A component has a selector, template, style and other properties, using which it specifies the metadata required to process the component.


Directives-
At the core, a directive is a function that executes whenever the Angular compiler finds it in the DOM.
Angular directives are used to extend the power of the HTML by giving it new syntax.
There are three kinds of directives in Angular:
Components— directives with a template.
Structural directives— change the DOM layout by adding and removing DOM elements.asterisk (* ) precedes  NgFor and NgIf,  NgSwitch
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
To register a component we use @Component meta-data annotation	To register directives we use @Directive meta-data annotation
Components are typically used to create UI widgets	Directive is used to add behavior to an existing DOM element
Component is used to break up the application into smaller components	Directive is use to design re-usable components
Only one component can be present per DOM element.	Many directives can be used per DOM element
@View decorator or templateurl/template are mandatory	Directive doesn't use View

selector:-
 A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML.
so selector is just provide the name of the component which is being called by its className in the directives list and called by selector name in the view of the another

1. AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by angular
community. It aims to simplify both the development and the testing of such applications
 by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM)
 architectures.
 The AngularJS framework works by first reading the Hypertext Markup Language (HTML) page,
  which has additional custom HTML attributes embedded into it. Angular interprets those attributes as
  directives to bind input or output parts of the page to a model that is represented by standard
  JavaScript variables. The values of those JavaScript variables can be manually set within the code,
  or retrieved from static or dynamic JSON resources.

The framework adapts and extends traditional HTML to present dynamic content through two-way data-binding that allows for the automatic
 synchronization of models and views.
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



2. Reactive and Template-Driven Forms
What Are Angular Reactive Forms?
Reactive forms are also known as model-driven forms. This means that the HTML content changes
depending on the code in the component.

What Are Angular Template-Driven Forms?
Template-driven forms are driven by derivatives in the template. This means that you will see derivatives such as ngModel in the template as opposed to the code.

Differences Between Template-Driven and Reactive Forms
Template-driven forms use the FormsModule, while reactive forms use the ReactiveFormsModule.
Template-driven forms are asynchronous, while reactive forms are synchronous.
In template-driven forms, most of the interaction occurs in the template,
while in reactive-driven forms, most of the interaction occurs in the component.

3. Advantages and Disadvantages of Template-Driven Forms
Although template forms are easier to create, they become a challenge when you want to do unit testing, because testing requires the presence of a DOM.

Advantages and Disadvantages of Reactive Forms
It's easier to write unit tests in reactive forms since all the form code and functionality is contained in the component.
 However, reactive forms require more coding implementation in the component.

Simply we can say

Reactive form can be used in the following situation

Complex forms with more number of fields.
Multiple complex validation are there. Custom validations are required
Require JSON structure to be send with the values in the form.

Template Driven Form : It can be used when using simple forms. Like login page. With the two way data binding. We can simply assign value to variable from ui and vice versa.

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
FormControl are the basic building blocks of a reactive form or a form in general. Think of them as input box, select box, radio buttons, dropdown etc.
Under the hood it’s a class which tracks a particular form control and keeps track of its validity and values.

6. Form Group
FormGroup is a collection/group of FormControls. It also offers many api’s such as tracking validity and values of the whole formGroup.

FormArray
Verbatim from angular docs It tracks the value and validity state of an array of FormControl instances.
However I would later show how that definition is not accurate and it should be Tracks the value and validity state of an array of FormControl/FormGroup/FormArray instances.
+
RULE 1: Whenever there is a formControl(smallest entity of a form like an input) with any other
 basic block like FormControl, FormGroup, FormArray. We have to nest them under a FormGroup.
RULE 2: Whenever you find yourself saying something like X has many Y, that is when you should
know you are looking at a possible FormArray of Y inside X(where X is almost always a FormGroup).

7. What is Traceur compiler?
Traceur compiler is a Google project. It compiles ECMAScript Edition 6 (ES6) (including classes, generators and so on) code on the fly to regular Javascript (ECMAScript Edition 5 [ES5]) to make it compatible for the browser.
Traceur itself is written in ES6, compiled to ES5.


RxJS- Reactive Extensions for JavaScript
RxJS is a popular library among web developers. It provides functional and reactive programming patterns for working with events and streams of data and has been integrated in many web development libraries and frameworks such as Angular.

The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods. Observer pattern.

An Observable is an entity that emits (or publishes) multiple data values (stream of data) over time and asynchronously.

Observers are also called listeners (or consumers) as they can listen or subscribe to get the observed data.
Observer is a collection of callbacks that knows how to listen to values delivered by the Observable.

Subscriptions are objects that are returned when you subscribe to an Observable. They contain many methods such as the unsubscribe() method that you can call to unsubscribe from receving published values from the Observable.

A Subject is a special type of Observable that observers can also subscribe to it to receive published values but with one difference: The values are multicasted to many Observers.

Note: By default an RxJS Observable is unicast.

Unicast simply means that each subscribed observer has an independent execution of the Observable while multicast means that the Observable execution is shared by multiple Observers.

Hot and Cold Observables

Unlike regular Observables, Subjects are called hot. A hot Observable starts emitting events even before any observer subscribes to it which means observers may lose previous emitted values if they don’t subscribe at that right time while cold Observables ****start emitting values when at least one observer is subscribed.

ReplaySubject works by using a buffer that keeps the emitted values and re-emit them when new Observers are subscribed.

BehaviorSubject works like ReplaySubject but only re-emits the last emitted value.

An observer is a plain JavaScript object that contains methods such as next(), complete() and error(). This means it knows how to get notified by the Observable.

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

As seen above ... an Observable is a stream of events or data. They are often returned from Angular methods, such as the http.get and the myinputBox.valueChanges.
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
in your application. Observables offer significant benefits over other techniques for event handling, asynchronous programming, and handling multiple values.
Observables are declarative—that is, you define a function for publishing values, but it is not executed until a consumer subscribes to it.

An observable can deliver multiple values of any type—literals, messages, or events, depending on the context

next	Required. A handler for each delivered value. Called zero or more times after execution starts.
error	Optional. A handler for an error notification. An error halts execution of the observable instance.
complete	Optional. A handler for the execution-complete notification. Delayed values can continue to be delivered to the next handler after execution is complete.

#Multicasting
Multicasting is the practice of broadcasting to a list of multiple subscribers in a single execution. With a multicasting observable, you don't register multiple listeners on the document, but instead re-use the first listener and send values out to each subscriber.

When creating an observable you should determine how you want that observable to be used and whether or not you want to multicast its values.

How do Observables differ from Promises?
Answer: As soon as a promise is made, the execution takes place. However, this is not the case with observables because they are lazy. This means that nothing happens until a subscription is made. While promises handle a single event, observable is a stream that allows passing of more than one event. A callback is made for each event in an observable.

9. Angular Life Cycle-

A component in Angular has a life-cycle, a number of different phases it goes through from birth to death.
Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change,
and destroys it before removing it from the DOM

constructor
This is invoked when Angular creates a component or directive by calling new on the class.

ngOnChanges
Invoked every time there is a change in one of th input properties of the component

ngOnInit
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
Called once after the first ngDoCheck().

ngAfterContentChecked()
Respond after Angular checks the content projected into the directive/component.

ngAfterViewInit()
Respond after Angular initializes the component's views and child views / the view that a directive is in.
Called once after the first ngAfterContentChecked().

ngAfterViewChecked()
Respond after Angular checks the component's views and child views / the view that a directive is in.
Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().

ngOnDestroy()
Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
Called just before Angular destroys the directive/component.



10. @input and @output

Pass data from parent to child with input binding
@Input links a property of a component
(which is generally the child component) with a value that was given by another component (the parent).

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



11. factories and services

Services -
Singleton objects in Angular that get instantiated only once during the lifetime of an application are called services. An Angular service contains methods that maintain the data throughout the life of an application.

The primary intent of an Angular service is to organize as well as share business logic, models, or data and functions with various components of an Angular application.

The functions offered by an Angular service can be invoked from any Angular component, such as a controller or directive.
=====
 They both allow us to create an object that can then be used anywhere in our app.
 a service is a constructor function whereas a factory is not.
 It turns out that it’s actually better to use services where possible, when it
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
 Usage: Could be useful for sharing utility functions that are useful to invoke by simply appending () to the injected function reference.
 Could also be run with injectedArg.call( this ) or similar.

 Factories
 Syntax: module.factory( 'factoryName', function );
 Result: When declaring factoryName as an injectable argument you will be provided the value that is returned by invoking the function reference passed to module.factory.
 Usage: Could be useful for returning a 'class' function that can then be new'ed to create instances.

 Providers
 Syntax: module.provider( 'providerName', function );
 Result: When declaring providerName as an injectable argument you will be provided the value that is returned by invoking the $get method of
  the function reference passed to module.provider.
 Usage: Could be useful for returning a 'class' function that can then be new'ed to create instances but that requires some sort of
  configuration before being injected. Perhaps useful for classes that are reusable across projects? Still kind of hazy on this one.

  Used for the business layer of the application, the service() function operates as a constructor function. The function is invoked at runtime using the new keyword.

Although the factory() function works in pretty much the same way as the service() function does, the former is more flexible and powerful. In actual, the factory() function are design patterns that help in creating objects.

13. Dependancy Injector-
https://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html
 It allows us to inject dependencies in different components across our applications,
 without needing to
 know, how those dependencies are created, or what dependencies they need themselves.
 An injector creates dependencies using providers. Providers are recipes that know how to create dependencies
 DI is wired into the Angular framework and used everywhere to provide new components with
  the services or other things they need.
  Components consume services; that is, you can inject a service into a
   component, giving the component access to that service class.
To define a class as a service in Angular, use the @Injectable() decorator to provide the
 metadata that allows Angular to inject it into a component as a dependency.
 Angular creates an application-wide injector for you during the bootstrap process,
  and additional injectors as needed. You don't have to create injectors.
An injector creates dependencies, and maintains a container of dependency instances that it reuses if possible.
The DI in Angular basically consists of three things:

Injector - The injector object that exposes APIs to us to create instances of dependencies.
Provider - A provider is like a recipe that tells the injector how to create an instance of a  
         dependency. A provider takes a token and maps that to a factory function that creates an
         object.
Dependency - A dependency is the type of which an object should be created.

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

/*
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


16. pure and impure pipes
So if a pipe is pure we know that it’s output (through transform method)
 is strictly determined by the input parameters.
 If the input parameters don’t change the output won’t change. This reasoning allows Angular to +
 optimize
 the pipe and call transform method only when input parameters change.
But if a pipe is impure and has internal state the same parameters do
 not guarantee that same output as demonstrated with the call to impure addFn function in the
  first chapter. It means that Angular is forced to trigger transform function on a pipe instance
  on every digest.

17. How to create a service in Angular?
In Angular, a service is a substitutable object that is wired together using dependency injection. A service is created by registering it in the module it is going to be executed within. There are basically three ways in which you can create an angular service. They are basically three ways in which a service can be created in Angular:

Factory
Service
Provider


18. What is a singleton pattern and where we can find it in Angular?
Singleton pattern in Angular is a great pattern which restricts a class from being used more than once. Singleton pattern in Angular is majorly implemented on dependency injection and in the services. Thus, if you use ‘new Object()’ without making it a singleton, then two different memory locations will be allocated for the same object. Whereas, if the object is declared as a singleton, in case it already exists in the memory then simply it will be reused.

19. What do you understand by REST in Angular?

REST stands for REpresentational State Transfer. REST is an API (Application Programming Interface) style that works on the HTTP request. In this, the requested URL pinpoints the data that needs to be processed. Further ahead, an HTTP method then identifies the specific operation that needs to be performed on that requested data. Thus, the APIs which follows this approach are known as RESTful APIs.

20. Http req in angualr
Most front-end applications communicate with backend services over the HTTP protocol. Modern browsers support two different APIs for making HTTP requests: the XMLHttpRequest interface and the fetch() API.

The HttpClient in @angular/common/http offers a simplified client HTTP API for Angular applications that rests on the XMLHttpRequest interface exposed by browsers. Additional benefits of HttpClient include testability features, typed request and response objects, request and response interception, Observable apis, and streamlined error handling.

import { HttpClientModule } from '@angular/common/http'; import in main module
import { HttpClient } from '@angular/common/http'; in component.

21. ngRoute vs ui-router
ngRoute is a module developed by the AngularJS team which was earlier part of the AngularJS core.

ui-router is a framework which was made outside the AngularJS project to improve and enhance routing capabilities.

ui-router allows for nested views and multiple named views. This is very useful with larger app where you may have pages that inherit from other sections.

ui-router allows for you to have strong-type linking between states based on state names. Change the url in one place will update every link to that state when you build your links with ui-sref. Very useful for larger projects where URLs might change.

states allow you to map and access different information about different states and you can easily pass information between states via $stateParams.

You can easily determine if you are in a state or parent of a state to adjust UI element (highlighting the navigation of the current state) within your templates via $state provided by ui-router which you can expose via setting it in $rootScope on run.

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


  23. Typescript
  Microsoft TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language

  TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.

 typescript has some additional features like static typing, class based object oriented programming.

  TypeScript is modern JavaScript + types. It's about catching bugs early and making you a more efficient developer, while at the same time leveraging the JavaScript community.

  You can almost rename your .js files to .ts files and start using TypeScript
  This means JavaScript does not know what type a variable is until it is actually instantiated at run-time. This also means that it may be too late. TypeScript adds type support to JavaScript.


24. how would you optimize angular apps
1. consider aot compilation
2. Consider lazi loading instead of full bundle app if app size is bigger
3. unneccessary import statements
4. 3rd party unused Librairies
5. Removing app. dependancies if not Required.

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

The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot():

imports: [ RouterModule.forRoot(routes) ],

The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.

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
Angular provides support for command line interface tools. These tools can be used for adding components, testing, instant deploying, etc.

Animation Support
Angular’s intuitive API allows the creation of high-performance, complex animation timelines with very little code.

Cross-Platform App Development
Angular can be used for building an efficient and powerful desktop, native, and progressive web apps. Angular provides support for building native mobile applications using Cordova, Ionic, or NativeScript.

Angular allows creating high performance, offline, and zero-step installation progressive web apps using modern web platform capabilities. The popular JS framework can also be used for building desktop apps for Linux, macOS, and Windows.

Templates
Allows creating UI views with a simple and powerful template syntax.

Testing
Angular lets you carry out frequent unit tests using Karma. The Protractor allows running faster scenario tests in a stable way.

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

Components – A component controls one or more views. Each view is some specific section of the screen. Every Angular application has at least one component, known as the root component. It is bootstrapped inside the main module, known as the root module. A component contains application logic defined inside a class. This class is responsible for interacting with the view via an API of properties and methods.
Data Binding – The mechanism by which parts of a template coordinates with parts of a component is known as data binding. In order to let Angular know how to connect both sides (template and its component), the binding markup is added to the template HTML.
Dependency Injection (DI) – Angular makes use of DI to provide required dependencies to new components. Typically, dependencies required by a component are services. A component’s constructor parameters tell Angular about the services that a component requires. So, a dependency injection offers a way to supply fully-formed dependencies required by a new instance of a class.
Directives – The templates used by Angular are dynamic in nature. Directives are responsible for instructing Angular about how to transform the DOM when rendering a template. Actually, components are directives with a template. Other types of directives are attribute and structural directives.
Metadata – In order to let Angular know how to process a class, metadata is attached to the class. For doing so decorators are used.
Modules – Also known as NgModules, a module is an organized block of code with a specific set of capabilities. It has a specific application domain or a workflow. Like components, any Angular application has at least one module. This is known as the root module. Typically, an Angular application has several modules.
Routing – An Angular router is responsible for interpreting a browser URL as an instruction to navigate to a client-generated view. The router is bound to links on a page to tell Angular to navigate the application view when a user clicks on it.
Services – A very broad category, a service can be anything ranging from a value and function to a feature that is required by an Angular app. Technically, a service is a class with a well-defined purpose.
Template – Each component’s view is associated with its companion template. A template in Angular is a form of HTML tags that lets Angular know that how it is meant to render the component.

30. What is string interpolation in Angular?
Answer: Also referred to as moustache syntax, string interpolation in Angular refers to a special type of syntax that makes use of template expressions in order to display the component data. These template expressions are enclosed within double curly braces i.e. {{ }}.

The JavaScript expressions that are to be executed by Angular are added within the curly braces and the corresponding output is embedded into the HTML code. Typically, these expressions are updated and registered like watches as a part of the digest cycle.

31. Question: Can you explain the concept of scope hierarchy in Angular?
Answer: Angular organizes the $scope objects into a hierarchy that is typically used by views. This is known as the scope hierarchy in Angular. It has a root scope that can further contain one or several scopes called child scopes.

In a scope hierarchy, each view has its own $scope. Hence, the variables set by a view’s view controller will remain hidden to other view controllers. Following is a typical representation of a Scope Hierarchy:

Root $scope
$scope for Controller 1
$scope for Controller 2
…
..
.
$scope for Controller n


32. Please explain the difference between Angular and AngularJS?
Answer: Various differences between Angular and AngularJS are stated as follows:

Architecture – AngularJS supports the MVC design model. Angular relies on components and directives instead
Dependency Injection (DI) – Angular supports a hierarchical Dependency Injection with unidirectional tree-based change detection. AngularJS doesn’t support DI
Expression Syntax – In AngularJS, a specific ng directive is required for the image or property and an event. Angular, on the other hand, use () and [] for blinding an event and accomplishing property binding, respectively
Mobile Support – AngularJS doesn’t have mobile support while Angular does have
Recommended Language – While JavaScript is the recommended language for AngularJS, TypeScript is the recommended language for Angular
Routing – For routing, AngularJS uses $routeprovider.when() whereas Angular uses @RouteConfig{(…)}
Speed – The development effort and time are reduced significantly thanks to support for two-way data binding in AngularJS. Nonetheless, Angular is faster thanks to upgraded features
Structure – With a simplified structure, Angular makes the development and maintenance of large applications easier. Comparatively, AngularJS has a less manageable structure
Support – No official support or updates are available for the AngularJS. On the contrary, Angular has active support with updates rolling out every now and then

33. Could you explain the difference between Angular expressions and JavaScript expressions?
Answer: Although both Angular expressions and JavaScript expressions can contain literals, operators, and variables, there are some notable dissimilarities between the two. Important differences between Angular expressions and JavaScript expressions are enlisted below:

Angular expressions support filters while JavaScript expressions do not
It is possible to write Angular expressions inside the HTML tags. JavaScript expressions, contrarily, can’t  be written inside the HTML tags
While JavaScript expressions support conditionals, exceptions, and loops, Angular expressions don’t

34. What is Angular Material?
Answer: It is a UI component library. Angular Material helps in creating attractive, consistent, and fully functional web pages as well as web applications. It does so while following modern web design principles, including browser portability and graceful degradation.

35. What is Data Binding? How many ways it can be done?
Answer: In order to connect application data with the DOM (Data Object Model), data binding is used.
It happens between the template (HTML) and component (TypeScript). There are 3 ways to achieve data binding:

Event Binding – Enables the application to respond to user input in the target environment
Property Binding – Enables interpolation of values computed from application data into the HTML
Two-way Binding – Changes made in the application state gets automatically reflected in the view and vice-versa. The ngModel directive is used for achieving this type of data binding.

types of databinding in angular
Component & DOM
<li>{{hero.name}}</li> C to D
<app-hero-detail [hero]="selectedHero"></app-hero-detail> C to D
<li (click)="selectHero(hero)"></li> D to C
<input [(ngModel)]="hero.name"> D ==== C


36. Please explain the digest cycle in Angular?
Answer: The process of monitoring the watchlist in order to track changes in the value of the watch variable is termed the digest cycle in Angular. The previous and present versions of the scope model values are compared in each digest cycle.

Although the digest cycle process gets triggered implicitly, it is possible to start it manually by using the $apply() function.

37. What is new in Angular 6?
Answer: Here are some of the new aspects introduced in Angular 6:

Angular Elements – It allows converting Angular components into web components and embeds the same in some non-Angular application
 Provider – Angular 6 introduces a new way of registering a provider directly inside the @Injectable() decorator. It is achieved by using the providedIn attribute
RxJS 6 – Angular 6 makes use of RxJS 6 internally
i18n (internationalization) – Without having to build the application once per locale, any Angular application can have “runtime i18n”

38. What is SPA (Single Page Application) in Angular? Contrast SPA technology with traditional web technology?
Answer: In the SPA technology, only a single page, which is index.HTML, is maintained although the URL keeps on changing. Unlike the traditional web technology, SPA technology is faster and easy to develop as well.

In the conventional web technology, as soon as a client requests a webpage, the server sends the resource. However, when again the client requests for another page, the server responds again with sending the requested resource. The problem with this technology is that it requires a lot of time.

A single-page application (SPA) is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This approach avoids interruption of the user experience between successive pages, making the application behave more like a desktop application. In a SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load,[1] or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page, although the location hash or the HTML5 History API can be used to provide the perception and navigability of separate logical pages in the application.[2] Interaction with the single page application often involves dynamic communication with the web server behind the scenes.

39. What is the code for creating a decorator?
Answer: We create a decorator called Dummy:

     function Dummy(target) {
        dummy.log('This decorator is Dummy', target);
     }

40. What is the process called by which TypeScript code is converted into JavaScript code?
     Answer: It is called Transpiling. Even though TypeScript is used for writing code in Angular applications, it gets internally transpiled into equivalent JavaScript.

41. What is ViewEncapsulation and how many ways are there do to do it in Angular?
Answer: To put simply, ViewEncapsulation determines whether the styles defined in a particular component will affect the entire application or not. Angular supports 3 types of ViewEncapsulation:

Emulated – Styles used in other HTML spread to the component
Native – Styles used in other HTML doesn’t spread to the component
None – Styles defined in a component are visible to all components of the application

42. What is metadata?
Metadata is used to decorate a class so that it can configure the expected behavior of the class. The metadata is represented by decorators
Class decorators, e.g. @Component and @NgModule
Property decorators Used for properties inside classes, e.g. @Input and @Output
Method decorators Used for methods inside classes, e.g. @HostListene
Parameter decorators Used for parameters inside class constructors, e.g. @Inject
