var getGreetingMessage = function(name) {
  var defer = $.Deferred();
  $.ajax({
    url: 'message.txt',
    dataType: 'text'
  }).then(function(text) {
    text = text.replace(/NAME/, name);
    defer.resolve(text); // 解決
  }, function() {
    // 失敗した場合はエラーメッセージを返す
    defer.reject('メッセージの取得に失敗しました'); // 却下
  });
  return defer.promise();
};

$(function() {
  $('#button').on('click', function() {
    getGreetingMessage('Bob')
      .then(function(successMessage) {
        alert(successMessage);
      }, function(errorMessage) {
        alert(errorMessage);
      });
  });
});
