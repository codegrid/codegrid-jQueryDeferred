var doSomething = function() {
  var defer = $.Deferred();
  setTimeout(function() {
    defer.resolve(); // OKだったことを告げる
  }, 2000);
  return defer.promise();
};

$(function() {
  $('#button').on('click', function() {
    var promise = doSomething();
    promise.done(function() {
      alert('成功しました');
    });
  });
});
