(function() {

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
  generateModule('pd-editor', 
    { 'default': window.Markdown.Editor });
  generateModule('pd-hook-collection', 
    { 'default': window.Markdown.HookCollection });

})();
