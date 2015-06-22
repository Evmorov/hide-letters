var assert = require('chai').assert;
var fs = require('fs');
var vm = require('vm');
var path = './hide_letters.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

function wo_space_and_underscore(str) {
  return str.replace(/[_ ]/g, '')
}

it('len <= 5', function() {
  assert.equal(hide('abcde'), 'a____');
})

it('5 < len <= 10', function() {
  assert.lengthOf(wo_space_and_underscore(hide('abcdefghij')), 2);
})

it('5 < len <= 10 with spaces', function() {
  assert.lengthOf(wo_space_and_underscore(hide('abc def gh')), 2);
})

it('10 < len <= 15', function() {
  assert.lengthOf(wo_space_and_underscore(hide('abcdefghijklmno')), 3);
})

it('15 < len <= 20', function() {
  assert.lengthOf(wo_space_and_underscore(hide('abcdefghijklmnopqrst')), 4);
})

it('len > 20', function() {
  assert.lengthOf(wo_space_and_underscore(hide('abcdefghijklmnopqrstabcdefghijklmnopqrst')), 5);
})

it('len < 5 with spaces', function() {
  assert.equal(hide('a c e'), 'a _ _');
})

it('len > 5 with spaces', function() {
  assert.lengthOf(wo_space_and_underscore(hide('a c e f')), 2);
})

it('number of letters', function() {
  assert.lengthOf(hide('test string test'), 16);
})

it('other symbols', function() {
  assert.equal(hide('!?-.,'), '!____');
})
