define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/pd-converter",["exports","ember-cli-pagedown/components/pd-converter"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/pd-editor",["exports","ember-cli-pagedown/components/pd-editor"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/pd-s-converter",["exports","ember-cli-pagedown/components/pd-s-converter"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({controllerProperty:t["default"].computed(function(){return'This text could have been fetched from a DB.\n------------------------------\nJust plain **Markdown**, except that the input is sanitized:\n\n<marquee>I\'m the ghost from the past!</marquee>\n\nand that it implements "fenced blockquotes" via a plugin:\n\n"""\n\nDo it like this:\n\n1. Have idea.\n\n2. ???\n\n3. Profit!\n\n"""'})})}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!r){var i=n(d.toString());a["default"].libraries.register(i,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/services/pagedown",["exports","ember-cli-pagedown/services/pagedown"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:7,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","container");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[1,1]),1,1),n},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("dummy/templates/components/pd-converter",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/pd-converter.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","html"]],locals:[],templates:[]}}())}),define("dummy/templates/components/pd-editor",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:11,column:0}},moduleName:"dummy/templates/components/pd-editor.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","wmd-panel");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","wmd-panel wmd-preview"),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[1]),r=e.childAt(n,[1]),d=e.childAt(t,[3]),i=new Array(3);return i[0]=e.createAttrMorph(r,"id"),i[1]=e.createMorphAt(n,3,3),i[2]=e.createAttrMorph(d,"id"),i},statements:[["attribute","id",["concat",[["subexpr","unbound",[["get","wmdButtonBarId"]],[]]]]],["inline","textarea",[],["id",["subexpr","@mut",[["get","wmdInputId"]],[]],"class","wmd-input","value",["subexpr","@mut",[["get","markdown"]],[]]]],["attribute","id",["concat",[["subexpr","unbound",[["get","wmdPreviewId"]],[]]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/pd-s-converter",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/pd-s-converter.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","html"]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:131,column:0}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h1");e.setAttribute(a,"id","title");var n=e.createTextNode("ember-cli-pagedown");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("a");e.setAttribute(a,"href","https://github.com/aethermx/ember-cli-pagedown");var n=e.createElement("img");e.setAttribute(n,"style","position: absolute; top: 0; right: 0; border: 0;"),e.setAttribute(n,"src","https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67"),e.setAttribute(n,"alt","Fork me on GitHub"),e.setAttribute(n,"data-canonical-src","https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"),e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h2"),n=e.createTextNode("Install");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("pre"),n=e.createTextNode("\n  ember install ember-cli-pagedown\n  bower install --save https://github.com/ujifgc/pagedown.git#f1ae0f5626e044f64b937836962a9941c60c7596 \n\n  # if ember-cli <= 0.2.2\n  ember install:addon ember-cli-pagedown\n  bower install --save https://github.com/ujifgc/pagedown.git#f1ae0f5626e044f64b937836962a9941c60c7596 \n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h2"),n=e.createTextNode("Components provided");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","list-group");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","#pd_converter"),e.setAttribute(n,"class","list-group-item");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("strong"),d=e.createTextNode("pd-converter");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","#pd_s_converter"),e.setAttribute(n,"class","list-group-item");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("strong"),d=e.createTextNode("pd-s-converter");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n \n  ");e.appendChild(a,n);var n=e.createElement("li");e.setAttribute(n,"class","list-group-item");var r=e.createTextNode("\n    pd-editor\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","list-group");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"href","#pd_editor_text"),e.setAttribute(d,"class","list-group-item");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("strong"),l=e.createTextNode("pd-editor with text");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"href","#pd_editor_bind"),e.setAttribute(d,"class","list-group-item");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("strong"),l=e.createTextNode("pd-editor with a bind");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h2"),n=e.createTextNode("Examples");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","pd_converter"),e.setAttribute(a,"class","panel panel-success");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-heading");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h3");e.setAttribute(r,"class","panel-title");var d=e.createTextNode("\n      pd-converter\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-body");var r=e.createTextNode("\n    Converts Markdown to HTML. \n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("code"),d=e.createTextNode("\n      {{pd-converter markdown='*italics* **bold** [link](#)'}}\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","well well-sm");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","pd_s_converter"),e.setAttribute(a,"class","panel panel-success");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-heading");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h3");e.setAttribute(r,"class","panel-title");var d=e.createTextNode("\n      pd-s-converter\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-body");var r=e.createTextNode("\n    Converts Markdown to HTML. \n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    The letter ");e.appendChild(n,r);var r=e.createElement("strong"),d=e.createTextNode("s");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode(" stands for sanitized.\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("code"),d=e.createTextNode("\n      {{pd-s-converter markdown='*italics* **bold** [link](#)'}}\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","well well-sm");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment(" first editor ");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","pd_editor_text"),e.setAttribute(a,"class","panel panel-success");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-heading");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h3");e.setAttribute(r,"class","panel-title");var d=e.createTextNode("\n      pd-editor - text \n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-body");var r=e.createTextNode("\n    Text editor with a preview below.\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("code"),d=e.createTextNode("\n      {{pd-editor idPostfix='-first' \n                   markdown='*italics* **bold** [link](http://example.org)'}}\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","well well-sm");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment(" second editor ");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","pd_editor_bind"),e.setAttribute(a,"class","panel panel-success");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-heading");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h3");e.setAttribute(r,"class","panel-title");var d=e.createTextNode("\n      pd-editor - bind \n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-body");var r=e.createTextNode("\n    Note how we are passing a computed property to the markdown value.\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("code"),d=e.createTextNode("\n      {{pd-editor idPostfix='-second' markdown=controllerProperty}}\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","well well-sm");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(4);return n[0]=e.createMorphAt(e.childAt(t,[14,3,11]),1,1),n[1]=e.createMorphAt(e.childAt(t,[16,3,15]),1,1),n[2]=e.createMorphAt(e.childAt(t,[20,3,11]),1,1),n[3]=e.createMorphAt(e.childAt(t,[24,3,11]),1,1),n},statements:[["inline","pd-converter",[],["markdown","*italics* **bold** [link](#)"]],["inline","pd-s-converter",[],["markdown","*italics* **bold** [link](#)"]],["inline","pd-editor",[],["idPostfix","-first","markdown","*italics* **bold** [link](http://example.org)"]],["inline","pd-editor",[],["idPostfix","-second","markdown",["subexpr","@mut",[["get","controllerProperty"]],[]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-pagedown",version:"0.0.5.626c2db5"});