---
title: Web Dev 101
layout: default
---

<header>
<nav>
  <a href="/">Home</a>
</nav>
</header>

# Welcome to Web Dev 101!

If you've never written a line of code, but always wanted to learn, these lessons are for you! We'll learn proper code structure, syntax, and other foundational principles for each of the web's core languages - HTML, CSS, and JavaScript.

{% for lesson in site.lessons %}
  [{{ lesson.title }}]({{ lesson.url }})
{% endfor %}
