import Ember from 'ember';

export default Ember.Component.extend({

  markdown: null,

  idPostfix: '',
  wmdButtonBarId: null, 
  wmdInputId: null, 
  wmdPreviewId: null, 

  pagedownService: Ember.inject.service('pagedown'),

  _setCssIds: Ember.on('init', function() {
    var idPostfix = this.get('idPostfix');
    this.set('wmdButtonBarId', 'wmd-button-bar' + idPostfix);
    this.set('wmdInputId', 'wmd-input' + idPostfix);
    this.set('wmdPreviewId', 'wmd-preview' + idPostfix);
  }),

  didInsertElement : function() {
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent); 
  },

  afterRenderEvent: function() {
    var pagedownService = this.get('pagedownService');
    var converter = pagedownService.sanitizedConverter,
        idPostfix = this.get('idPostfix'),
        options = {};

    var editor = new pagedownService.Editor(converter, idPostfix, options);

    editor.run();
  } 

});
