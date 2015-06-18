import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('pd-converter', 'Integration | Component | pd-converter', {
  unit: false, 
  needs: ['service:pagedown'],

  beforeEach: function() {
    this.subject({
      markdown: null
    });
  }
});

test('invalid markdown', function(assert) {
  var component = this.subject();
  assert.equal(component.get('html'), null);

  component.set('markdown', undefined);
  assert.equal(component.get('html'), undefined);

  component.set('markdown', 0);
  assert.equal(component.get('html'), 0);
});

test('convert markdown', function(assert) {
  var component = this.subject();

  component.set('markdown', '*italics*');
  assert.equal(component.get('html').string, '<p><em>italics</em></p>');

  component.set('markdown', '**bold**');
  assert.equal(component.get('html').string, '<p><strong>bold</strong></p>');

  component.set('markdown', '[link](#)');
  assert.equal(component.get('html').string, '<p><a href=\"#\">link</a></p>');
});

