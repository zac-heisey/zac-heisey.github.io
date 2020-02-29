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

Let's take a look at some examples:







