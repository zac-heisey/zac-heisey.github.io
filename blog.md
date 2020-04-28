---
title: Blog
layout: default
---

<header>
<nav>
  <a href="/">Home</a>
</nav>
  <h1>{{ title }}</h1>
</header>

{% for post in site.posts %}
  [{{ post.title }}]({{ post.url }})  
  {{ post.date | date: "%b %-d, %Y" }}
{% endfor %}
