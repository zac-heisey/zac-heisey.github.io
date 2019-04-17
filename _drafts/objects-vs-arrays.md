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
Objects are used to represent a "thing." That could be a person, a car, a building, a book, a character in a game - basically anything that is made up or can be defined by a set of characteristics. In objects, these characteristics are called `properties` that consist of a `key` and a `value`.

```js
var object = {
  key: 'value'
};
```















