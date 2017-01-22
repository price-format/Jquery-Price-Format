(function($) {
  $(document).ready(function() {
    // Example 1
    $('#example1').priceFormat();

    // Example 2
    $('#example2').priceFormat({
      prefix: 'R$ ',
      centsSeparator: ',',
      thousandsSeparator: '.'
    });

    // Example 3
    $('#example3').priceFormat({
      prefix: '',
      thousandsSeparator: '',
      clearOnEmpty: true
    });

    // Example 4
    $('#example4').priceFormat({
      limit: 2,
      centsLimit: 1
    });

    // Example 4
    $('#example4-1').priceFormat({
      prefix: '',
      suffix: '€'
    });

    // Example 5
    $('#example5').priceFormat({
      clearPrefix: true,
      clearSuffix: true,
      suffix: '$$'
    });

    // Example 6
    $('#example6').priceFormat({
      allowNegative: true
    });

    $('#example6-1').priceFormat({
      allowNegative: true
    });

    $("#unmask-test").click(function() {
      alert($('#example6-1').unmask());
    });

    // Example 7
    $('#example7').priceFormat({
      prefix: 'R$',
      suffix: '$$',
      clearSuffix: true,
      clearPrefix: true
    });

    // Example 7
    $('#example7-1').priceFormat({
      prefix: 'R$',
      suffix: '$$',
      clearSuffix: true,
      clearPrefix: true
    });

    $("#unprice-test").click(function() {
      $('#example7-1').unpriceFormat();
    });

    $("#price-test").click(function() {
      $('#example7-1').priceFormat({
        prefix: 'R$',
        suffix: '$$',
        clearSuffix: true,
        clearPrefix: true
      });
    });

    // Example 8
    $('#example8').priceFormat({
      prefix: 'R$ ',
      allowNegative: true
    });

    $('#example8-1').priceFormat({
      prefix: 'R$ ',
      allowNegative: true
    });

    $("#float-test").click(function() {
      alert($('#example8-1').priceToFloat());
    });

    // Example 9
    $('#example9').priceFormat({
      prefix: '',
      thousandsSeparator: '',
      insertPlusSign: true
    });

    // Example 10
    $('#htmlfield').priceFormat({
      prefix: 'R$ ',
      centsSeparator: ',',
      thousandsSeparator: '.',
      insertPlusSign: true
    });
  });
})(jQuery);
