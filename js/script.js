
var fetchNewQuote = function(callback) {
  $.getJSON('./assets/quotes.json', function(data) {
    var r = Math.round(Math.random()*(data.length-1));
    console.log(r);
    var author = data[r][0];
    var quote = data[r][1];
    callback(quote, author);
  });
};

var changeQuote = function() {
  fetchNewQuote(function(quote, author) {
    $("p#quote, cite#author").fadeOut(function() {
      $("p#quote").text(quote).fadeIn(function() {
        $("cite#author").text(author).fadeIn();
      });
    });
  });
};

$(window).load(function() {
  changeQuote();
  setInterval(changeQuote, 50000);
});