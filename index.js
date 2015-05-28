/* jshint node: true */
'use strict';

module.exports = {
  included: function(app) {
    this._super.included(app);

    app.import('bower_components/pagedown/Markdown.Converter.js');
    app.import('bower_components/pagedown/Markdown.Editor.js');
    app.import('bower_components/pagedown/Markdown.Sanitizer.js');

    app.import('vendor/ember-pagedown/shim.js', {
      type: 'vendor',
      exports: { 'pd-converter': ['default'],
                 'pd-get-sanitizing-converter': ['default'],
                 'pd-editor': ['default'],
                 'pd-hook-collection': ['default'] }
    });

    app.import('vendor/assets/img/wmd-buttons.png', { destDir: 'assets/img' });
  },

  name: 'ember-cli-pagedown'

  // TODO: WIP, https://github.com/ember-cli/ember-cli/issues/3313
  /*
  treeForPublic: function() {
    return this.pickFiles('vendor/assets/img', {
      srcDir: '/',
      destDir: 'assets/img',
      files: ['wmd-buttons.png']
    });
  }
  */

};
