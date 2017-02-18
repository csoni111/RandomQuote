
var fetchNewQuote = function(callback) {
  $.getJSON('./assets/quotes.json', function(data) {
    var r = Math.round(Math.random()*data.length);
    var author = data[r][0];
    var quote = data[r][1];
    callback(quote, author);
  });
};

$(window).load(function() {
  fetchNewQuote(function(quote, author) {
    $("p#quote").text(quote);
    $("cite#author").text(author);
  });
});