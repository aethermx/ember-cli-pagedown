import {
  pdSConverter
} from '../../../helpers/pd-s-converter';
import { module, test } from 'qunit';

module('PdSConverterHelper');

test('it works', function(assert) {
  var mockView = {
    pagedownService: {
      sanitizedConverter: {
        makeHtml: function() {
          return '';
        }
      }
    }
  };

  var result = pdSConverter.call(mockView, '42');
  assert.ok(result);
});
