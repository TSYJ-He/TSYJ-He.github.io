<h2 id="projects" style="margin: 2px 0px -15px;">Selected Projects</h2>

<div class="publications">
<ol class="bibliography">

{% for project in site.data.projects.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if project.image %} 
    <img src="{{ project.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title">{{ project.title }}</div>
      <div class="description">{{ project.description }}</div>
      <div class="links">
        {% if project.pdf %} 
        <a href="{{ project.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
        {% endif %}
        {% if project.code %} 
        <a href="{{ project.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
        {% endif %}
      </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
