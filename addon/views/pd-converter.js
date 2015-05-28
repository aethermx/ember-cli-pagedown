import Ember from 'ember';

export default Ember.View.extend({

  tagName: 'p',

  templateName: 'pd-converter',

  markdown: null,

  pagedownService: Ember.inject.service('pagedown'),

  html: Ember.computed('markdown', function() {
    var markdown = this.get('markdown');
    if ( ! markdown ) {
      return markdown;
    }
    var pagedownService = this.get('pagedownService');
    var html = pagedownService.converter.makeHtml( markdown );
    return Ember.String.htmlSafe( html );
  })

});
