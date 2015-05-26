import Ember from 'ember';
import Converter from 'pd-converter';
import getSanitizingConverter from 'pd-get-sanitizing-converter';
import Editor from 'pd-editor';
import HookCollection from 'pd-hook-collection';

// TODO: remove compatibility for Ember < 1.13.0-beta.2
var serviceBaseObject = Ember.Service ? Ember.Service : Ember.Object;

export default serviceBaseObject.extend({

  /* singletones */

  converter: new Converter(),

  sanitizedConverter: getSanitizingConverter(),

  /* create your own */

  Converter: Converter,

  Editor: Editor,

  HookCollection: HookCollection 

});
