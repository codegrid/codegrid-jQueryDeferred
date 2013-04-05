var getGreetingMessage = function() {
  var jqXHR = $.ajax({
    url: 'message.txt',
    dataType: 'text'
  });
  return jqXHR.promise(); // プロミスを作って返す
};

$(function() {
  $('#button').on('click', function() {
    getGreetingMessage()
      .then(function(message) {
        alert(message);
      }, function() {
        alert('メッセージの表示に失敗しました');
      });
  });
});

