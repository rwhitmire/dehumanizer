!function(){

	var root = this;

	var numvals = {
		'one': 1,
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5,
		'six': 6,
		'seven': 7,
		'eight': 8,
		'nine': 9,
		'ten': 10,
		'eleven': 11,
		'twelve': 12,
		'thirteen': 13,
		'fourteen': 14,
		'fifteen': 15,
		'sixteen': 16,
		'seventeen': 17,
		'eighteen': 18,
		'nineteen': 19,
		'twenty': 20,
		'thirty': 30,
		'fourty': 40,
		'fifty': 50,
		'sixty': 60,
		'seventy': 70,
		'eighty': 80,
		'ninety': 90
	};

	var multipliers = {
		'hundred': 100,
		'thousand': 1000,
		'million': 1000000,
		'billion': 1000000000
	}

	var dehumanizer = function(humanValue){
		if(humanValue !== undefined){
			humanValue = humanValue.toLowerCase();
		}

		this.toBoolean = function(){
			if(humanValue == 'true') return true;
			return false;
		};

		this.toNumber = function(){
			var val = 0;
			var tokens = humanValue.split(' ');

			for(var i = tokens.length; i >= 0; i--){
				var token = tokens[i];
				var numberValue = parseNumber(token);

				if(numberValue){
					val += numberValue;
				}

				var multiplierValue = multipliers[token];

				if(multiplierValue !== undefined){
					var previousToken = tokens[i - 1];
					var previousNumberValue = parseNumber(previousToken);
					var multipliedValue = multiplierValue * previousNumberValue;

					if(multipliedValue){
						val += multipliedValue;
					}

					i--;
				}
			}

			return val || NaN;
		};

		this.toDate = function(){
			return new Date();
		}

		return this;
	};

	function parseNumber(token){
		var num = parseInt(token);

		if(num){
			return num;
		}

		return numvals[token];
	}

	// Node.js
	if (typeof module !== 'undefined' && module.exports) {
	    module.exports = dehumanizer;
	}

	// AMD / RequireJS
	else if (typeof define !== 'undefined' && define.amd) {
	    define([], function () {
	        return dehumanizer;
	    });
	}

	// included directly via <script> tag
	else {
	    root.dehumanizer = dehumanizer;
	}

}();
