import Ember from 'ember';

export function pdConverter(input) {
  return this.pagedownService.converter.makeHtml( input ).htmlSafe();
}

export default Ember.Handlebars.makeBoundHelper(pdConverter);
