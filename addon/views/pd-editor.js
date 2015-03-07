import Ember from 'ember';

export default Ember.View.extend({

  templateName: 'pd-editor',

  markdown: null,

  idPostfix: '',
  wmdButtonBarId: null, 
  wmdInputId: null, 
  wmdPreviewId: null, 

  _idPostfix: function() {
    var idPostfix = this.get('idPostfix');
    this.set('wmdButtonBarId', 'wmd-button-bar' + idPostfix);
    this.set('wmdInputId', 'wmd-input' + idPostfix);
    this.set('wmdPreviewId', 'wmd-preview' + idPostfix);
  }.on('init'),

  didInsertElement : function() {
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent); 
  },

  afterRenderEvent: function() {
    var converter = this.pagedownService.sanitizedConverter,
        idPostfix = this.get('idPostfix'),
        options = {};

    var editor = new this.pagedownService.Editor(converter, idPostfix, options);

    editor.run();
  } 

});
