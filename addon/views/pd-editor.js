import Ember from 'ember';

export default Ember.View.extend({

  templateName: 'pd-editor',

  markdown: null,

  html: null,

  didInsertElement : function() {
    var converter = this.pagedownService.converter,
        idPostfix = null,
        options = {};

    var editor = new this.pagedownService.Editor(converter, idPostfix, options);

    editor.run();
  } 

});
