import Ember from 'ember';

export default Ember.Controller.extend({

  controllerProperty: Ember.computed(function() {
    return "This text could have been fetched from a DB.\n"+
           "------------------------------\n"+
           "Just plain **Markdown**, except that the input is sanitized:\n\n"+
           "<marquee>I'm the ghost from the past!</marquee>\n\n"+
           "and that it implements \"fenced blockquotes\" via a plugin:\n"+
           "\n\"\"\"\n\n"+
           "Do it like this:\n\n"+
           "1. Have idea.\n\n"+
           "2. ???\n\n"+
           "3. Profit!\n\n"+
           "\"\"\"";
  })

});
