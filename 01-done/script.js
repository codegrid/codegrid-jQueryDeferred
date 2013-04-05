var doSomething = function() {
  var defer = $.Deferred();
  setTimeout(function() {
    defer.resolve(); // 解決
  }, 2000);
  return defer.promise(); // プロミスを作って返す
};

$(function() {
  $('#button').on('click', function() {
    var promise = doSomething();
    promise.done(function() {
      alert('成功しました');
    });
  });
});
