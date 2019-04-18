---
layout: post
title: Objects vs. Arrays
date: 2019-04-18 00:00:01 -0400
categories: blog
description: >-
  Objects and arrays allow us to store and access data in more advanced ways
  than other JavaScript data types or variables. But exactly when and how should
  we use them?
author: Zac Heisey
---
Both objects and arrays are considered "special" in JavaScript. Objects represent a special data type that is [mutable](https://gomakethings.com/immutability-in-javascript/) and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is _also_ mutable and can _also_ be used to store a list of values. So what exactly is the difference between objects and arrays, when do you use which, and how to do work with each of them?

## Objects

**When to Use Objects**  
Objects are used to represent a "thing" in your code. That could be a person, a car, a building, a book, a character in a game - basically anything that is made up or can be defined by a set of characteristics. In objects, these characteristics are called **properties** that consist of a `key` and a `value`.

```js
// Basic object syntax
var object = {
  key: 'value'
};

// Example 'person' object
var person = {
  name: 'Zac',
  age: 33,
  likesCoding: true
};
```

**Access, Add, and Remove Items from Objects**  
Properties in objects can be accessed, added, changed, and removed by using either **dot** or **bracket** notation. To get the value of the `age` key in our `person` object with both dot and bracket notation, we'd write:

```js
// Dot notation
person.age // returns 33

// Bracket notation
person['age'] // returns 33
```

Say we wanted to change the value of `likesCoding` to **false**. We can do that with dot notation like this:

```js
person.likesCoding = false;
```

And if we wanted to add a new property to our `person` object, we could accomplish that with dot notation as well:

```js
person.hobbies = ['hiking', 'travel', 'reading'];
```

Finally, to remove a property from an object, we use the `delete` keyword like so:

```js
delete person.age;
```

[Check out this post](https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781) on the difference between dot and bracket notation, and when to use each.

**Iterating Through Objects**  
The most common way to loop through properties in an object is with a **for...in** loop:

```js
for (var key in myObject) {
  console.log(key); // logs keys in myObject
  console.log(myObject[key]); // logs values in myObject
}
```

Another way to iterate through object properties is by appending the **forEach()** method to **Object.keys()**:

```js
Object.keys(myObject).forEach(function(key) {
  console.log(key); // logs keys in myObject
  console.log(myObject[key]); // logs values in myObject
});
```

## Arrays

**When to Use Arrays**  
We use arrays whenever we want to create and store a list of multiple items in a single variable. Arrays are especially useful when creating **ordered collections** where items in the collection can be accessed by their numerical position in the list. Just as object properties can store values of any [primitive data type](https://javascript.info/types) (as well as an array or another object), so too can arrays consist of strings, numbers, booleans, objects, or even other arrays.

**Access, Add, and Remove Items from Arrays**  
Arrays use [zero-based indexing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessing_array_elements), so the first item in an array has an index of 0, the second item an index of 1, and so on. For instance, let's say we wanted to access the third item ('Mexico City') in the following array:

```js
var vacationSpots = ['Tokyo', 'Bali', 'Mexico City', 'Vancouver'];
```

To do so, we'd write:

```js
vacationSpots[2]; // returns 'Mexico City'
```

Items can be added and removed from the beginning or end of an array using the `push()`, `pop()`, `unshift()`, and `shift()` methods:

```js
// push() - Adds item(s) to the end of an array
vacationSpots.push('Miami');

// pop() - Removes the last item from an array
vacationSpots.pop();

// unshift() - Adds item(s) to the beginning of an array
vacationSpots.unshift('Cape Town', 'Moscow');

// shift() - Removes the first item from an array
vacationSpots.shift();
```

**Iterating Through Arrays**  
We can loop through items in an array in a few ways. First there's the standard **for** loop:

```js
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]); // logs items in myArray
}
```

There's also the **for...of** loop:

```js
for (var item of myArray) {
  console.log(item); // logs items in myArray
}
```

Or we can utilize the **forEach()** method:

```js
myArray.forEach(item) {
  console.log(item); // logs items in myArray
});
```

Again, the similarities between iteration techniques of objects and arrays can make things confusing. Here's a [helpful article](https://bitsofco.de/for-in-vs-for-of/) to clear things up.

## Wrapping Up

Objects represent "things" with characteristics (aka properties), while arrays create and store lists of data in a single variable. Both dot and bracket notation allow us to access, add, change, and remove items from an object, while zero-based indexing and a variety of built-in methods let us access and alter items in an array. Finally, we can iterate over object properties and array items using various loops (e.g. for, for...in, for...of, forEach()).
