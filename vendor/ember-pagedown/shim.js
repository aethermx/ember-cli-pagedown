(function() {

/* globals PageDown */

  function generateModule(name, values) {

    define(name, [], function() {
      'use strict';

      return values;
    });

  }

  generateModule('pd-converter', 
    { 'default': window.Markdown.Converter });
  generateModule('pd-get-sanitizing-converter', 
    { 'default': window.Markdown.getSanitizingConverter });

})();
