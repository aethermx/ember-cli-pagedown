import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('view:pd-editor');

test('it exists', function(assert) {
  var view = this.subject();
  assert.ok(view);
});

test('no idPostfix', function(assert) {
  var view = this.subject();
  assert.equal(view.get('wmdButtonBarId'), 'wmd-button-bar');
  assert.equal(view.get('wmdInputId'), 'wmd-input');
  assert.equal(view.get('wmdPreviewId'), 'wmd-preview');
});

test('idPostfix = second', function(assert) {
  var view = this.subject({
    idPostfix: '-second'
  });
  assert.equal(view.get('wmdButtonBarId'), 'wmd-button-bar-second');
  assert.equal(view.get('wmdInputId'), 'wmd-input-second');
  assert.equal(view.get('wmdPreviewId'), 'wmd-preview-second');
});

test('idPostfix = \'\'', function(assert) {
  var view = this.subject({
    idPostfix: '' 
  });
  assert.equal(view.get('wmdButtonBarId'), 'wmd-button-bar');
  assert.equal(view.get('wmdInputId'), 'wmd-input');
  assert.equal(view.get('wmdPreviewId'), 'wmd-preview');
});

test('idPostfix can be set only at init', function(assert) {
  var view = this.subject();
  view.set('idPostfix', 'foobar');
  assert.equal(view.get('wmdButtonBarId'), 'wmd-button-bar');
  assert.equal(view.get('wmdInputId'), 'wmd-input');
  assert.equal(view.get('wmdPreviewId'), 'wmd-preview');
});

