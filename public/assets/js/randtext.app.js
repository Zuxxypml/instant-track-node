jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 100,
    time: 1200,
  });

  $(".knob").knob();
});

var Password = {
  _pattern: /[a-zA-Z0-9]/,

  _getRandomByte: function () {
    // http://caniuse.com/#feat=getrandomvalues
    if (window.crypto && window.crypto.getRandomValues) {
      var result = new Uint8Array(1);
      window.crypto.getRandomValues(result);
      return result[0];
    } else if (window.msCrypto && window.msCrypto.getRandomValues) {
      var result = new Uint8Array(1);
      window.msCrypto.getRandomValues(result);
      return result[0];
    } else {
      return Math.floor(Math.random() * 256);
    }
  },

  generate: function (length) {
    return Array.apply(null, { length: length })
      .map(function () {
        var result;
        while (true) {
          result = String.fromCharCode(this._getRandomByte());
          if (this._pattern.test(result)) {
            return result;
          }
        }
      }, this)
      .join("");
  },
};

$(document).ready(function () {
  $("#pass_generator").on("click", function () {
    $("#new_password").val(Password.generate(30));
    return false;
  });
});
