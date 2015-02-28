import Ember from 'ember';

export function pdSConverter(input) {
  return this.pagedownService.sanitizedConverter.makeHtml( input ).htmlSafe();
}

export default Ember.Handlebars.makeBoundHelper(pdSConverter);
