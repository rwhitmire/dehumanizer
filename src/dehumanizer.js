!function(){

	var root = this;

	var dehumanizer = function(humanValue){
		this.toBoolean = function(){
			if(humanValue == 'true') return true;
			return false;
		};

		return this;
	};

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
