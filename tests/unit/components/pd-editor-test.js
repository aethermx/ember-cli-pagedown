import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('pd-editor', 'Unit | Component | pd-editor', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true,

  beforeEach: function() {
    this.subject({
      idPostfix: '-id-set-on-init',
      pagedownService: {
        converter: function() {},
        Editor: function() {
          this.run = function() {};
        },
      } 
    });
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('idPostfix id-set-on-init', function(assert) {
  var component = this.subject({
  });
  assert.equal(component.get('wmdButtonBarId'), 'wmd-button-bar-id-set-on-init');
  assert.equal(component.get('wmdInputId'), 'wmd-input-id-set-on-init');
  assert.equal(component.get('wmdPreviewId'), 'wmd-preview-id-set-on-init');
});

test('idPostfix can be set only at init', function(assert) {
  var component = this.subject();
  component.set('idPostfix', 'foobar');
  assert.equal(component.get('wmdButtonBarId'), 'wmd-button-bar-id-set-on-init');
  assert.equal(component.get('wmdInputId'), 'wmd-input-id-set-on-init');
  assert.equal(component.get('wmdPreviewId'), 'wmd-preview-id-set-on-init');
});
