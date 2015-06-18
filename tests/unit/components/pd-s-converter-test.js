import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('pd-s-converter', 'Unit | Component | pd-s-converter', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true,

  beforeEach: function() {
    this.subject({
      pagedownService: {
        sanitizedConverter: function() { /* stub */ }
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
