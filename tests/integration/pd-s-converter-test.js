import {
  moduleFor,
  test
} from 'ember-qunit';

//TODO: WIP, https://github.com/rwjblue/ember-qunit/issues/108

moduleFor('view:pd-s-converter', 'Integration view:pd-s-converter', {

  needs: ['service:pagedown'],

  beforeEach: function() {
    this.subject({
      markdown: null,
      pagedownService: this.container.lookup('service:pagedown')
    });
  }

});

test('invalid markdown', function(assert) {
  var view = this.subject();
  assert.equal(view.get('html'), null);

  view.set('markdown', undefined);
  assert.equal(view.get('html'), undefined);

  view.set('markdown', 0);
  assert.equal(view.get('html'), 0);
});

test('convert markdown', function(assert) {
  var view = this.subject();

  view.set('markdown', '*italics*');
  assert.equal(view.get('html').string, '<p><em>italics</em></p>');

  view.set('markdown', '**bold**');
  assert.equal(view.get('html').string, '<p><strong>bold</strong></p>');

  view.set('markdown', '[link](#)');
  assert.equal(view.get('html').string, '<p>link</p>');
});
