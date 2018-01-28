---
title: Projects
layout: page
---

<!-- Projects Section -->
# Past Projects & Clients
<h3 style="text-align:center;">Home Improvement & AEC Clients I've Worked With</h3>

<!-- Loop Through Projects Collection -->
{% for project in site.projects %}
<div class="project">
  <h3>{{ project.title }}</h3>
  <a href="{{ project.url }}"><img src="{{ project.logo }}"></a>
  <p id="services-list">{{ project.services | join: ", " }}</p>
  <p><a href="{{ project.url }}">VIEW PROJECT</a></p>
</div>
{% endfor %}
