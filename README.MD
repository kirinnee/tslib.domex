# DOMEx

Extend DOM prototype to have a few utility methods.


Source: [GitLab](https://gitlab.com/node-packages-kirin/dom-ex)

Mirror: [GitHub](https://github.com/kirinnee/tslib.domex)

# Getting Started

Install via NPM 
```powershell
$ npm i @kirinnee/domex
```

or 

Install via Yarn
```powershell
$ yarn add @kirinnee/domex --prefer-offline
```

Using in browser

Attach scripts in `dist/` folder
```html
<script src="./dist/domex.min.js"></script>
```

# Usage
DOMEx evil-ly extends prototype of HTMLElement and all its sub-classes. This gives us a variety of slightly useful method.
Do note that DOMEx is only cross-platform is DOM4 Polyfill is installed.

#### Append
> function Append(elements: HTMLElement|HTMLElement[]|string|string[]):HTMLElement

Appends the HTMLElement or text to the end of the target element.
```typescript
let x = document.querySelector("#some-node");
//Append Element
x.Append(document.createElement("a"));
//Append Text
x.Append("HEY <div> HI! </div>");
```

#### Prepend
> function Prepend(elements: HTMLElement|HTMLElement[]|string|string[]):HTMLElement

Prepends the HTMLElement or text to the start of the target element.
```typescript
let x = document.querySelector("#some-node");
//Append Element
x.Prepend(document.createElement("a"));
//Append Text
x.Prepend("HEY <div> HI");
```
#### Add Class
> function AddClass(cls: string|string[]):HTMLElement

Adds a or an array of classes to the element.

```typescript
//Add single class "blue-class"
x.AddClass("blue-class");
//Add multiple classes
x.AddClass(["blue-class","red-class","green-class"]);
```
#### Remove Class
> function RemoveClass(cls:string|string[]):HTMLElement

Removes a or an array of classes to the element.

```typescript
//Remove 1 class
x.RemoveClass('blue-class');
//Remove multiple classes
x.RemoveClass(["blue-class","red-class","green-class"]);
```

#### Setting Attribute
> function Attr(attr:string, value:string):HTMLElement

Adds or change an attribute of the element

```typescript
x.Attr('id','complex-identifier');
```

#### Accessing Attribute
> function Attr(attr:string):string

Access the value of certain attribute

```typescript
let id:string = x.Attr('id');
```

#### Setting Styles
>function Style(attr:string, value:string): HTMLElement

Set the style of certain attribute

```typescript
x.Style('color','blue');
```

#### Getting Styles
> function Style(attr:string): string

Access the value of the style

```typescript
let color:string = x.Style('color');
```

#### Setting the ID of the element
> function Id(value:string): HTMLElement

Sets or changes the ID of the target element

```typescript
x.Id("complex-identifier");
```

#### Access the ID of the element
> function Id(): string

Gets the value of the ID of the element

```typescript
let id = x.Id();
```

#### Adding Click Listener
> Click(listener: ClickListener): HTMLElement;

Adds a click listener to the element

```typescript
//Display which mouse button was use to click
x.Click( (button:number, e:MouseEvent) => console.log(button));
```

#### Adding Wheel Listener
> WheelDown(listener: WheelListener): HTMLElement

> WheelUp(listener: WheelListner): HTMLElement

```typescript
//print to console how much has the user wheel-down
x.WheelDown((delta:number, e:WheelEvent) => console.log(delta));
//print to console how much has the user wheel-up
x.WheelUp((delta:number, e:WheelEvent) => console.log(delta));
```


## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.MD) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning 
We use [SemVer](https://semver.org/) for versioning. For the versions available, see the tags on this repository.

## Authors
* [kirinnee](mailto:kirinnee@gmail.com) 

## License
This project is licensed under MIT - see the [LICENSE.md](LICENSE.MD) file for details