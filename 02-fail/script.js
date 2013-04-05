var doSomething = function() {
  var defer = $.Deferred();
  setTimeout(function() {
    defer.reject(); // 却下
  }, 2000);
  return defer.promise(); // プロミスを作って返す
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
