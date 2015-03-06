import {
  moduleFor,
  test
} from 'ember-qunit';

//TODO: WIP, https://github.com/rwjblue/ember-qunit/issues/108

moduleFor('view:pd-s-converter', 'Integration view:pd-s-converter', {

  needs: ['service:pagedown'],

  beforeEach: function() {
    this.subject({
      pagedownService: this.container.lookup('service:pagedown')
    });
  }

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
