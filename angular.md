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

8. Observables
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
Dependency - A dependency is the type of which an object should be created.\

14. Providers
A provider is an instruction to the DI system on how to obtain a value for a dependency.
Most of the time, these dependencies are services that you create and provide.
Provider scope
When you add a service provider to the root application injector, it’s available throughout the app. Additionally, these providers are also available to
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
