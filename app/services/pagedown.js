import Ember from 'ember';
import Converter from 'pd-converter';
import getSanitizingConverter from 'pd-get-sanitizing-converter';

export default Ember.Object.extend({

  converter: new Converter(),

  sanitizedConverter: getSanitizingConverter()

});
