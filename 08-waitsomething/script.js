var getTemplate = function() {
  var defer = $.Deferred();
  $.ajax({
    url: 'template.txt',
    dataType: 'text'
  }).then(function(text) {
    defer.resolve(text); // 解決
  }, function() {
    defer.reject(); // 却下
  });
  return defer.promise();
};

var domReady = $.Deferred();
$(function() {
  domReady.resolve(); // 解決
});

$.when(getTemplate(), $.ready).then(function(template) {
  // NAME を Bob に差し替え
  var str = template.replace(/NAME/, 'Bob');
  $('body').append(str);
});

