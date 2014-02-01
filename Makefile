all:
	@./node_modules/jsify/bin/jsify templates/* -o lib/templates.js
