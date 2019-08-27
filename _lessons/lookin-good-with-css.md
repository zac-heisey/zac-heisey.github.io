---
title: Lesson 2 - Lookin’ Good with CSS 😍
layout: lesson
description: Learn about CSS syntax, cascade, and inheritance, how to use CSS selectors, and applying style to our markup with CSS.
---

Continuing with the physical building analogy from [Lesson 1](/web-dev-basics/building-a-solid-foundation-with-html), if HTML represents the frame and structure of a website or web app, then CSS is the paint, wallpaper, artwork, fixtures, furniture, and overall style.

CSS stands for Cascading Style Sheets and represents the presentational layer in the web development stack. It allows us to customize how our HTML markup is styled and displayed by browsers. With CSS we can determine color, layout, typography, and other aspects of how our web projects appear.

![image of different color paint in paint cans](https://cdn-images-1.medium.com/max/1600/0*BxtbJvTr8Kreo5js "CSS is the presentational layer to our HTML structure")

## CSS Syntax

The basic syntax of CSS is fairly straightforward, but can become increasingly complex as our project requires. This is the good and bad of CSS — it’s relatively easy to get started and grasp basic concepts, but its flexibility and power make it equally difficult to fully grasp. The deeper your knowledge of CSS grows, the more you realize there is to learn.

> “ CSS is like chess: easy to learn, but hard to master.” - [Stephen Hay](https://twitter.com/stephenhay)

CSS syntax begins with a **selector**, which represents the element or elements in our HTML markup we want to style. CSS selectors can range from simple element selectors (such as `h1`) to complex, multi-level selectors (`body > div.content-section p#intro-paragraph`, for example). We’ll dive deeper into CSS selectors later in this lesson.

After choosing a selector for our styles, we create a **code block** using opening and closing curly braces like this: `{}`. Inside of the code block, we write a **declaration**, which consists of a **property-value** pair ending in a semicolon. Each property-value pair is responsible for styling a specific part of our markup (e.g. text size, image width, content layout, background color, etc.).

All of these parts together — selector, code block, and declaration — make up a **CSS rule**. CSS rules are typically written on multiple lines, but can also be written as a single line:

```css
/* A basic CSS rule with typical space & indentation */
h1#main-heading {
  font-size: 30px;
  color: blue;
}

/* Same rule from above written as a single line */
h1#main-heading {font-size: 30px;color: blue;}
```

Let’s take a look at each part of the above CSS rule in further detail:

*   `h1#main-heading` is the **selector** of the CSS rule. It would target an `h1` element with an `id` attribute of `main-heading` in our markup (e.g. `<h1 id="main-heading">`).
*   Inside of the rule’s code block there are two **declarations**: `font-size: 30px;` and `color: blue;`. The first declaration sets the font size of the selector to 30 pixels. The second declaration sets the selector’s font color to blue.

Here’s a diagram of a basic CSS rule with the each bit of the syntax labeled:

![diagram showing basic css rule syntax](https://cdn-images-1.medium.com/max/1600/1*ZIUP8HcbIS6k9IcGvqPUzA.jpeg "Basic CSS rule syntax: selector, code black, declaration (property and value)")

## CSS Selectors

As mentioned earlier, CSS selectors allow us to target the element or elements in our HTML markup to be styled. The most basic selectors (aka “simple selectors”) generally fall into one of three categories, each with varying levels of specificity (we’ll talk more about specificity later on in this lesson):

**Type Selectors**

Type selectors include tag/element selectors (like `h1`, `p`, or `body`), as well as pseudo-elements (like `::before` and `::after`), which we won’t go into in this lesson. Type selectors have the lowest level of specificity among simple selectors.

We use type selectors to match _all_ elements of a given type within our markup. Type selector syntax simply uses the tag name itself as the selector (e.g. **h2**). For example, if we wanted to make the `<h2>` headings blue in the following HTML markup:

```html
<body>
  <h1 id="main-heading">Skateboards</h1>
  <p>Skateboarding is how the cool kids get around 😎</p>

  <article class="article" id="article-1">
    <h2>Longboards</h2>
    <p>Longboards are a type of skateboard with a longer wheelbase and
      larger, softer wheels.</p>
  </article>

  <article class="article" id="article-2">
    <h2>Electric Skateboard</h2>
    <p>These no longer require the propelling of the skateboard be means
      of the feet; rather an electric motor propels the board, fed by an
      electric battery.</p>
  </article>
</body>
```

Our CSS would look like this:

```css
/* This rule targets ALL <h2> elements */
h2 {
  color: blue;
}
```

**Class Selectors**

Class selectors match elements based on the `class` attribute value. They are more specific than Type selectors, but less specific than ID selectors. Class selector syntax is characterized by adding a dot before the class name (e.g. **.article**). If we wanted to update the background color and font size of both `<article>` elements in our example markup, we’d write the following rule in our CSS:

![](https://cdn-images-1.medium.com/max/1600/1*jWinRNcNTpHoSTRC8FyUMQ.png)

**ID Selectors**

ID selectors have the highest level of specificity among the simple selector types we’ve discussed. They match elements based on the value of `id` attributes. ID selector syntax prefixes a hash/pound sign before the ID name (e.g. **#article-2**). Going back to our example markup, to change the font family in the second `<article>` element to Raleway, we’d write the following CSS rule:

![](https://cdn-images-1.medium.com/max/1600/1*kyFdE7mSrZqJDPvnt7RlYw.png)

**Child and Descendant Selectors**

In addition to the three main categories of selector types outlined above, there are **combinators** that allow us to combine simple selectors in order to target elements with even greater specificity.

The two types of combinators we’ll focus on are _Child_ and _Descendant_ selectors. Both of these selectors tap into the structural relationships between elements in our HTML markup that we discussed in [Week 1](https://medium.com/web-dev-basics/week-1-building-a-solid-foundation-with-html-f485669097f0) (_Relationships and Nesting_).

**Child selectors** target the _direct child elements_ nested inside of a given element using the `>` symbol. Child selector syntax uses the greater than symbol (>) to target an element’s children. For example, if we wanted to change the text color of the `<p>` elements of both `<article>` elements in our example markup, we’d use the child selector like this:

![](https://cdn-images-1.medium.com/max/1600/1*djZPF7ANQCV82wkXmcZj8w.png)

**Descendant selectors** operate in a similar way, except that they select _all elements that are descendants_ (i.e. nested inside) of a given element. Rather than a `>` symbol like we use for child selectors, descendant selector syntax uses a space to separate the ancestor (e.g. **body**) from its descendants (e.g. **p**).

Say we wanted to set all of the `<p>` elements in our example markup to bold. With the descendant selector, our CSS would be:

![](https://cdn-images-1.medium.com/max/1600/1*9HMf4IBndaiRjOPuYLdcFw.png)

To help stay on top of the different CSS selector types, freeCodeCamp has a handy [CSS Selector Cheat Sheet](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/). Another good resource is [MDN’s comprehensive list of CSS Selectors](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/). It’s conveniently organized by selector types (simple selectors, combinators, pseudo-classes, etc.). I highly recommend bookmarking both of these!

### Inline, Internal, and External CSS Styles

There are three main ways to write CSS and apply styles to our HTML markup: inline, internal, and external CSS styles.

#### Inline CSS

Inline CSS is written _inside_ of our markup, with styles being applied directly to individual HTML elements using the `style` attribute. Here’s an example of styling HTML with inline CSS:

![](https://cdn-images-1.medium.com/max/1600/1*vMDthM9qBLsONvClseM_ew.png)Notice that standard CSS declaration syntax (i.e. **property: value;**) is used with inline CSS styles

While technically valid, this method of applying CSS styles to our markup is not preferred and is generally considered bad practice. For starters, it contradicts the [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns#HTML,_CSS,_JavaScript) principle of computer science, which basically states that computer programs should be divided into distinct sections that handle unique responsibilities. In our case, that means separating the structural layer (HTML) from the presentational (CSS) and behavioral (JavaScript) layers.

Another downside to inline CSS is that it doesn’t allow us take advantage of [inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Inheritance), a major concept of CSS that makes our code more flexible and helps avoid duplication (we’ll discuss this concept later in this lesson). With inline CSS, we have to write the same CSS rules to _every_ element we want the rules applied to. In the above inline CSS example, we would have to add the `style="color: blue;"` attribute to every `p` element in our markup that we wanted to be blue. Obviously, this isn’t very scalable.

#### Internal CSS

Another way to apply styles to HTML markup is by writing internal CSS. These style rules are also written in the same HTML file as our markup, but they grouped together between `<style></style>` tags that are nested inside the `head` section of our markup.

Rather than adding `style` attributes to individual elements, the CSS rules we write inside of the `<style></style>` tags will be applied to _every matching element on the page_. Check out the example below of internal CSS:

![](https://cdn-images-1.medium.com/max/1600/1*FUtSmeRbiNcTEz9f3xu1MQ.png)The CSS rules between the <style> tags will be applied to corresponding elements of the same HTML file

Internal CSS styles are preferred over inline styles because they take advantage of inheritance and make our code more flexible. However, we’re still not separating our concerns with internal CSS, which makes it less than ideal. Also, since internal styles only apply to HTML elements on the same page, it means we have to re-write the same styles for _every page_ of markup in a web project. Again, not very scalable at all.

#### External CSS

Finally, we have external CSS. This is the preferred way to style HTML markup, as it separates structure (HTML) from presentation (CSS) and makes our code much more flexible and easier to maintain.

With external CSS, we write our styles _once_ in a separate stylesheet (e.g. `style.css`) and link to this external stylesheet in the `head` section of any HTML document in our project using the `[<link>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)` element.

For example, if we have the following markup in an HTML document:

![](https://cdn-images-1.medium.com/max/1600/1*BZuqFDB0QWE0PCLJCd8cmg.png)The <link> element in the head section “tells” the HTML document which CSS stylesheet(s) to reference

Then our `style.css` stylesheet might look like this:

![](https://cdn-images-1.medium.com/max/1600/1*J1qT2jIaj-AqsuhyIqcPbQ.png)The CSS rules in our style.css file would be applied to **any** HTML document with a referring <link> tag

### Inheritance, Specificity, and Cascade

These concepts make up the “holy trinity” of CSS and are the key to unlocking the awesomeness of writing CSS. Inheritance, specificity, and cascade may seem like fuzzy ideas at first, but don’t worry — the more CSS you write, the more these concepts will make sense.

#### Inheritance

The concept of inheritance refers to the passing on of CSS styles from parent to child and descendant elements based on the structural relationships in our HTML markup. Some property styles are not inherited by default (such as `border`, `margin`, `padding`, and all `background` properties), but for those properties that are, we are able to write far fewer CSS rules in order to style our markup.

Take a look at the example CSS below. Here we are applying some font styles to the `<body>` element that will be inherited by all its descendant elements unless we specify otherwise.

![](https://cdn-images-1.medium.com/max/1600/1*r9OdWsuFIzhEyn8qFD0B9w.png)

Because we’ve written alternative declarations for `<h1>` elements with a `class` of `main-heading`, as well as all `<p>` elements, those rules will only inherit the CSS declarations from our `body` rule that have not been explicitly overridden. For example, both the `h1.main-heading` and `p` rules will inherit the `font-family: sans-serif;` declaration, with the `p` rule also inheriting the `color` and `font-weight` declarations from `body`.

#### Specificity

Specificity is another important concept in understanding _which_ CSS rules are ultimately applied to our markup. As we discussed earlier in this lesson, CSS selectors have varying degrees of specificity. Here are the CSS selectors we’ve covered so far, in order of least to most specific:

*   Type Selectors (e.g. tag/element selectors like `h1`, `p`, `body`, etc.)
*   Class Selectors (e.g. `.class-name`)
*   ID Selectors (e.g. `#id-name`)

So, if we had the following `<p>` element in our markup:

![](https://cdn-images-1.medium.com/max/1600/1*Nk9O_5M76x3ibYT1TIdD4g.png)

And our stylesheet contained these CSS rules:

![](https://cdn-images-1.medium.com/max/1600/1*j7MC0RUR29iHhwGBZa4qXw.png)

Our “Hello World!” sentence would have:

*   Green text (`color: green;` declaration in **id selector** wins out)
*   18 pixel font size (`font-size: 18px;` declaration in **id selector** wins out)
*   Oswald font (`font-family: 'Oswald';` declaration in **class selector** wins out)
*   Normal font weight (`font-weight: normal;` declaration in **type (element) selector** is applied)

#### Cascade

It shouldn’t come as a surprise that the cascade is a key concept of CSS —it represents the “C” in the acronym! The cascade is all about the _order_ in which CSS rules are applied to our markup. CSS rules will be applied in a cascading, top-down fashion in the following order:

*   **Importance**: Any declarations marked as `!important` will _always_ win out over any other conflicting declarations. Best practice is to use `!important` sparingly, if at all, in your CSS rules.

![](https://cdn-images-1.medium.com/max/1600/1*hrGqv9-JcYLx2W8_lnMD7A.png)

*   **Specificity**: Once declarations marked as !important have been applied, CSS will look next to specificity to in applying styles. As we know, CSS selectors have varying degrees of specificity. If conflicting CSS rules exist for a given element or set of elements, the more specific selectors will win out (i.e. have their styles applied) over less specific ones.
*   **Source Order**: Finally, if there are multiple CSS rules with the same importance _and_ degree of specificity, the winning rule will be the one that is declared last in the source order of the CSS stylesheet. In other words, when all else is equal, the CSS cascade will select the last rule declared.

![](https://cdn-images-1.medium.com/max/1600/1*nr_N2qHWGGQ2WFljZsdyzA.png)

### Size, Spacing, and The Box Model

A helpful rule of thumb to help in understanding the interplay between HTML and CSS is this: [**Every HTML element is a box**](https://css-tricks.com/the-css-ah-ha-moment/). As we learned in [Week 1](https://medium.com/web-dev-basics/week-1-building-a-solid-foundation-with-html-f485669097f0), these “boxes” will have different default characteristics depending on whether they are block or inline elements.

We can take these default characteristics even further with CSS, manipulating the size and spacing properties of our element “boxes” such as `width`, `height`, `border`, `margin`, and `padding` in order to establish a rudimentary layout of our page content.

#### Width and Height

The `width` and `height` properties are applied to an element in our markup to explicitly declare the element’s size. These declarations will override the element’s default block or inline width and height values, and define the actual size of the content in our markup (text, images, etc.).

We set the value of an element’s `width` and `height` properties in either absolute (pixels, points, centimeters, millimeters, inches, etc.) or relative (rem/em units, percentages) length units. You’ll probably see pixels, rems/ems, and percentages used most often.

For example, if we had the following CSS:

![](https://cdn-images-1.medium.com/max/1600/1*0rpZMh1cEmw8A4qS92lEig.png)

We’d see something like this rendered in the browser:

![](https://cdn-images-1.medium.com/max/2400/1*RGWsXnam5s6WezPiKbhAcg.png)The blue box has a height of 200 pixels and takes up 50% of the available width

#### Margin, Border, Padding

Spacing outside, inside, and between given elements can be declared with the `margin`, `border`, and `padding` properties. The `margin` property creates space around a given element, while the `padding` property creates space inside an element. The `border` property defines the outer edge of an element’s content and padding, and can be have a specified width, color, style, etc.

Each of these properties can be set independently of each other, and can also be declared on one, some, or all sides of an element. Additionally, depending on the property and value, shorthand declarations can sometimes be used to add margin, border, or padding to an element:

![](https://cdn-images-1.medium.com/max/1600/1*X0hrXKqUc4lzdjGhz8rOjA.png)Both the long and shorthand declarations above will result in the same rendered output

Going back to our blue box example, if we update our stylesheet to include declarations for margin, border, and padding like so:

![](https://cdn-images-1.medium.com/max/1600/1*DyWnyyAO1pzdPx7a7-KEUA.png)

Our rendered markup would now look like this:

![](https://cdn-images-1.medium.com/max/2400/1*C28aoaanrMwsKhM_1_i-zw.png)The blue box has moved 50 pixels from the left, has a yellow border 10 pixels wide, and 25 pixels of padding on each side of the box

#### The Box Model

Grouped together, the properties above make up the [CSS box model](https://www.w3schools.com/csS/css_boxmodel.asp). The box model is a representation of how CSS declarations for margin, border, padding, and the actual content will ultimately be rendered in the browser.

![](https://cdn-images-1.medium.com/max/1600/1*7qqR-jXp35fOjOIIfHVUHA.png)Basic diagram of the CSS box model | Image: [Torquemag.io](https://torquemag.io/2018/06/css-box-model/)

The key thing to understand about the box model is how the total width and height of an element are calculated according to the `[box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)` property. By default, the `box-sizing` property has a value of `content-box`. This means that any values for border or padding will be calculated _in addition to_ the total height and width of the content. Conversely, setting the `box-sizing` property to `border-box` ensures values for border or padding are calculated _along with_ the values for the content’s width and height.

Take a look at the example below. Both Box 1 and Box 2 have the same width (250px). Because Box 1 has `box-sizing` set to `content-box`, however, the actual width rendered by the browser also includes the border (5 pixels) and padding (40 pixels) values, giving Box 1 an actual width of 340 pixels.

Box 2 has its `box-sizing` property set to `border-box`. This means that regardless of the border and padding values set, the element will only ever be as wide or as tall as the values of the `width` and `height` properties. In this case, the actual width of Box 2 matches the `width` property value of 250 pixels.

![](https://cdn-images-1.medium.com/max/1600/1*iv3121RENLZ2VApQ4S8q5A.png)

MDN provides a good explanation of `content-box` and `border-box`:

> “`content-box` gives you the default CSS box-sizing behavior. If you set an element’s width to 100 pixels, then the element’s content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width.

> `border-box` tells the browser to account for any border and padding in the values you specify for an element’s width and height. If you set an element’s width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. **This typically makes it much easier to size elements.**”

Spend some time playing around with this [Box Model Diagram on CodePen](https://codepen.io/carolineartz/full/ogVXZj) to see how the rendered size of elements changes between `content-box` and `border-box`.

To make our lives easier when working with the box model (and decrease the amount of math we have to do), the best practice is to declare `box-sizing: border-box;` for _all_ elements in our project using the [universal selector](https://css-tricks.com/almanac/selectors/u/universal/) (`*`) like so:

![](https://cdn-images-1.medium.com/max/1600/1*kCcW8rD2FKoZx2KLkTneBA.png)The universal selector rule above will apply **box-sizing: border-box;** to ALL elements

### Display and Positioning

The `display` and `position` properties allow us to move elements around and control the layout of our HTML markup.

#### Display

Layout in CSS starts with the `display` property. In [Week 1](https://medium.com/web-dev-basics/week-1-building-a-solid-foundation-with-html-f485669097f0) we learned that most HTML elements are divided into two categories: `block` and `inline`. Block elements (e.g. `<div>`, `<body>`, `<p>`, etc.) begin on a new line and take up the full width available. Inline elements (e.g. `<span>`, `<a>`, `<img>`, etc.) work within the flow of the surrounding content and only take up the required width.

![](https://cdn-images-1.medium.com/max/1600/1*ROA14tfE13IQb2ZRTzH3-A.png)

Here’s what the rendered markup would look like for the block and inline styles above:

![](https://cdn-images-1.medium.com/max/1600/1*ZqqTO8W2ASkaCeLjLLMqoQ.png)

There are [several other display values](https://developer.mozilla.org/en-US/docs/Web/CSS/display) besides the default `block` and `inline`, although the only other one you’re likely to work with is `display: none;`. This declaration hides the element and removes it completely from the flow document.

#### Position

Next up we have the `position` property, which as you probably guessed, establishes the position of a given element. There are four main position values that we’ll focus on:

*   `position: static;` is the default position for all HTML elements. Elements with `position` of `static` are rendered in the order that they appear in the flow of the markup, and are said to be “not positioned.” Elements with any of the other position values below are said to be “positioned.”
*   `position: relative;` elements behave the same way as those with `position: static;` until we add properties to the `top`, `right`, `bottom`, and `left` properties (e.g. `top: 20px;` or `right: 1.2rem;`). Setting values for these properties will move an element away from its normal position.
*   `position: absolute;` is the trickiest of the four to understand. Elements with `position; absolute;` can take advantage of the same `top`, `right`, `bottom`, and `left` properties, but setting values will move the element **relative to its nearest positioned ancestor**. If there aren’t any positioned ancestors, then absolutely positioned elements will adjust their position relative to the document body (i.e. the `<body>` element).
*   `position: fixed;` elements are pretty straight forward. They are positioned relative to the viewport using the `top`, `right`, `bottom`, and `left` properties, and will remain fixed in place during scrolling.

Let’s take a look at what all of this might look like when rendered in the browser:

![](https://cdn-images-1.medium.com/max/1600/1*Kq7EaoVOqP3DpgwGt-EpLw.png)The blue outline denotes the **<body>** element

* * *

### Exercises

*   [Inline, Internal, External Exercise](https://codepen.io/zheisey/pen/vMBXNM?editors=1100)
*   [Styling History Exercise](https://codepen.io/zheisey/pen/KYPqLM?editors=1100)
*   [CSS Positioning Exercise](https://codepen.io/zheisey/pen/yrBwjY?editors=1100)

### Resources

*   [**CSS Syntax**](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax): A good introduction to CSS syntax from Mozilla Developer Network (MDN).
*   [**CSS Basics: The Syntax That Matters & The Syntax That Doesn’t**](https://css-tricks.com/css-basics-syntax-matters-syntax-doesnt/): CSS-Tricks is one the best resources available for developers looking for help with CSS concepts, and this CSS syntax guide is no exception.
*   [**How CSS Selectors Work**](https://css-tricks.com/how-css-selectors-work/): Solid summary of how different types of CSS selectors can be used to style markup.
*   [**CSS Diner**](https://flukeout.github.io/): A fun little exercise to get some extra practice using CSS selectors.
*   [**Specifics On CSS Specificity**](https://css-tricks.com/specifics-on-css-specificity/): High-level overview of the ins and outs of specificity in CSS.
*   [**SpeciFISHity**](https://specifishity.com/): Visual aid that shows CSS selector specificity (going from least to most specific selector).
*   [**Cascade and Inheritance**](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance): Comprehensive overview of the concepts of cascade and inheritance from MDN.
*   [**Learn CSS Layout: Position**](http://learnlayout.com/position.html): Great overview of the position property and what each value does in terms of laying out your content.
*   [**CSS Position**](https://css-tricks.com/almanac/properties/p/position/): More information on the position property from CSS Tricks.
