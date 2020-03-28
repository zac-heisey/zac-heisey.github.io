---
layout: post
title: Copying Objects and Arrays
date: 2020-03-28 00:00:01 -0400
categories: blog
description: >-
  Examining different ways of copying objects and arrays in JavaScript, shallow
  vs. deep copies, and mutable vs. immutable copies
author: Zac Heisey
---
In my previous post, I outlined some of the [differences between objects and arrays](/blog/objects-vs-arrays) in JavaScript. We talked about when to use an object versus when to use an array, as well as how to add, remove, and iterate through items stored in each.

Today we'll cover how to make copies of objects and arrays. This topic can be especially confusing to beginners, as there is quite a bit more to take into account when copying an object or array than when you're making a copy of a number, string, or boolean.

## Mutable vs. Immutable Data Types

Before we dive into making copies of objects and arrays, we first need to understand the concept of mutable and immutable [data types in JavaScript](https://javascript.info/types). **Immutable** data types in JavaScript are those whose original value doesn't change when a copy is created and manipulated. Strings, numbers, and booleans are all immutable data types. If we make a copy of them, we can alter the copy as much as we'd like without affecting the original.

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

This all makes sense. If we make and edit a copy, it shouldn't have any affect on the original. It's the whole reason you'd want to make a copy in the first place, right?

All of this goes out the window with **Mutable** data types. Both objects and arrays are mutable, which means any changes we make to a copy will _also_ change the original.

Check it out:

```js
// Objects are mutable
var club = {
  name: 'Liverpool',
  established: 1892,
  stadium: 'Anfield',
  league: 'Premier League'
};

var clubCopy = club;

clubCopy.manager = 'Jürgen Klopp';

console.log(club); // {name: "Liverpool", established: 1892, stadium: "Anfield", league: "Premier League", manager: "Jürgen Klopp"}

console.log(clubCopy); // {name: "Liverpool", established: 1892, stadium: "Anfield", league: "Premier League", manager: "Jürgen Klopp"}

// So are Arrays
var fruits = ['Apples', 'Oranges', 'Bananas'];

var fruitsCopy = fruits;

fruitsCopy.push('Strawberries');

console.log(fruits); // ['Apples', 'Oranges', 'Bananas', 'Strawberries']

console.log(fruitsCopy); // ['Apples', 'Oranges', 'Bananas', 'Strawberries']
```

When we copy an object or array using the assignment methods above, we're not actually making a copy - we are creating a _reference_ to the original. Any time we make a change to a reference in JavaScript, the original - **and all other existing references** - will also be changed to match.

In most cases, this is _not_ the outcome we're after when we make a copy of an object or array. So how can we make a proper copy of an object or array, rather than a reference?

## Creating Immutable Copies of Objects and Arrays in JavaScript

**Copying Objects**  
`Object.assign` is an ES6 method that copies a source object into a target object. Here's how it works:

```js
var club = {
  name: 'Liverpool',
  established: 1892,
  stadium: 'Anfield',
  league: 'Premier League'
};

var clubCopy = Object.assign({}, club);

clubCopy.nickname = 'The Reds';

console.log(club); // {name: "Liverpool", established: 1892, stadium: "Anfield", league: "Premier League"}

console.log(clubCopy); // {name: "Liverpool", established: 1892, stadium: "Anfield", league: "Premier League", nickname: "The Reds"}
```

Notice how `club` remains unchanged after we use the `Object.assign` method to create a copy (`clubCopy`) and add a new `nickname` property to that copy.

**Copying Arrays**  
There are two methods we can use to create an immutable copy of an array: `Array.slice` and `Array.from`.

`Array.slice` has been around longer and has better browser support. `Array.from` is a newer ES6 method that is a bit more succinct, but requires a polyfill to work in IE.

Let's take a look at how each of these methods work:

```js
// Using Array.slice
var fruits = ['Apples', 'Oranges', 'Bananas'];

var fruitsCopy = fruits1.slice();

fruitsCopy.push('Strawberries');

console.log(fruits); // ['Apples', 'Oranges', 'Bananas']

console.log(fruitsCopy); // ['Apples', 'Oranges', 'Bananas', 'Strawberries']

// Using Array.from
var forwards = ['Salah', 'Mane', 'Firmino'];

var forwardsCopy = Array.from(forwards);

forwardsCopy.push('Origi');

console.log(forwards); // ['Salah', 'Mane', 'Firmino']

console.log(forwardsCopy); // ['Salah', 'Mane', 'Firmino', 'Origi']
```

Using either the `Array.slice` or `Array.from` method, we get an immutable copy of an array that won't affect the original.

**JSON.parse and JSON.stringify**  
We can make copies of both objects _and_ arrays by combining the [`parse()` and `stringify()` JSON methods](https://alligator.io/js/json-parse-stringify/) like so:

```js
// Using parse() and stringify() with arrays
var topDefenders = ['Van Dijk', 'Varane', 'Godin', 'Ramos'];

var moreDefenders = JSON.parse(JSON.stringify(topDefenders));

moreDefenders.push('Umtiti', 'Koulibaly');

// Using parse() and stringify() with objects
var usmnt = {
  headCoach: 'Gregg Berhalter',
  confederation: 'CONCACAF',
  rivals: ['Mexico', 'Canada'],
  worldCupAppearances: 10
};

var usmntPlayer = JSON.parse(JSON.stringify(usmnt));

usmntPlayer.playerName = 'Christian Pulisic';

usmntPlayer.kitNumber = 10;
```

In the array and object examples above, the original `topDefenders` array and `usmnt` object will remain unchanged by the updates made to their copies (`moreDefenders` and `usmntPlayer`).

**The Spread Operator**  
Another feature of ES6 that can be used to make immutable copies of both objects and arrays is the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

Here's how it works:

```js
// Using the spread operator with arrays
var animalSounds = ['moo', 'quack', 'meow'];

var moreAnimalSounds = [...animalSounds];

moreAnimalSounds.push('ruff', 'oink');

// Using the spread operator with objects
var shippingMethods = {
  land: 'van',
  sea: 'container ship',
  air: 'cargo plane'
};

var moreShippingMethods = {...shippingMethods};

moreShippingMethods.space = 'rocketship';
```

Using spread operator in the examples above, we're able to create and change immutable copies of `animalSounds` and `shippingMethods` without affecting the original array or object.

## Deep vs. Shallow Copies

The above methods work great for most cases in which we need to create an immutable copy of an object or an array. It's important to note, however, that these methods only create **shallow copies** of an object or array.

This means that if we use any of these methods to copy an object or array that _includes_ an object or an array, **those nested objects or arrays are mutable**.

Take a look at the example below. Let's say we wanted to create a copy of our previous `usmnt` object and then update the list of rivals, as well as add a `nickname` property, to our copy:

```js
var usmnt = {
  headCoach: 'Gregg Berhalter',
  confederation: 'CONCACAF',
  rivals: ['Mexico', 'Canada'],
  worldCupAppearances: 10
};

var usmntUpdates = Object.assign({}, usmnt);

usmntUpdates.nickname = 'The Yanks';

usmntUpdates.rivals.push('Costa Rica');

console.log(usmnt); // {headCoach: "Gregg Berhalter", confederation: "CONCACAF", rivals: ['Mexico', 'Canada', 'Cost Rica'], worldCupAppearances: 10}

console.log(usmntUpdates); // {headCoach: "Gregg Berhalter", confederation: "CONCACAF", rivals: ['Mexico', 'Canada', 'Cost Rica'], worldCupAppearances: 10, nickame: "The Yanks"}
```

As you can see, adding the new `nickname` property to our immutable `usmntUpdates` copy did not affect the `usmnt` original. However, because `Object.assign` only creates a shallow copy, adding a new value to the `rival` property affected both the copy and the original.

**Creating Deep Copies**  
[Chris Ferdinandi](https://twitter.com/ChrisFerdinandi) has a super useful helper function that makes deep, immutable copies of both objects and arrays using plain 'ol vanilla JavaScript.

Here's a full breakdown of Chris's `copy.js` helper function: https://gomakethings.com/a-better-way-to-create-an-immutable-copy-of-an-array-or-object-with-vanilla-js/
