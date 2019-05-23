* * *

# Week 3: What’s Your (JavaScript) Type?

[![Go to the profile of Zac Heisey](https://cdn-images-1.medium.com/fit/c/100/100/0*BdEE2Y9xQ7-JdgfD.jpeg)](https://medium.com/@zac_heisey?source=post_header_lockup)[Zac Heisey](https://medium.com/@zac_heisey)<span class="followState js-followState" data-user-id="7d344d4ee591"><button class="button button--smallest u-noUserSelect button--withChrome u-baseColor--buttonNormal button--withHover button--unblock js-unblockButton u-marginLeft10 u-xs-hide" data-action="sign-up-prompt" data-sign-in-action="toggle-block-user" data-requires-token="true" data-redirect="https://medium.com/web-dev-basics/week-3-whats-your-javascript-type-b62d18def1f7" data-action-source="post_header_lockup"><span class="button-label  button-defaultState">Blocked</span><span class="button-label button-hoverState">Unblock</span></button><button class="button button--primary button--smallest button--dark u-noUserSelect button--withChrome u-accentColor--buttonDark button--follow js-followButton u-marginLeft10 u-xs-hide" data-action="sign-up-prompt" data-sign-in-action="toggle-subscribe-user" data-requires-token="true" data-redirect="https://medium.com/_/subscribe/user/7d344d4ee591" data-action-source="post_header_lockup-7d344d4ee591-------------------------follow_byline"><span class="button-label  button-defaultState js-buttonLabel">Follow</span><span class="button-label button-activeState">Following</span></button></span><time datetime="2019-03-20T16:53:31.848Z">Mar 20</time><span class="middotDivider u-fontSize12"></span><span class="readingTime" title="8 min read"></span>![](https://cdn-images-1.medium.com/max/1600/1*UROONLx7tp2hcjld7TZm4w.png)

With JavaScript, we can add interactivity and logic to our web projects to make them more engaging and enjoyable to use. JavaScript represents the behavioral layer of the web development stack — with it, we can write code that reacts to a user’s on-page actions, collects, sends, and retrieve’s data from a server, or changes the look and functionality of our markup on the fly.

Like HTML and CSS, JavaScript runs natively in every major browser. In other words, you don’t need to install extra software or do anything special to get your code to run in a browser — it just works! This, combined with the fact that JavaScript can be utilized on both the front end (aka T_he Client_, a user’s browser or computer) and back end (aka _The Server_, where data is stored, updated, and retrieved from) of web projects makes it one of the [most popular programming languages](https://www.fullstackacademy.com/blog/nine-best-programming-languages-to-learn-2018) for new developers to learn.

Before we get into all the fancy things we can do with JavaScript, we first need to understand how the language works “under the hood.” In this lesson, we’ll look at the basic types of data in JavaScript and how to store them in variables for re-use. We’ll also learn how to create and manipulate lists using arrays and model real world things using objects.

### JavaScript Data Types

There are 7 [basic data types](https://javascript.info/types) in JavaScript:

*   null
*   undefined
*   number
*   string
*   boolean
*   object
*   symbol

Both `null` and `undefined` are special data types. A value of `null` represents “unknown” or “empty,” and `undefined` simply refers to a value that has not yet been assigned. The `symbol` type is new addition to the data types list and represents a unique identifier. Since you aren’t likely to come across or work with the `symbol` type, our main focus will be on the remaining data types below.

#### Number

The `number` type is used to represent both whole numbers and decimals. We can perform mathematical operations with `number` types (multiplication, division, addition, subtraction, etc.). We’ll dive deeper into operators in Week 4.

![](https://cdn-images-1.medium.com/max/1600/1*SM53Rce7OFEQRRcO1hN0sw.png)

#### String

The `string` type represents textual data. When we store strings in variables (which we’ll cover later in this lesson), we wrap the string value in either single or double quotes.

![](https://cdn-images-1.medium.com/max/1600/1*fh6MuD0FSDv1Be7BfnzaNA.png)

#### Boolean

The `boolean` type has only two values: `true` or `false`. It’s used in parts of our program that require yes/no input, and is also the result of a comparison in JavaScript (something we’ll be covering in Week 4).

![](https://cdn-images-1.medium.com/max/1600/1*fJ1i95EGuF5J_SFTFBBc0g.png)

#### Object

Each of the data types described above are called “primitive” data types. This is because they can only contain a single value at a time. The `object` type, on the other hand, is special. An object can contain multiple values stored in **key-value** pairs called **properties**. We’ll get into object syntax and how to work with them later in this lesson.

![](https://cdn-images-1.medium.com/max/1600/1*S1udE6dwyDAt-cWcAse2BA.png)

### Working with Variables

Variables are containers for data. We use variables in JavaScript in order to store, change, and easily use and re-use strings, numbers, booleans, objects, etc. JavaScript is a dynamically (or _loosely_) typed programming language, meaning we don’t have to declare up front the type of data that a given variable will hold. It also means that JavaScript variables can hold different types of data at certain points in a script or program.

![](https://cdn-images-1.medium.com/max/1600/1*eG9jyFx6_LhT2CqrEdvqOA.png)X changed from a string, to a number, to a boolean, and back to a string.

You can think of a variable in JavaScript as a box with something stored inside of it — in our case, a value. We can change what’s inside of the box, or leave the box empty. It’s important to note that the variable _is not_ the value itself.

![](https://cdn-images-1.medium.com/max/1600/1*sGtLqBeim4T-qt5X5pX06Q.png)The blue boxes are variables, each containing a different data type | Image: [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

#### Declaring & Initializing Variables

We declare — or create — a variable in JavaScript using the `var` keyword like so:

![](https://cdn-images-1.medium.com/max/1600/1*UpfLquXjCd3Dm0N1kuI14Q.png)myVariable has been declared, but not initialized. It will return a value of “undefined”

`let` and `const` are two additional ways to declare variables in JavaScript, but we’re going to stick with good ol’ `var` in this course. [It’s simple, easy to understand, and works in older browsers](https://gomakethings.com/why-i-dont-use-let-or-const-in-my-javascript-projects/).

We’ve declared our `myVariableName` variable above, but we still need to initialize it. Initializing a variable simply means we assign a value to it. In the case of `myVariableName`, we’ve initialized the variable to a number data type with a value of 12:

![](https://cdn-images-1.medium.com/max/1600/1*NFpE4pmjenfJDJX_OFH8ZA.png)

What you name your variables is up to you, although it’s a good idea to use relevant variable names that indicate the values being stored (e.g. `var userName = 'Frank';` is preferred over `var x = 'Frank';`). There are a handful of naming rules developers must following when it comes to JavaScript variables:

*   Variable names must start with a letter
*   Variable names can contain numbers, underscores, and the `$` symbol
*   Variable names are case sensitive (`myvariable` and `myVariable` are different)

#### Logging Variables in JavaScript

Now that we know what variables are used for and how to declare and initialize them, we want to see our variables at work! There are a few ways to output variables and other JavaScript code, but the one we’ll focus on is `[console.log()](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)`.

All modern web browsers ([and CodePen too!](https://blog.codepen.io/documentation/editor/console/)) provide built-in tools to help developers test and debug their code. Among the most useful is the [Console](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-developer-console), where we can “log” or “print” portions of our code in order to test functionality and confirm output. We do this via the `console.log()` method.

For example, if we wanted to log the value of `myVariable` to the console, we’d write:

![](https://cdn-images-1.medium.com/max/1600/1*Wl6aJNDJGwn92clcix6ntw.png)

Here are few more examples of fun stuff you can do in the console with JavaScript:

![](https://cdn-images-1.medium.com/max/1600/1*Zegb0XBm6wnBbTYYUTZuSQ.gif)

#### Variable Interpolation

We can pass the value of variables into strings by using the variable names as placeholders. This is called **_interpolation_** (specifically, string interpolation), and it makes our code more flexible and dynamic.

![](https://cdn-images-1.medium.com/max/1600/1*FiqtM7cdCcsZQuPvQsy99g.png)

### Arrays

We use arrays whenever we want to create a list of items or set of values. Arrays can store multiple items in a single variable, and each item can be a different data type. For example, an array might have a number, string, boolean, object, or even another array stored inside of it.

[JavaScript arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are wrapped in square brackets (`[]`), with multiple items separating by a comma.

![](https://cdn-images-1.medium.com/max/1600/1*bFUPzfjBoXxvuXmm7_0kWw.png)Notice the final item in the **items** array — it’s referencing the **fruits** array. We can store arrays in arrays!

#### Adding, Removing, and Accessing Items in an Array

Items in arrays are [zero-indexed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessing_array_elements). This means that the first item in an array is at index 0, the second item is at index 1, and so on. If we wanted to access the third item in our `fruits` array above, we’d use the following syntax:

![](https://cdn-images-1.medium.com/max/1600/1*OyCkPihlw46e10tMjdslyw.png)We use **bracket notation** to access items by their index in an array

To get the total number of items in an array, we use the `length` property. We get back a number totaling the items in a given array.

![](https://cdn-images-1.medium.com/max/1600/1*Q5xI-Fd6QmNEWvcf-rEBVA.png)

We can also add and remove items to the end or beginning of an array using the following methods:

![](https://cdn-images-1.medium.com/max/1600/1*dI69eFn4yYsc5pDz9PVPVA.png)

### Objects

Objects in JavaScript are often used to represent “real world” things. An object’s properties are the “characteristics” of that object. For example, an object representing a person might look something like this:

![](https://cdn-images-1.medium.com/max/1600/1*iL18DZf7_Mn4B6HcF0TiIQ.png)The above is called ‘object literal’ syntax. It’s the easiest and most common way to create objects in JavaScript

Let’s breakdown the syntax and components of the above `person` object:

*   We start by declaring a `person` variable to store our object
*   After the assignment operator (`=`), we create a code block to house our properties using opening and closing curly braces like this: `{};`
*   Inside the curly braces, we add `properties` to our object as key-value pairs separated by a colon (`key: value`)
*   Properties in an object can hold any data type that we’ve covered so far, including strings, numbers, booleans, arrays, or even other objects.

#### Adding, Removing, and Accessing Items in an Object

There are two ways to add and access properties in an object: **dot notation** and **bracket notation**. Take a look at the syntax of each approach below to access the `age` property of our `person` object:

![](https://cdn-images-1.medium.com/max/1600/1*5Ib8cvo--ckTxcUUEIrsjQ.png)Both dot and bracket notation return the value of the **age** property in our **person** object

As you can see, both dot and bracket notation return the same value (`33`). So what’s the difference between the two approaches, and when should you use one versus the other? Dot notation can only be used on properties whose keys consist of alphanumeric characters (including `_` and `$` symbols). It can’t be used with property keys that begin with a number or include a dash (e.g. `key-name`).

Bracket notation, on the other hand, can be used to add and access any property key that’s of the **string data type**, including those that begin with numbers, include spaces and dashes, etc. Additionally, bracket notation can be used with variables, while dot notation can’t.

Say we wanted add some new properties to our `person` object:

![](https://cdn-images-1.medium.com/max/1600/1*Kp4EfZzQ90thp66uIXqdnA.png)

Finally, to remove a property from an object, we use the `delete` keyword like this:

![](https://cdn-images-1.medium.com/max/1600/1*7gHYTFvdLvWOuD2MY0s0eQ.png)This will remove the **works-from-home** property in our **person** object

With the above properties added and removed, here’s what our updated `person` object now looks like:

![](https://cdn-images-1.medium.com/max/1600/1*E5upQJSYEPPtOIim64_mvQ.png)

* * *

### Exercises

*   [Been There, Done That Exercise](https://codepen.io/zheisey/pen/VNKpLJ?editors=1011)
*   [Shopping Trip Exercise](https://codepen.io/zheisey/pen/YMGZrP?editors=1011)
*   [All About Me Exercise](https://codepen.io/zheisey/pen/MRjpVB?editors=1011)

### Resources

*   [**JavaScript.com**](https://www.javascript.com/): High-level introduction to writing JavaScript.
*   [**JavaScript Data Types**](https://javascript.info/types): Awesome resource for learning more about the basic data types in JavaScript.
*   [**The**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) `[**var**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)` [**statement**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var): Overview of declaring and initializing variables in JavaScript using the `var` keyword.
*   [**Outputting Text to the Console**](https://developer.mozilla.org/en-US/docs/Web/API/console#Outputting_text_to_the_console): Some ways to log strings, objects, and more to the console using `console.log()`.
*   [**Dot Notation vs. Bracket Notation**](https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781): In-depth overview of the difference between these two methods of accessing and adding object properties.
