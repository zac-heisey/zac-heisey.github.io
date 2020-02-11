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

In my previous post, I outlined some of the [differences between objects and arrays](/blog/objects-vs-arrays) in JavaScript. We talked about when to use an object and when to reach for an array, as well as how to add, remove, and iterate through items stored in each.

Today we'll cover how to make copies of objects and arrays. This topic can be especially confusing to beginners, as there is quite a bit more to take into account when copying an object or array than when you're making a copy of a number, string, or boolean.








