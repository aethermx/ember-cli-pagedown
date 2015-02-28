import Ember from 'ember';

export default Ember.Controller.extend({

  computedProperty: function() {
    return '###h3\n' + 
           '[example link](http://example.org/)' + 
           '\n\n> example quote';
  }.property()

});
