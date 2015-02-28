import {
  pdConverter
} from '../../../helpers/pd-converter';
import { module, test } from 'qunit';

module('PdConverterHelper');

test('it works', function(assert) {
  var mockView = {
    pagedownService: {
      converter: {
        makeHtml: function() {
          return '';
        }
      }
    }
  };

  var result = pdConverter.call(mockView, '42');

  assert.ok(result);
});
