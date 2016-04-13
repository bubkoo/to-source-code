'use strict';

var expect = require('chai').expect;


describe('to-source-code', function () {

  var toSource = require('../../');

  it('common test', function () {

    expect(toSource(Math.min)).to.equal('function min() { [native code] }');

    expect(toSource(function () {})).to.equal('function () {}');

    expect(toSource()).to.equal('');

    expect(toSource(null)).to.equal('');

    expect(toSource(1)).to.equal('1');

    expect(toSource('1')).to.equal('1');

    expect(toSource(true)).to.equal('true');

    expect(toSource({})).to.equal('[object Object]');;
  });
});
