---
title: Blog
layout: default
---

# AEC Marketing Blog

### Marketing News, Trends, & Tips for AEC Companies

{% for post in site.posts %}
  [{{ post.title }}]({{ post.url }})  
  {{ post.date | date: "%b %-d, %Y" }}
{% endfor %}
