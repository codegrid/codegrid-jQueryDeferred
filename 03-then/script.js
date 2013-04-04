var doSomething = function() {
  var defer = $.Deferred();
  setTimeout(function() {
    //defer.resolve(); // OKだったことを告げる
    defer.reject(); // NGだったことを告げる
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

