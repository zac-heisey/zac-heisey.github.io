* * *

# Week 4: Workin’ It Out with JavaScript

[![Go to the profile of Zac Heisey](https://cdn-images-1.medium.com/fit/c/100/100/0*BdEE2Y9xQ7-JdgfD.jpeg)](https://medium.com/@zac_heisey?source=post_header_lockup)[Zac Heisey](https://medium.com/@zac_heisey)<span class="followState js-followState" data-user-id="7d344d4ee591"><button class="button button--smallest u-noUserSelect button--withChrome u-baseColor--buttonNormal button--withHover button--unblock js-unblockButton u-marginLeft10 u-xs-hide" data-action="sign-up-prompt" data-sign-in-action="toggle-block-user" data-requires-token="true" data-redirect="https://medium.com/web-dev-basics/week-4-workin-it-out-with-javascript-b1c528593f18" data-action-source="post_header_lockup"><span class="button-label  button-defaultState">Blocked</span><span class="button-label button-hoverState">Unblock</span></button><button class="button button--primary button--smallest button--dark u-noUserSelect button--withChrome u-accentColor--buttonDark button--follow js-followButton u-marginLeft10 u-xs-hide" data-action="sign-up-prompt" data-sign-in-action="toggle-subscribe-user" data-requires-token="true" data-redirect="https://medium.com/_/subscribe/user/7d344d4ee591" data-action-source="post_header_lockup-7d344d4ee591-------------------------follow_byline"><span class="button-label  button-defaultState js-buttonLabel">Follow</span><span class="button-label button-activeState">Following</span></button></span><time datetime="2019-03-20T16:53:06.262Z">Mar 20</time><span class="middotDivider u-fontSize12"></span><span class="readingTime" title="8 min read"></span>![](https://cdn-images-1.medium.com/max/1600/1*7VhMd7Rr2rsflfcdP3wL2w.png)

In [Week 3](https://medium.com/web-dev-basics/week-3-whats-your-javascript-type-b62d18def1f7) we learned about basic JavaScript data types, storing those data types in variables, and creating more complex data structures using arrays and objects.

In this lesson, we’ll look at some ways we can work with these data types and variables in JavaScript. We’ll start by reviewing operators that allow us to assign, compare, and calculate values. Then we’ll see how to use conditionals to control behavior in our programs, as well as how to iterate through data structures using loops.

These concepts and techniques form the foundation of actual JavaScript “programming.” The code we’re writing here provides instructions to our computer, browser, etc. that result in automated output and task completion.

### Operators

We use operators in JavaScript to assign, compare, add, subtract, multiply, divide, combine, change, and do more to variables and values. Below are some common JavaScript operators, what they do, and examples of how we use them.

#### `Assignment Operators`

We’ve already seen the simple assignment operator, which is the `=` symbol, in action when we learned about variables in [Week 3](https://medium.com/web-dev-basics/week-3-whats-your-javascript-type-b62d18def1f7). As their name implies, assignment operators _assign_ the value on the right of the operator to the value on the left.

For example, if we write `a = b`, we are assigning the value `b` to `a`. In addition to the simple assignment operator, there are a few other compound assignment operators we can choose to assign and update the value of our variables.

![](https://cdn-images-1.medium.com/max/1600/1*DQk_I_lULTv_pmB73G8cjw.png)

#### Comparison Operators

With comparison operators, we are comparing the values on either side of the operator. The values being compared can be of any data type, with the returned value being a boolean (`true` of `false`) depending on the values and operator being used. Let’s look at some the basic comparison operators:

![](https://cdn-images-1.medium.com/max/1600/1*oYrf-Vm68uHForHB4Z_JDQ.png)

When it comes to loose (`==`) vs strict (`===`) equality operators, it’s usually best to go with strict equality to ensure that both your values _and_ data types are equal. Otherwise, you might run into unforeseen issues in your programs.

#### Arithmetic Operators

We can perform math in JavaScript using arithmetic operators. These operators work the same as the math operations you probably learned in school as a kid, and return a single numerical value.

![](https://cdn-images-1.medium.com/max/1600/1*5Yy2GRM2gO9cP1ujV6Ed-A.png)

#### Logical Operators

Logical operators are also referred to as “AND” and “OR” operators. The logical AND operator (`&&`) returns `true` when _both_ conditions on either side of the operator are true. Otherwise, it returns `false`.

![](https://cdn-images-1.medium.com/max/1600/1*rSfkYliCDRj2ySNXh7Tlsg.png)

The logical OR operator (`||`) will return true as long as one of the two conditions evaluates to true.

![](https://cdn-images-1.medium.com/max/1600/1*GH2EI8t5A-QBav6IUTPRVw.png)

Finally, the logical NOT operator (`!`) returns a boolean value that is the opposite of the boolean it precedes.

![](https://cdn-images-1.medium.com/max/1600/1*v5qHvOPPLYeC_KnEeC39Xw.png)

#### String Operators

We’ve seen the string operator in action in Week 3 when we learned about variable interpolation. Using the `+` symbol, we can concatenate strings together in JavaScript.

![](https://cdn-images-1.medium.com/max/1600/1*33-VCHDO1qRAPpcJnDp2Ew.png)In the second example, we’re using the shorthand **+=** assignment operator to concatenate two strings

### Conditionals

Conditionals allow us to control the flow of execution in our programs by only executing blocks of code that meet certain conditions. With conditionals, we’re able to make decisions in our code, as well as customize the functionality and output of our websites and apps based on those decisions.

Below are four of the most common conditional statements you’ll work with in JavaScript.

#### `if Statement`

The syntax for this type of conditional statement begins with the `if` keyword, followed by parentheses. Inside of the parentheses, we have a condition to be tested. If the condition evaluates to true, the code inside of our code block will be executed (i.e. code between `{}` will run). Otherwise, the interpreter skips past our `if` statement to the next line of code in our program.

![](https://cdn-images-1.medium.com/max/1600/1*pumYRpNYynKbZyYN2u5ZWw.png)

#### else Statement

An `else` statement provides us with an alternative code block to be executed if the initial condition in our `if` statement evaluates to false.

![](https://cdn-images-1.medium.com/max/1600/1*gXShSlOr_HVvBQt8uIwXnw.png)

#### else if Statement

The above example works fine with we only need to two choices — but what if we need more options in our program? With an `else if` statement, we can specify multiple conditions to be evaluated, with corresponding code blocks to be executed, should the preceding condition(s) evaluate to false.

![](https://cdn-images-1.medium.com/max/1600/1*HnjM0zI-jBk7ssXo7M9_yg.png)

#### switch Statement

The conditional statements above work great if we only need to check for a few conditions when controlling the flow of execution in our programs. But what if we have _lots_ of conditions to check for? You can see how writing a bunch of `else if` statements would get messy.

This is where `switch` statements come in handy! The syntax for switch statements is different from the conditionals we’ve seen so far.

![](https://cdn-images-1.medium.com/max/1600/1*4ZRLLuUgnJELQLKn4T3aLA.png)

Let’s examine the syntax of the above `switch` statement:

*   The `switch` statement begins with an expression or value to be checked, which is placed in parentheses. In our example, our expression is `myPet`, which has an assigned value of `'dog'`.
*   Inside of our code block (`{}`), we define multiple `case` clauses to compare against our expression. If the expression matches the `case` clause, the subsequent code is executed (in our example, a sentence will be logged to the console).
*   Following each `console.log()` method in our example, we have a `break` statement. The `break` statement causes the program to “break out” of the`switch` statement when its associated `case` clause matches the expression. If the `case` clause doesn’t match the expression, or the `break` statement has been omitted, the program will continue on to the next `case` clause.
*   Our `switch` statement ends with a `default` statement, which will be executed if none of the `case` clauses match the expression.

### Loops

Loops are used to repeat a command or set of commands multiple times. We pair loops with conditionals to determine how many loops, or iterations, we want our program to make. A loop will continue to iterate until a defined condition is met.

#### `for Loops`

The most common type of loop in JavaScript is the `[for](https://www.w3schools.com/js/js_loop_for.asp)` [loop](https://www.w3schools.com/js/js_loop_for.asp). There are three main components of a `for` loop:

*   An _initializing_ statement (e.g. `var i = 0`) that gives the loop a starting point.
*   A _conditional_ statement (e.g. `i < 10`) that gives the loop a stopping point. The `for` loop will continue to repeat as long as this conditional statement evaluates to true.
*   An _incremental_ statement (e.g. `i++`) that tells the loop how much to increase or decrease the starting point each time the loop is executed.

Each time a `for` loop repeats, the code inside of the code block is executed, and the _initializing_ variable is incremented by whatever’s been defined in the _incremental_ statement. The _conditional_ statement is then checked again, and if it’s still true, the code block is executed once more. The loop will continue until the conditional statement evaluates to false, making it a great option when we want to run code a known number of times.

![](https://cdn-images-1.medium.com/max/1600/1*B3yy2ob_WWA-5CwEk-uUlg.png)This for loop will continue to log **i** to the console until **i** is not less than 5

#### while Loops

`while` loops work more less the same as `for` loops, except that they are useful when we want to execute a loop an unknown number of times. A `while` loop will run as long as the specific condition evaluates to true. If the condition is false, the `while` loop won’t run at all.

![](https://cdn-images-1.medium.com/max/1600/1*4k94e-F_nLzZezsIAjoJMA.png)The **i++** incrementer at the end of the first while loop prevents an infinite loop (see below for details)

#### do…while Loops

A `do…while` loop works the same as a `while` loop, but will always execute at least once. This is because in a `do…while` loop, the conditional statement is being checked after the initial code block is executed.

![](https://cdn-images-1.medium.com/max/1600/1*u0FG3P7m6yDiisRcCm7VpQ.png)

⚠️ **A** **Warning About Infinite Loops** ⚠️In each of the above loops, it’s important to ensure the condition statement and/or increment statement are correctly defined. If not, you may end up with a condition that never evaluates to false, otherwise known as an **infinite loop**.

An infinite loop will crash your browser, and may require you to restart your computer in order to stop the loop from running. Not fun at all 😡.

![](https://cdn-images-1.medium.com/max/1600/1*lSVumosel6QcZ3lqEkQ7mA.png)

#### for…in Loops

The `for…in` loop can be used to iterate over “enumerable properties.” It is super handy for looping through the properties of an object like so:

![](https://cdn-images-1.medium.com/max/1600/1*1XRboRFhvzpoeFM3tSgGEw.png)We use a **for…in** loop to iterate over the keys and values of **myObj**

#### for…of Loops

The `for…of` loop is used to iterate over “iterable collections” like arrays and strings. It returns the value at each index of a given array like this:

![](https://cdn-images-1.medium.com/max/1600/1*xiJUY155Ld0dySc0WDPsKA.png)

* * *

### Exercises

*   [Assign Grade Exercise](https://codepen.io/zheisey/pen/XQaBRP?editors=1111)
*   [Even/Odd Exercise](https://codepen.io/zheisey/pen/NmabXK?editors=1111)
*   [For…In vs. For…Of Exercise](https://codepen.io/zheisey/pen/GLMNYe?editors=1111)

### Resources

*   [**Expressions and Operators**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators): MDN provides a solid overview of JavaScript expressions and operators, including ones we didn’t cover in this lesson.
*   [**Loops and Iteration**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration): More top-notch wisdom from the folks at MDN, this time focusing on loops and iteration in JavaScript.
*   [**JavaScript if else and else if**](https://www.w3schools.com/js/js_if_else.asp): Outlines `if`, `else`, `else if`, and `switch`.
*   [**Making Decisions in Your Code — Conditionals**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals): More information on `if,` `else`, and `switch` statements from MDN.
*   [**for…in versus for…of Loops**](https://bitsofco.de/for-in-vs-for-of/): Clearly lays out the difference between the two loops, and when you should use each.
