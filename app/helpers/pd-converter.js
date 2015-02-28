import Ember from 'ember';

// TODO creating-a-custom-unbound-helper-in-ember-js
// http://stackoverflow.com/questions/22920138/

export function pdConverter(input) {
  return this.pagedownService.converter.makeHtml( input ).htmlSafe();
}

export default Ember.Handlebars.makeBoundHelper(pdConverter);
