import Ember from 'ember';

export default Ember.View.extend({

  tagName: 'p',

  templateName: 'pd-converter',

  markdown: '',

  html: function() {
    var markdown = this.get('markdown');
    return this.pagedownService.converter
               .makeHtml( markdown ).htmlSafe();
  }.property('markdown')

});
