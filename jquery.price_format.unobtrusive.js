(function ($) {
	var $jQpft = $.fn.priceFormat

	$jQpft.unobtrusive = {
		parseElement: function (element) {
			var $element = $(element)

			var options = {
				prefix: $element.data('priceformat-prefix'),
				suffix: $element.data('priceformat-suffix'),
				centsSeparator: $element.data('priceformat-centsseparator'),
				thousandsSeparator: $element.data('priceformat-thousandsseparator'),
				limit: $element.data('priceformat-limit'),
				centsLimit: $element.data('priceformat-centslimit'),
				clearPrefix: $element.data('priceformat-clearprefix'),
				clearSufix: $element.data('priceformat-clearsufix'),
				allowNegative: $element.data('priceformat-allownegative'),
				insertPlusSign: $element.data('priceformat-insertplussign'),
				clearOnEmpty: $element.data('priceformat-clearonempty')
			}

			$element.priceFormat(options)
		},

		parse: function (selector) {
			var $selector = $(selector)

			$selector.find("[data-priceformat=true], [data-priceformat=True]").each(function () {
				$jQpft.unobtrusive.parseElement(this)
			})
		}
	}

	$(function () {
		$jQpft.unobtrusive.parse(document);
	})

}(jQuery));
