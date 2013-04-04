// APIをたたく関数ら

var getChildIdFromUserId = function(userId) {
  var defer = $.Deferred();
  $.ajax({
    url: 'userInfo.json',
    dataType: 'json',
    data: { userId: userId }
  }).then(function(data) {
    defer.resolve(data.childId);
  }, function() {
    defer.reject('子供IDの取得に失敗しました');
  });
  return defer.promise();
};

var getChildNameFromUserId = function(childId) {
  var defer = $.Deferred();
  $.ajax({
    url: 'childInfo.json',
    dataType: 'json',
    data: { childId: childId }
  }).then(function(data) {
    //defer.reject('子供の名前の取得に失敗しました'); // デバッグ用
    defer.resolve(data.name);
  }, function() {
    defer.reject('子供の名前の取得に失敗しました');
  });
  return defer.promise();
};


// ユーザー情報を表示する関数

var alertChildName = function(userId) {
  getChildIdFromUserId(userId)
    .then(getChildNameFromUserId)
    .then(function(childName) {
      alert('子供の名: ' + childName);
    }, function(errorMessage) {
      alert(errorMessage);
    });
};

// イベント割り当て

$(function() {
  $('#button').on('click', function() {
    alertChildName(100);
  });
});
