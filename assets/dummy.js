/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({

    controllerProperty: (function () {
      return "This text could have been fetched from a DB.\n" + "------------------------------\n" + "Just plain **Markdown**, except that the input is sanitized:\n\n" + "<marquee>I'm the ghost from the past!</marquee>\n\n" + "and that it implements \"fenced blockquotes\" via a plugin:\n" + "\n\"\"\"\n\n" + "Do it like this:\n\n" + "1. Have idea.\n\n" + "2. ???\n\n" + "3. Profit!\n\n" + "\"\"\"";
    }).property()

  });

});
define('dummy/ember-cli-pagedown/tests/modules/ember-cli-pagedown/helpers/pd-converter.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-pagedown/helpers");
  test("modules/ember-cli-pagedown/helpers/pd-converter.js should pass jshint", function () {
    ok(true, "modules/ember-cli-pagedown/helpers/pd-converter.js should pass jshint.");
  });

});
define('dummy/ember-cli-pagedown/tests/modules/ember-cli-pagedown/helpers/pd-s-converter.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-pagedown/helpers");
  test("modules/ember-cli-pagedown/helpers/pd-s-converter.js should pass jshint", function () {
    ok(true, "modules/ember-cli-pagedown/helpers/pd-s-converter.js should pass jshint.");
  });

});
define('dummy/ember-cli-pagedown/tests/modules/ember-cli-pagedown/initializers/pagedown-service.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-pagedown/initializers");
  test("modules/ember-cli-pagedown/initializers/pagedown-service.js should pass jshint", function () {
    ok(true, "modules/ember-cli-pagedown/initializers/pagedown-service.js should pass jshint.");
  });

});
define('dummy/ember-cli-pagedown/tests/modules/ember-cli-pagedown/services/pagedown.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-pagedown/services");
  test("modules/ember-cli-pagedown/services/pagedown.js should pass jshint", function () {
    ok(true, "modules/ember-cli-pagedown/services/pagedown.js should pass jshint.");
  });

});
define('dummy/ember-cli-pagedown/tests/modules/ember-cli-pagedown/views/pd-converter.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-pagedown/views");
  test("modules/ember-cli-pagedown/views/pd-converter.js should pass jshint", function () {
    ok(true, "modules/ember-cli-pagedown/views/pd-converter.js should pass jshint.");
  });

});
define('dummy/ember-cli-pagedown/tests/modules/ember-cli-pagedown/views/pd-editor.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-pagedown/views");
  test("modules/ember-cli-pagedown/views/pd-editor.js should pass jshint", function () {
    ok(true, "modules/ember-cli-pagedown/views/pd-editor.js should pass jshint.");
  });

});
define('dummy/ember-cli-pagedown/tests/modules/ember-cli-pagedown/views/pd-s-converter.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-pagedown/views");
  test("modules/ember-cli-pagedown/views/pd-s-converter.js should pass jshint", function () {
    ok(true, "modules/ember-cli-pagedown/views/pd-s-converter.js should pass jshint.");
  });

});
define('dummy/initializers/app-pagedown-service', ['exports', 'ember-cli-pagedown/initializers/pagedown-service'], function (exports, pagedown_service) {

  'use strict';

  exports['default'] = {
    name: "app-pagedown-service",
    initialize: pagedown_service.initialize
  };

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('dummy/services/pagedown', ['exports', 'ember', 'ember-cli-pagedown/services/pagedown'], function (exports, Ember, Pagedown) {

	'use strict';

	exports['default'] = Pagedown['default'];

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("ember-cli-pagedown");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  Project repo: [aethermx/ember-cli-pagedown](https://github.com/aethermx/ember-cli-pagedown)\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Install");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("\n  ember install:addon ember-cli-pagedown\n  bower install --save https://github.com/ujifgc/pagedown.git#f1ae0f5626e044f64b937836962a9941c60c7596 \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Objects available");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","list-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","#pd_converter");
        dom.setAttribute(el2,"class","list-group-item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("view:pd-converter");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","#pd_s_converter");
        dom.setAttribute(el2,"class","list-group-item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("view:pd-s-converter");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2,"class","list-group-item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("view:pd-editor");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","list-group");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#pd_editor_text");
        dom.setAttribute(el4,"class","list-group-item");
        var el5 = dom.createTextNode("\n        view:pd-editor\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("small");
        var el6 = dom.createTextNode("text");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#pd_editor_bind");
        dom.setAttribute(el4,"class","list-group-item");
        var el5 = dom.createTextNode("\n        view:pd-editor\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("small");
        var el6 = dom.createTextNode("bind");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Examples");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","pd_converter");
        dom.setAttribute(el1,"class","panel panel-success");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-heading");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        dom.setAttribute(el3,"class","panel-title");
        var el4 = dom.createTextNode("\n      {{view 'pd-converter' markdown='*italics* **bold** [link](#)'}}\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-body");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-footer");
        var el3 = dom.createTextNode("\n    Converts Markdown to HTML. \n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","pd_s_converter");
        dom.setAttribute(el1,"class","panel panel-success");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-heading");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        dom.setAttribute(el3,"class","panel-title");
        var el4 = dom.createTextNode("\n      {{view 'pd-s-converter' markdown='*italics* **bold** [link](#)'}}\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-body");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-footer");
        var el3 = dom.createTextNode("\n    Letter s for sanitized.\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" first editor ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","pd_editor_text");
        dom.setAttribute(el1,"class","panel panel-success");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-heading");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        dom.setAttribute(el3,"class","panel-title");
        var el4 = dom.createTextNode("\n      {{view 'pd-editor' idPostfix='-first' \n              markdown='*italics* **bold** [link](http://example.org)'}}\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-body");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-footer");
        var el3 = dom.createTextNode("\n    Defaults to sanitized html.\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" second editor ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","pd_editor_bind");
        dom.setAttribute(el1,"class","panel panel-success");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-heading");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        dom.setAttribute(el3,"class","panel-title");
        var el4 = dom.createTextNode("\n      {{view 'pd-editor' idPostfix='-second' markdown=controllerProperty}}\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-body");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-footer");
        var el3 = dom.createTextNode("\n    {{controllerProperty}}");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [24]);
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [14, 3]),0,1);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [16, 3]),0,1);
        var morph2 = dom.createMorphAt(dom.childAt(fragment, [20, 3]),0,1);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [3]),0,1);
        var morph4 = dom.createMorphAt(dom.childAt(element0, [5]),2,3);
        var morph5 = dom.createMorphAt(fragment,25,26,contextualElement);
        inline(env, morph0, context, "view", ["pd-converter"], {"markdown": "*italics* **bold** [link](#)"});
        inline(env, morph1, context, "view", ["pd-s-converter"], {"markdown": "*italics* **bold** [link](#)"});
        inline(env, morph2, context, "view", ["pd-editor"], {"idPostfix": "-first", "markdown": "*italics* **bold** [link](http://example.org)"});
        inline(env, morph3, context, "view", ["pd-editor"], {"idPostfix": "-second", "markdown": get(env, context, "controllerProperty")});
        content(env, morph4, context, "controllerProperty");
        content(env, morph5, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/pd-converter', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        content(env, morph0, context, "view.html");
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/pd-editor', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","wmd-panel");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","wmd-panel wmd-preview");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, subexpr = hooks.subexpr, concat = hooks.concat, attribute = hooks.attribute, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(fragment, [3]);
        var attrMorph0 = dom.createAttrMorph(element1, 'id');
        var morph0 = dom.createMorphAt(element0,2,3);
        var attrMorph1 = dom.createAttrMorph(element2, 'id');
        attribute(env, attrMorph0, element1, "id", concat(env, [subexpr(env, context, "unbound", [get(env, context, "view.wmdButtonBarId")], {})]));
        inline(env, morph0, context, "textarea", [], {"id": get(env, context, "view.wmdInputId"), "class": "wmd-input", "value": get(env, context, "view.markdown")});
        attribute(env, attrMorph1, element2, "id", concat(env, [subexpr(env, context, "unbound", [get(env, context, "view.wmdPreviewId")], {})]));
        return fragment;
      }
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/pd-converter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:pd-converter", "Integration view:pd-converter", {

    needs: ["service:pagedown"],

    beforeEach: function beforeEach() {
      this.subject({
        markdown: null,
        pagedownService: this.container.lookup("service:pagedown")
      });
    }

  });

  ember_qunit.test("invalid markdown", function (assert) {
    var view = this.subject();
    assert.equal(view.get("html"), null);

    view.set("markdown", undefined);
    assert.equal(view.get("html"), undefined);

    view.set("markdown", 0);
    assert.equal(view.get("html"), 0);
  });

  ember_qunit.test("convert markdown", function (assert) {
    var view = this.subject();

    view.set("markdown", "*italics*");
    assert.equal(view.get("html").string, "<p><em>italics</em></p>");

    view.set("markdown", "**bold**");
    assert.equal(view.get("html").string, "<p><strong>bold</strong></p>");

    view.set("markdown", "[link](#)");
    assert.equal(view.get("html").string, "<p><a href=\"#\">link</a></p>");
  });

});
define('dummy/tests/integration/pd-converter-test.jshint', function () {

  'use strict';

  module('JSHint - integration');
  test('integration/pd-converter-test.js should pass jshint', function() { 
    ok(true, 'integration/pd-converter-test.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/pd-s-converter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:pd-s-converter", "Integration view:pd-s-converter", {

    needs: ["service:pagedown"],

    beforeEach: function beforeEach() {
      this.subject({
        markdown: null,
        pagedownService: this.container.lookup("service:pagedown")
      });
    }

  });

  ember_qunit.test("invalid markdown", function (assert) {
    var view = this.subject();
    assert.equal(view.get("html"), null);

    view.set("markdown", undefined);
    assert.equal(view.get("html"), undefined);

    view.set("markdown", 0);
    assert.equal(view.get("html"), 0);
  });

  ember_qunit.test("convert markdown", function (assert) {
    var view = this.subject();

    view.set("markdown", "*italics*");
    assert.equal(view.get("html").string, "<p><em>italics</em></p>");

    view.set("markdown", "**bold**");
    assert.equal(view.get("html").string, "<p><strong>bold</strong></p>");

    view.set("markdown", "[link](#)");
    assert.equal(view.get("html").string, "<p>link</p>");
  });

});
define('dummy/tests/integration/pd-s-converter-test.jshint', function () {

  'use strict';

  module('JSHint - integration');
  test('integration/pd-s-converter-test.js should pass jshint', function() { 
    ok(true, 'integration/pd-s-converter-test.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/initializers/app-pagedown-service-test', ['ember', 'ember-cli-pagedown/initializers/pagedown-service', 'qunit'], function (Ember, pagedown_service, qunit) {

  'use strict';

  var container, application;

  qunit.module("AppPagedownServiceInitializer", {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        container = application.__container__;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test("it works", function (assert) {
    pagedown_service.initialize(container, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});
define('dummy/tests/unit/initializers/app-pagedown-service-test.jshint', function () {

  'use strict';

  module('JSHint - unit/initializers');
  test('unit/initializers/app-pagedown-service-test.js should pass jshint', function() { 
    ok(true, 'unit/initializers/app-pagedown-service-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/services/pagedown-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("service:pagedown", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

  // Specify the other units that are required for this test.
  // needs: ['service:foo']

});
define('dummy/tests/unit/services/pagedown-test.jshint', function () {

  'use strict';

  module('JSHint - unit/services');
  test('unit/services/pagedown-test.js should pass jshint', function() { 
    ok(true, 'unit/services/pagedown-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/views/pd-converter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:pd-converter");

  ember_qunit.test("it exists", function (assert) {
    var view = this.subject();
    assert.ok(view);
  });

});
define('dummy/tests/unit/views/pd-converter-test.jshint', function () {

  'use strict';

  module('JSHint - unit/views');
  test('unit/views/pd-converter-test.js should pass jshint', function() { 
    ok(true, 'unit/views/pd-converter-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/views/pd-editor-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:pd-editor");

  ember_qunit.test("it exists", function (assert) {
    var view = this.subject();
    assert.ok(view);
  });

  ember_qunit.test("no idPostfix", function (assert) {
    var view = this.subject();
    assert.equal(view.get("wmdButtonBarId"), "wmd-button-bar");
    assert.equal(view.get("wmdInputId"), "wmd-input");
    assert.equal(view.get("wmdPreviewId"), "wmd-preview");
  });

  ember_qunit.test("idPostfix = second", function (assert) {
    var view = this.subject({
      idPostfix: "-second"
    });
    assert.equal(view.get("wmdButtonBarId"), "wmd-button-bar-second");
    assert.equal(view.get("wmdInputId"), "wmd-input-second");
    assert.equal(view.get("wmdPreviewId"), "wmd-preview-second");
  });

  ember_qunit.test("idPostfix = ''", function (assert) {
    var view = this.subject({
      idPostfix: ""
    });
    assert.equal(view.get("wmdButtonBarId"), "wmd-button-bar");
    assert.equal(view.get("wmdInputId"), "wmd-input");
    assert.equal(view.get("wmdPreviewId"), "wmd-preview");
  });

  ember_qunit.test("idPostfix can be set only at init", function (assert) {
    var view = this.subject();
    view.set("idPostfix", "foobar");
    assert.equal(view.get("wmdButtonBarId"), "wmd-button-bar");
    assert.equal(view.get("wmdInputId"), "wmd-input");
    assert.equal(view.get("wmdPreviewId"), "wmd-preview");
  });

});
define('dummy/tests/unit/views/pd-editor-test.jshint', function () {

  'use strict';

  module('JSHint - unit/views');
  test('unit/views/pd-editor-test.js should pass jshint', function() { 
    ok(true, 'unit/views/pd-editor-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/views/pd-s-converter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:pd-s-converter");

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var view = this.subject();
    assert.ok(view);
  });

});
define('dummy/tests/unit/views/pd-s-converter-test.jshint', function () {

  'use strict';

  module('JSHint - unit/views');
  test('unit/views/pd-s-converter-test.js should pass jshint', function() { 
    ok(true, 'unit/views/pd-s-converter-test.js should pass jshint.'); 
  });

});
define('dummy/views/pd-converter', ['exports', 'ember-cli-pagedown/views/pd-converter'], function (exports, pdConverter) {

	'use strict';

	exports['default'] = pdConverter['default'];

});
define('dummy/views/pd-editor', ['exports', 'ember', 'ember-cli-pagedown/views/pd-editor'], function (exports, Ember, pdEditor) {

	'use strict';

	exports['default'] = pdEditor['default'];

});
define('dummy/views/pd-s-converter', ['exports', 'ember-cli-pagedown/views/pd-s-converter'], function (exports, pdSConverter) {

	'use strict';

	exports['default'] = pdSConverter['default'];

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-cli-pagedown","version":"0.0.0.42c2accd"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map