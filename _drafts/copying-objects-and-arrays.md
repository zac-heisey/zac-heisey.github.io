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
