---
layout: post
title: Objects vs. Arrays
categories: blog
description: >-
  Objects and arrays allow us to store and access data in more advanced ways
  than other JavaScript data types or variables. But exactly when and how should
  we use them?
author: Zac Heisey
---
Both objects and arrays are considered "special" in JavaScript. Objects represent a special data type that is [mutable](https://gomakethings.com/immutability-in-javascript/) and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is _also_ mutable and can _also_ be used to store a list of values. So what exactly is the difference between objects and arrays, when do you use which, and how to do work with each of them?

## Objects

**When to Use Them**  
Objects are used to represent a "thing" in your code. That could be a person, a car, a building, a book, a character in a game - basically anything that is made up or can be defined by a set of characteristics. In objects, these characteristics are called `properties` that consist of a `key` and a `value`.

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

**Access, Add, and Remove Items**  
Properties in objects can accessed, added, removed, and changed by using either **dot** or **bracket** notation. To get the value of the `age` key in our `person` object with both dot and bracket notation, we'd write:

```js
// Dot notation
person.age // returns 33

// Bracket notation
person['age'] // returns 33
```

Say we wanted to change the value of `likesCoding` to false. We can do that with dot notation like this:

```js
person.likesCoding = false;
```

And if we wanted to add a new property to our `person` object, we could accomplish that with dot notation as well:

```js
person.hobbies = ['hiking', 'travel', 'reading'];
```

[Check out this post](https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781) on the difference between dot and bracket notation, and when to use each.
