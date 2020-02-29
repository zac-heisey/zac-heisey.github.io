---
layout: post
title: Copying Objects and Arrays
categories: blog
description: >-
  Examining different ways of copying objects and arrays in JavaScript, shallow
  vs. deep copies, and mutable vs. immutable copies 
author: Zac Heisey
---
- Mutable vs. Immutable data structures
- Creating immutable copies of arrays and objects in JavaScript
  - Arrays:
    - `Array.slice()`
    - `Array.from()`
    - Spread operator
  - Objects:
    - `JSON.parse(JSON.stringify(obj))`
    - `Object.assign()`
    - Spread operator
- Deep vs. Shallow copies

---

In my previous post, I outlined some of the [differences between objects and arrays](/blog/objects-vs-arrays) in JavaScript. We talked about when to use an object versus when to use an array, as well as how to add, remove, and iterate through items stored in each.

Today we'll cover how to make copies of objects and arrays. This topic can be especially confusing to beginners, as there is quite a bit more to take into account when copying an object or array than when you're making a copy of a number, string, or boolean.

## Mutable vs. Immutable Data Types

Before we dive into making copies of objects and arrays, we first need to understand the concept of mutable and immutable [data types in JavaScript](https://javascript.info/types). **Immutable** data types in JavaScript are those whose original value doesn't change when a copy is created and manipulated. Strings, Numbers, and Booleans are all immutable data types. If we make a copy of them, we can alter the copy as much as we'd like without affecting the original.

Let's take a look at some examples of immutability in JavaScript:

```js
// Strings are immutable
var shortGreeting = 'Hello there!';

var longGreeting = shortGreeting + ' How are you today?';

console.log(shortGreeting); // "Hello there!"

console.log(shortGreeting); // "Hello there! How are you today?"

// Numbers are also immutable
var nextWorldCup = 2022;

var futureWorldCup = nextWorldCup + 4;

console.log(nextWorldCup); // 2022;

console.log(futureWorldCup); // 2026

// Booleans are immutable too!
var yes = true;

var maybe = yes;

maybe = false;

console.log(yes); // true;

console.log(maybe); // false;
```

This might seem pretty obvious and logical. If we make and edit a copy, it shouldn't have any affect on the original. It's the whole reason you'd want to make a copy in the first place, right?

All of this goes out the window with **Mutable** data types. Both Objects and Arrays are mutable, which means any changes we make to a copy will _also_ change the original.

Check it out:

```js
// Objects are mutable
var club1 = {
  name: 'Liverpool',
  established: 1892,
  stadium: 'Anfield',
  league: 'Premier League'
};

var club2 = club1;

club2.manager = 'Jürgen Klopp';

console.log(club1); // {name: "Liverpool", established: 1892, stadium: "Anfield", league: "Premier League", manager: "Jürgen Klopp"}

console.log(club2); // {name: "Liverpool", established: 1892, stadium: "Anfield", league: "Premier League", manager: "Jürgen Klopp"}

// So are Arrays
var fruits1 = ['Apples', 'Oranges', 'Bananas'];

var fruits2 = fruits1;

fruits2.push('Strawberries');

console.log(fruits1); // ['Apples', 'Oranges', 'Bananas', 'Strawberries']

console.log(fruits2); // ['Apples', 'Oranges', 'Bananas', 'Strawberries']
```

When we copy an object or array using the assignment methods above, we're not actually making a copy - we are creating a _reference_ to the original. Any time we make a change to a reference in JavaScript, the original - **and all other existing references** - will also be changed to match.

In most cases, this is _not_ the outcome we're after when we make a copy of a n object or array. So how can we make a proper copy of an object or array, rather than a reference?

## Creating Immutable Copies of Arrays and Objects in JavaScript

