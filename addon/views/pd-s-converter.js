import Ember from 'ember';

export default Ember.View.extend({

  tagName: 'p',

  templateName: 'pd-converter',

  markdown: null,

  html: function() {
    var markdown = this.get('markdown');
    if ( ! markdown ) {
      return markdown;
    }
    return this.pagedownService.sanitizedConverter
               .makeHtml( markdown ).htmlSafe();
  }.property('markdown')

});
