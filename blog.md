---
title: Blog
layout: default
---

<header>
  <h1>My Blog</h1>
</header>

{% for post in site.posts %}
  [{{ post.title }}]({{ post.url }})  
  {{ post.date | date: "%b %-d, %Y" }}
{% endfor %}
