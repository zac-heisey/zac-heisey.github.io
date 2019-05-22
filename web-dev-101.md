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

Never written a line of code, but always wanted to learn? This is the course for you. We'll learn proper code structure, syntax, and other foundational principles for each of the web's core languages - HTML, CSS, and JavaScript.

{% for lesson in site.courses %}
  [{{ lesson.title }}]({{ lesson.url }})
{% endfor %}
