---
layout: page
---

<!-- Projects Section -->
# Past Projects & Clients
<h3 style="text-align:center;">AEC Web Design & Marketing Projects</h3>

<!-- Loop Through Projects Collection -->
{% for project in site.projects %}
<div class="project">
  <img src="{{ project.mockup }}">
  <h3>{{ project.title }}</h3>
  {% assign break = "<br>" %}
  <p>{{ project.services | join: break }}</p>
  <p>Client Site: <a href="{{ project.site }}">{{ project.site }}</a></p>
  {% if project.case-study and project.case-study != "" %}
  <a href="{{ project.case-study }}">View Case Study</a>
  {% endif %}
</div>  
{% endfor %}
