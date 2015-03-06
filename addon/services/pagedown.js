import Ember from 'ember';
import Converter from 'pd-converter';
import getSanitizingConverter from 'pd-get-sanitizing-converter';
import Editor from 'pd-editor';
import HookCollection from 'pd-hook-collection';

export default Ember.Object.extend({

  /* singletones */

  converter: new Converter(),

  sanitizedConverter: getSanitizingConverter(),

  /* create your own */

  Converter: Converter,

  Editor: Editor,

  HookCollection: HookCollection 

});
