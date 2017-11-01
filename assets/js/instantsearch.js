var search = instantsearch({
	appId: "0ZOC7G44GQ",
	apiKey: "af5d43c2fe4dd921be946e80957a18db",
	indexName: 'sabgaby',
	searchParameters: {
	 filters: 'flow:1',
 }
});


search.addWidget(
	instantsearch.widgets.searchBox({
		container: '#search-box',
		autofocus: false,
		placeholder: 'Search for works',
		cssClasses: {
			root: 'ui icon left input fluid'
		},
	})
);
search.addWidget(
	instantsearch.widgets.hits({
		container: '#hits-container',
		templates: {
			empty: 'Nothing matches that. Sorry!',
			item: `	<a class="image" href="{{ url }}">
						    <img src="/assets/img/{{ parent }}.png">
						  </a>
							<div class="content">
								<div class="header">{{{ _highlightResult.title.value }}}</div>			</a>
								<div class="meta">
									{{ pretty-date }}
								</div>
								<div class="description">
									{{ description }}
								</div>
							</div>
							<div class="extra content">
							{{#tags}}
							<span>
								<div class="ui tiny label tag-color">
									{{.}}
								</div>
							</span>
							{{/tags}}
							</div>`
		},
		cssClasses: {
			root: 'ui link three cards',
			item:'ui centered card'
		},
		hitsPerPage: 10
	})
);
search.start();
