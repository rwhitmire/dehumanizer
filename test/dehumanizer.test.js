var dehumanizer = require('../src/dehumanizer');
var should = require('chai').should();

describe('dehumanizer', function () {
	describe('toBoolean', function () {
		it('should return true with string "true"', function(){
			var result = dehumanizer('true').toBoolean();
			result.should.be.true;
		});

		it('should return false with string "false"', function () {
			var result = dehumanizer('false').toBoolean();
			result.should.be.false;
		});
	});

	describe('toNumber', function () {
		it('should return 1 with string "one"', function () {
			var result = dehumanizer('one').toNumber();
			result.should.equal(1);
		});

		it('should return 16 with string "sixteen"', function () {
			var result = dehumanizer('sixteen').toNumber();
			result.should.equal(16);
		});

		it('should return 16 with string "SIXteen"', function () {
			var result = dehumanizer('SIXteen').toNumber();
			result.should.equal(16);
		});

		it('should return 116 with string "one hundred sixteen"', function () {
			var result = dehumanizer('one hundred sixteen').toNumber();
			result.should.equal(116);
		});

		it('should return 216 with string "two hundred sixteen"', function () {
			var result = dehumanizer('two hundred sixteen').toNumber();
			result.should.equal(216);
		});

		it('should return 3216 with string "three thousand two hundred sixteen"', function () {
			var result = dehumanizer('three thousand two hundred sixteen').toNumber();
			result.should.equal(3216);
		});

		it('should return 3216 with string "3 thousand 2 hundred 16"', function () {
			var result = dehumanizer('3 thousand 2 hundred 16').toNumber();
			result.should.equal(3216);
		});

		it('should return 200 with string "2 hundred"', function () {
			var result = dehumanizer('2 hundred').toNumber();
			result.should.equal(200);
		});

		it('should return 200000 with string "two hundred thousand"', function () {
			var result = dehumanizer('two hundred thousand').toNumber();
			result.should.equal(200000);
		});

		it('should return NaN with rubbish', function () {
			var result = dehumanizer('rubbish').toNumber();
			result.should.be.NaN;
		});
	});

	describe('toDate', function () {
		it('should return a date type for "tomorrow"', function () {
			var result = dehumanizer('tomorrow').toDate();
			result.should.be.a('date');
		});
	});
});