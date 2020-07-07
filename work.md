---
title: My Work
layout: default
---

{% for project in site.projects %}

  <section class="project">

    <img src="https://res.cloudinary.com/zheisey/image/upload/c_scale,f_auto,q_auto,w_750/zac-heisey.com/projects/{{ project.featured-img }}" alt="{{ project.title }} featured image">

    <div class="intro">
      <small>{{ project.client }}</small>
      <h2>{{ project.title }}</h2>
      <a href="{{ project.url }}">View Project</a>
    </div>

  </section>

{% endfor %}

<!--

FEATURED PROJECTS
---
- Aqua.org redesign (client)
- FGR Eco Park (concept)
- IDF Fitness App (concept)
- WYPR.org redesign (concept)
- Re-Imagining Baltimore's Inner Harbor (concept)
- Re-Imagining Baltimore's Highway to Nowhere (concept)
- Turning Abondoned Row Homes into Community Spaces (concept)

ORGS I'VE WORKED WITH (logos)
---
- Techies 4 Good
- Ulman Cancer Fund
- Waterfront Alliance
- Rethink Baltimore
- GA Ballet
- Baltimore Green Space

-->
