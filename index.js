/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pagedown',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/pagedown/Markdown.Converter.js');
    app.import('bower_components/pagedown/Markdown.Editor.js');
    app.import('bower_components/pagedown/Markdown.Sanitizer.js');

    app.import('vendor/ember-pagedown/shim.js', {
      type: 'vendor',
      exports: { 'pd-converter': ['default'],
                 'pd-get-sanitizing-converter': ['default'] }
    });
  }
};
