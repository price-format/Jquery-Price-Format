/*
* Price Format jQuery Plugin
* By Eduardo Cuducos
* cuducos [at] gmail [dot] com
* Version: 1.0
* Release: 2009-01-21
*/

(function($) {

	$.fn.priceFormat = function(options) {  

		var defaults = {  
			prefix: 'US$ ',
			centsSeparator: '.',  
			thousandsSeparator: ','
		};  
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			
			var obj = $(this);

			function price_format () {

				// format definitions
				var prefix = options.prefix;
				var centsSeparator = options.centsSeparator;
				var thousandsSeparator = options.thousandsSeparator;
				var formatted = '';
				var thousandsFormatted = '';
				var str = obj.val();

				// skip everything that isn't a number
				// and skip left 0
				var isNumber = /[0-9]/;
				for (var i=0;i<(str.length);i++) {
					char = str.substr(i,1);
					if (formatted.length==0 && char==0) char = false;
					if (char && char.match(isNumber)) formatted = formatted+char;
				}
				
				// format to fill with zeros when < 100
				while (formatted.length<3) formatted = '0'+formatted;
				var centsVal = formatted.substr(formatted.length-2,2);
				var integerVal = formatted.substr(0,formatted.length-2);
			
				// apply cents pontuation
				formatted = integerVal+centsSeparator+centsVal;
			
				// apply thousands pontuation
				if (thousandsSeparator) {
					var thousandsCount = 0;
					for (var j=integerVal.length;j>0;j--) {
						char = integerVal.substr(j-1,1);
						thousandsCount++;
						if (thousandsCount%3==0) char = thousandsSeparator+char;
						thousandsFormatted = char+thousandsFormatted;
					}
					if (thousandsFormatted.substr(0,1)==thousandsSeparator) thousandsFormatted = thousandsFormatted.substring(1,thousandsFormatted.length);
					formatted = thousandsFormatted+centsSeparator+centsVal;
				}
				
				// apply the prefix
				if (prefix) formatted = prefix+formatted;
				
				// replace the value
				obj.val(formatted);
			
			}

			$(this).bind('keyup',price_format);
			if ($(this).val().length>0) price_format();

		});

	}; 		
		
})(jQuery);