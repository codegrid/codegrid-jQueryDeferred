var doSomething = function() {
  var defer = $.Deferred();
  setTimeout(function() {
    //defer.resolve(); // 解決
    defer.reject(); // 却下
  }, 2000);
  return defer.promise();
};

$(function() {
  $('#button').on('click', function() {
    var promise = doSomething();
    promise.then(function() {
      alert('成功しました');
    }, function() {
      alert('失敗しました');
    });
  });
});

