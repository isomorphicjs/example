
build: components app.js client.js public/styles/main.css views
	@component build --dev --standalone example


views: views/index.js views/layout.js views/user.js

views/index.js: views/index.ism
	@component convert $<

views/layout.js: views/layout.ism
	@component convert $<

views/user.js: views/user.ism
	@component convert $<


components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
