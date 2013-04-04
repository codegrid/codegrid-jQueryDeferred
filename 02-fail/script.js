var doSomething = function() {
  var defer = $.Deferred();
  setTimeout(function() {
    defer.reject(); // NGだったことを告げる
  }, 2000);
  return defer.promise();
};

$(function() {
  $('#button').on('click', function() {
    var promise = doSomething();
    promise.done(function() {
      alert('成功しました');
    });
    promise.fail(function() {
      alert('失敗しました');
    });
  });
});
