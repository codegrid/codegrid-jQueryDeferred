var getTemplate = function() {
  var defer = $.Deferred();
  $.ajax({
    url: 'template.txt',
    dataType: 'text'
  }).then(function(text) {
    defer.resolve(text);
  }, function() {
    defer.reject();
  });
  return defer.promise();
};

var domReady = $.Deferred();
$(function() {
  domReady.resolve();
});

$.when(getTemplate(), domReady).then(function(template) {
  // NAME を Bob に差し替え
  var str = template.replace(/NAME/, 'Bob');
  $('body').append(str);
});

