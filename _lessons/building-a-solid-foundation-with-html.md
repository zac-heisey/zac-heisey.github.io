---
title: Lesson 1 - Building a Solid Foundation with HTML 🏗️
layout: default
description: Structure your HTML with semantic markup, learn about tags, elements, and attributes, as well as forms, links, images, and other advanced elements.
---

Nearly every project built for the web relies on Hypertext Markup Language, or HTML, as its foundation. HTML is the standard markup language for all websites and web apps, and, when paired with CSS and JavaScript, make up the fundamental technologies of the web as we know it.

If we think of a website or web application as a physical building, HTML would represent the frame and other structural components that give that building shape and support.

When HTML is combined with content — text, images, video, etc. — browsers are able interpret and render our web pages to users.

![HTML Structure is like a Building Frame](https://res.cloudinary.com/zheisey/image/upload/f_auto/v1573769310/zac-heisey.com/lessons/html-structure-building-frame.jpg "house frame representing HTML structure")

Below we'll take a look at the building blocks of HTML (tags, elements, attributes, etc.), as well as explore some more advanced elements like `<form>`, `<link>`, and `<img>`. Once we've gotten a handle on basic HTML syntax, we'll work on properly structuring our HTML document to ensure our markup is properly rendered by browsers.

## Tags and Elements

Tags are the primary building blocks of HTML. They allow us to provide [semantic meaning](https://www.lifewire.com/why-use-semantic-html-3468271) to our content and indicate to browsers how our web pages should be interpreted and rendered.

The specific HTML tags we use will depend primarily on the type of content we're marking up. When marking up paragraphs of text, for example, we use `<p>` tags. For heading content, we might use an `<h1>` tag.

There are _tons_ of HTML tags to choose from, which can make choosing the right one difficult. Don't worry too much in the beginning about picking the most semantically appropriate tag — it's more important that you become comfortable with reading and writing HTML syntax first.

If you're unsure of which types of tags to use in your markup, you can reference [this list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) on MDN web docs, or check out the handy periodic table of HTML elements below:

![periodic table of HTML elements](https://res.cloudinary.com/zheisey/image/upload/f_auto/v1573769310/zac-heisey.com/lessons/html-element-syntax.jpg "periodic table of HTML elements")

Most HTML elements consist of an opening tag and closing tag. In between these opening and closing tags is where we place our content, be it text, an image, etc. Opening tags are comprised of left and right brackets `(<>)`, while closing tags feature a forward slash `(</>)` like so:

```html
<h1>This is a standard heading element.</h1>

<p>This is a standard paragraph element.</p>

<div>Between div tags we can include content without adding any semantic meaning.</div>
```

Although the terms _tag_ and _element_ are often used interchangeably, there is a difference. The term _element_ refers to the opening tag, closing tag, and any attributes or content contained in between, while _tags_ refer only to the opening and closing tags of an element.

![typical HTML element](https://res.cloudinary.com/zheisey/image/upload/f_auto/v1573769310/zac-heisey.com/lessons/html-element-syntax.jpg "typical HTML element")

The image above shoes a typical HTML element consisting of an opening tag, content, and closing tag (Image: [htmlandcssbook.com](http://www.htmlandcssbook.com)).

A handful of tags in HTML are _self-closing_. This means that they don't have a corresponding closing tag to match their opening tag. `<img>` tags are a common example of self-closing tags that you'll come across as you read and write HTML.

```html
<!-- Incorrect use of self-closing tag -->
<img src="sunset.jpg" alt="beautiful sunset"></img>

<!-- Correct use of self-closing tag -->
<img src="sunset.jpg" alt="beautiful sunset">
```

**Block and Inline Elements**

By default, nearly all HTML elements are organized into one of two categories: block and inline. Block elements begin on a new line and take up the full width of the page. The standard block element is the `<div>`. Other common block elements include:

* `<body>`
* `<h1>` through `<h6>`
* `<p>`
* `<header>` and `<footer>`

Inline elements work within the flow of the surrounding content, rather than breaking onto their own line. They also take up _only_ the width of the content itself, rather than the entire width of the page. The standard inline element is the `<span>`. Other common inline elements include:

* `<a>`
* `<img>`
* `<input>`

**Element Attributes**

Attributes add meaning and functionality to our HTML elements. We include attributes as part of the opening tag of a given element, with most attributes written as name-value pairs in the following format: `attribute="value"`.

Just as there are tons of HTML elements at our disposal, there are [dozens of different attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) we can apply depending on the element being used and functionality we're after.

Two attributes we'll use _a lot_ in HTML are `id` and `class`. These attributes act primarily as “hooks” for our future CSS styles and JavaScript functionality. For now, the important think to know is that we can apply the same `class` to multiple elements in our markup, but individual `id` attributes can only be used _once_ within an HTML document.

```html
<!-- The class and id attributes are primarily used for styling (via CSS) and interactivity (via JavaScript) -->
<main id="main-content">
  <h1 class="header-text">My Super Important Heading</h1>
</main>

<!-- The href attribute is mainly used with <a> and <link> tags. It provides the URL of the linked resource -->
<a href="https://www.zac-heisey.com/web-dev-101/">Learn Web Dev</a>
<link rel="stylesheet" href="/style.css">

<!-- The required attribute is often used with form elements. It indicates that a given field is required in
order to submit the form. Note that a value isn't necessary with this attribute -->
<input type="text" name="user-name" id="name" required>
<textarea name="user-message" id="message" required></textarea>
```

## Forms

Forms are the primary way we send and receive user information on the web. We use the `<form>` element to define a form in HTML, along with some attributes and additional elements to build out the fields of our HTML form:

```html
<!-- A typical contact form might look something like this -->
<form action="/thank-you" method="POST" name="contact-form">

  <!-- Text input asking for user's name -->
  <label for="name">Enter Your Name:</label>
  <input type="text" name="user-name" placeholder="John Doe" id="name">

  <!-- Email input asking for user's email address -->
  <label for="email">Enter Your Email:</label>
  <input type="email" name="user-email" placeholder="johndoe@hotmail.com" id="email">

  <!-- Submit input defining a button to send form data -->
  <input type="submit" value="Submit">

</form>
```

Let's break down the different parts of the above `<form>` element. Our opening `<form>` tag includes three attributes:

* `action="/thank-you"` defines the location where our form data will be submitted to.
* `method="POST"` references the HTTP method used to process our form. The `method` value will usually be either `POST` or `GET`. For most contact forms, we'll use `POST`.
* `name="contact-form"` gives our form a name when it's sent to the server.

Next, we have `<label>` and `<input>` form elements, which represent the actual fields a user will interact with when they enter their information in our form.

* The `<label>` tags provide descriptive labels for our `<input>` tags. Notice that `for` attribute value matches the `id` attribute value of the corresponding `<input>` tag. This ensures the `<label>` is bound to its associated `<input>`.
* `<input>` tags define fields where users can enter different types of data to be submitted with the form. There are many [types of `<input>` tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) we can use, depending on the type of data we want to collect (e.g. emails, phone numbers, passwords, short messages, multiple choices, etc.). The `type` attribute is used to indicate the type of input field we want to use, and we can also give a name to the data entered in a given field by entering a value for the `name` attribute.

When rendered in the browser, the markup for our form would appear like so:

<div class="rendered-example">
  <label for="name">Enter Your Name:</label>
  <input type="name" name="user-name" placeholder="John Doe" id="name">

  <label for="email">Enter Your Email:</label>
  <input type="email" name="user-email" placeholder="johndoe@hotmail.com" id="email">

  <input type="submit" value="Submit">
</div>

## Links

Hyperlinks — or just simply, links — are a foundational element of the World Wide Web. In its earliest days, the internet was basically just a collection of HTML documents strung together with links.

We create links in HTML using the _anchor_ element, which consists of:

* Opening `(<a>)` and closing `(</a>)` tags.
* A required `href` attribute that most often takes a URL as its value.
* An optional but commonly used `target` attribute to define where the link should be opened when clicked. Typically you'll use `target="_blank"` to open up a link in a new browser tab.

```html
<!-- We create links in HTML using anchor tags like so -->
<a href="https://www.zac-heisey.com">Visit My Awesome Website!</a>

<!-- This link will open in a new tab when clicked -->
<a href="https://www.google.com/" target="_blank">Search On Google.com</a>
```

Note that hyperlinks (written with the `<a>` element) are different from `<link>` elements, which are used to refer to an external resource (usually a CSS stylesheet). `<link>` elements will be most often be found in the `<head>` section of an HTML document, which we'll talk more about later in this lesson.

## Images

What would the web be without cat pics and memes? Images make up a key component of the web and come in a variety of format types (jpg, png, gif, and svg). The `<img>` tag is how we embed images into HTML documents:

```html
<!-- We add images to HTML documents with the <img> tag -->
<img src="/assets/images/mountains.jpg" alt="picture of mountains">
```

The `<img>` element has two required attributes:

* `src` provides the location ([relative or absolute URL](https://www.seoclarity.net/resources/knowledgebase/difference-relative-absolute-url-15325/)) of the image we want to reference.
* `alt` provides an alternative text description of the referenced image for screen readers, search engines, etc.

## Lists

Another HTML tag utilized frequently is the `<li>`, which represents a list item. We use `<li>` tags to write out bulleted and numbered lists, and it is also commonly used to craft navigation items for a website and application.

`<li>` elements _must_ be contained inside a parent element, which most often will either be a `<ul>` (unordered list) or `<ol>` (ordered list) element.

```html
<!-- <li> tags in a <ul> element create an unordered list -->
<ul id="unordered-list">
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ul>

<!-- <li> tags in a <ol> element create an ordered list -->
<ol id="ordered-list">
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ol>
```

The markup for these two types of lists would appear like this in the browser:

<div class="rendered-example">
  <p>Unordered List</p>
  <ul id="unordered-list">
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
  </ul>

  <p>Ordered List</p>
  <ol id="ordered-list">
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
  </ol>
</div>

When using `<li>` elements as navigation items, we wrap the parent `<ul>` or `<ol>` element with a navigation, or [`<nav>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav).

```html
<!-- Wrapping <ul> or <ol> elements with <nav> tags creates a semantic navigation element in our markup -->
<nav id="site-nav">
  <ul id="nav-items">
    <li>Nav Item 1</li>
    <li>Nav Item 2</li>
    <li>Nav Item 3</li>
  </ul>
</nav>
```

The markup above would be rendered just like the previous `<ul>` element. We can then use CSS to style it as a set of navigation items (e.g. horizontally aligned, remove bullet points, etc.).

## HTML Document Structure

Now that we've gotten a feel for using tags and creating elements in HTML, it's time to learn how put that knowledge to use by first exploring how to properly structure an HTML document.

Just as the design and structure of a physical building's frame is critical to its strength and longevity, so too is the structure of our HTML documents to the functionality and extendability of our websites and web apps.

**<!DOCTYPE> Declaration and the <html> Tag**

Before we write any HTML code in our document, we first need to add a doctype declaration like so:

`<!DOCTYPE html>`

This declaration, written as the first line of code in any HTML document, indicates to the browser how the document should be rendered. MDN web docs [provides a solid explanation](https://developer.mozilla.org/en-US/docs/Glossary/Doctype):

> “In HTML, the doctype is the required “<!DOCTYPE html>" preamble found at the top of all documents. Its sole purpose is to prevent a browser from switching into so-called [“quirks mode”](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode) when rendering a document; that is, the "<!DOCTYPE html>" doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.”

Once we've declared to the browser the type of document to be rendered with `<!DOCTYPE html>`, we use the `<html>` tag to define the _root element_ of our markup. Sometimes referred to as the _main root_, the `<html>` element is top-level element in our markup, meaning all other elements are descendants of the `<html>` element.

In other words, all of our HTML code will be written inside of the `<html>` element.

At this point, the markup for our HTML document should like this:

```html
<!-- Basic HTML document structure -->
<!DOCTYPE html>
<html>
  <!-- All of our HTML code will be written here -->
</html>
```

**Head**

The first element placed inside of our `<html>` element is the `<head>` element. This is where we place all of our document's metadata — basically, stuff that gets read and interpreted by machines (browsers, computers, etc.) instead of humans. As such, **code that we write inside of the** `**<head>**` **element does not get rendered in the browser window**.

A typical `<head>` element may include:

* `<meta>` tags that provide structured metadata about the document. [There are a variety](https://gist.github.com/lancejpollard/1978404) of different `<meta>` tags to choose from. I typically use `charset`, `viewport`, and `description` in my projects.
* A `<title>` tag defining the title of the document.
* `<link>` tags that link external resources to the document (such as external CSS stylesheets, etc.).
* `<script>` tags that reference or contain executable snippets of JavaScript code. You may also see `<script>` tags placed just before the closing `</body>` tag of a document.

Adding a `<head>` and associated elements, our HTML document structure should now look something like this:

```html
<!-- Basic HTML document structure -->
<!DOCTYPE html>
<html>
  <head>
    <!-- Declares the document's character encoding -->
    <meta charset="utf-8">
    <!-- Displays document properly based on user's device -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Title of the document -->
    <title>My First HTML Document</title>
    <!-- Link to external CSS stylesheet -->
    <link rel="stylesheet" href="/css/style.css">
    <!-- Reference to external JavaScript file -->
    <script src="/js/main.js" charset="utf-8"></script>
  </head>

</html>
```

**Body**

The next required element in our HTML document is the `<body>` element. Any markup or content we want to display to end users should be written within this element. **Anything we write between inside the `<body>` element will be interpreted and rendered by the browser**.

Most of the tags and elements we've learned about so far should be placed inside the `<body>` element. Building on our HTML document structure example, including a `<body>` element might look like this:

```html
<!-- Basic HTML document structure -->
<!DOCTYPE html>
<html>
  <head>
    <!-- Declares the document's character encoding -->
    <meta charset="utf-8">
    <!-- Displays document properly based on user's device -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Title of the document -->
    <title>My First HTML Document</title>
    <!-- Link to external CSS stylesheet -->
    <link rel="stylesheet" href="/css/style.css">
    <!-- Reference to external JavaScript file -->
    <script src="/js/main.js" charset="utf-8"></script>
  </head>

  <body>
    <nav id="site-nav">
      <ul id="nav-items">
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#contact-me">Contact Me</a></li>
      </ul>
    </nav>
    <main id="main-content">
      <section id="about-me">
        <h1>About Me</h1>
        <p>My name is Zac. I like code and coffee!</p>
      </section>
      <section id="contact-me">
        <h1>Contact Me</h1>
        <form action="/thank-you" method="POST" name="contact-form">
          <label for="name">Enter Your Name:</label>
          <input type="text" name="user-name" placeholder="John Doe" id="name">
          <label for="email">Enter Your Email:</label>
          <input type="email" name="user-email" placeholder="johndoe@hotmail.com" id="email">
          <input type="submit" value="Submit">
        </form>
      </section>
    </main>
  </body>

</html>
```

There's a lot going on above — let's break down what we've written in the `<body>` element:

* Our body section begins with a `<nav>` element and two navigation items (as `<li>` elements) that include anchor (`<a>`)tags linking to the _About Me_ and _Contact Me_ sections in the markup.
* Next we include a `<main>` element with an id attribute (`id="main-content"`). This element indicates to browsers, screen readers, and other assistive technologies that this is where the primary content of the page is located.
* Inside of the `<main>` element we have two `<section>` elements — one containing the About Me content (`id="about-me"`), and the other containing a contact form (`id="contact-me"`). We use elements like `<main>` and `<section>` to segment our content into thematically related groupings.

**Relationships and Nesting**

A key concept of HTML document structure has to do with the relationships between various elements in our markup. A diagram showing the basic structure of an HTML document looks a bit like an upside down family tree:

![Basic HTML document structure](https://res.cloudinary.com/zheisey/image/upload/f_auto/v1573769310/zac-heisey.com/lessons/basic-html-doc-structure.gif "Basic HTML document structure")

We use the same vocabulary to indicate the relationship between HTML elements as we do with a family tree:

* All elements contained with a given element are said to be its **descendants**.
* An element that is directly contained within another element is said to be a **child** of that element.
* The containing element is said to be the **parent**.
* Elements higher up in the document structure are said to be **ancestors** of elements that come later in the markup.
* Two elements within the same containing parent element are said to be **siblings**.

To help indicate these relationships and make our code more readable, we use a technique called _nesting_ when we write code. Nesting simply means we indent elements (usually using the `tab` key) within other elements to visually indicate the structural relationship between those elements.

Consider the two HTML code blocks below, both of which will be interpreted and rendered exactly the same in the browser:

```html
<!-- Without Nesting = Hard to read, hard to debug 😩 -->
<html>
<head>
<meta charset="utf-8">
<title>My Title</title>
<link rel="stylesheet" href="/css/style.css">
</head>
<body>
<h1>My Heading</h1>
<p>My paragraph content.</p>
</body>
</html>

<!-- With Nesting = Easy to read, easy to debug 😌 -->
<html>
  <head>
    <meta charset="utf-8">
    <title>My Title</title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <h1>My Heading</h1>
    <p>My paragraph content.</p>
  </body>
</html>
```

It's much easier to see that the `<h1>` and `<p>` elements are siblings of each other and children of the `<body>` element in the nested code block than it is to visualize those relationships in the code block without proper nesting.

**Comments**

You've probably noticed in the various code block examples in this lesson some lines that look like this:

```html
<!-- This is a comment in HTML. It will NOT be rendered in the browser, even when inside the <body> element -->
```

_Comments_ in our HTML code can help make our markup easier to understand (both for ourselves and other developers), or can be used disable portions of our code from being rendered in the browser. Well-commented code is the mark of an organized and considerate developer 🙌.

The syntax for HTML comments begins with `<!--` and ends with `-->`. Anything between those characters will NOT be rendered in the browser:

```html
<body>
  <!-- This comment won't show up on the screen -->
  <p>But this content sure will!</p>

  <!-- This comment wraps around the paragraph element below...
  <p>So I'll be hidden from view!</p> -->
</body>
```

---

## Exercises

* [Element Jumble Exercise](https://codepen.io/zheisey/pen/qvVXZo?editors=1100)
* [Article Markup Exercise](https://codepen.io/zheisey/pen/KEXgaW?editors=1100)
* [Form Builder Exercise](https://codepen.io/zheisey/pen/LaeJPL?editors=1100)

## Resources

* [**htmlreference.io**](https://htmlreference.io/): Super useful guide that you'll definitely want to bookmark. You can sort HTML elements by type (self-closing, inline, block, etc.), and you can also get specifics on each element like proper structure, required and optional attributes, etc.
* [**HTML5 Doctor**](http://html5doctor.com/): Another prime bookmark candidate. It provides a really handy index of HTML5 elements that you can use to write more semantic markup and [avoid the dreaded “div soup.”](https://medium.com/web-dev-basics/7-alternatives-to-the-div-html-tag-7c888c7b5036)
* [**HTML Element Reference**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element): MDN web docs is an amazing resources for all things web development, and this comprehensive list of HTML elements is no exception.
* [**HTML Attribute Reference**](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes): As we've discussed there are lots of attributes that can be applied to the various HTML elements in our markup depending on the type of element being used, our goal for using a particular attribute, etc. This extensive list of available HTML attributes is a great reference for knowing which attributes can be used with which elements, and what their purpose is.
* [**HTML Content Categories**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories): Another really useful resource from MDN web docs. This page gives a thorough breakdown of the main content categories, along with a list of specific elements belonging to each category.
