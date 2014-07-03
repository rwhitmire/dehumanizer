var dehumanizer = require('../src/dehumanizer');
var should = require('chai').should();

describe('dehumanizer', function () {
	describe('toBoolean', function () {
		it('should return true with string "true"', function(){
			var result = dehumanizer('true').toBoolean();
			result.should.be.true;
		});
	});
});