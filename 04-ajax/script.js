var getGreetingMessage = function() {
  return $.ajax({
    url: 'message.txt',
    dataType: 'text'
  }).promise();
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

