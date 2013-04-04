// APIをたたく関数ら

var getFatherName = function(userId) {
  var defer = $.Deferred();
  $.ajax({
    url: 'fathername.txt',
    dataType: 'text',
    data: { userId: userId }
  }).then(function(text) {
    defer.resolve(text);
  }, function() {
    defer.reject('父親の名前の取得に失敗しました');
  });
  return defer.promise();
};

var getMotherName = function(userId) {
  var defer = $.Deferred();
  $.ajax({
    url: 'mothername.txt',
    dataType: 'text',
    data: { userId: userId }
  }).then(function(text) {
    defer.resolve(text);
  }, function() {
    defer.reject('母親の名前の取得に失敗しました');
  });
  return defer.promise();
};

var getChildName = function(userId) {
  var defer = $.Deferred();
  $.ajax({
    url: 'childname.txt',
    dataType: 'text',
    data: { userId: userId }
  }).then(function(text) {
    defer.resolve(text);
  }, function() {
    defer.reject('子供の名前の取得に失敗しました');
  });
  return defer.promise();
};

// ユーザー情報を表示する関数

var showUserInfo = function(userName) {
  $.when(
    getFatherName(),
    getMotherName(),
    getChildName()
  ).then(function(fatherName, motherName, childName) {
    var str = '';
    str += 'Hello ' + userName + '.<br>';
    str += 'Your father is ' + fatherName + '.<br>';
    str += 'Your mother is ' + motherName + '.<br>';
    str += 'Your child is ' + childName + '.';
    $('#info').html(str);
  }, function(errorMessage) {
    // 失敗したエラーメッセージをアラートする
    alert(errorMessage);
  });
};

// イベント割り当て

$(function() {
  $('#button').on('click', function() {
    showUserInfo('Bob');
  });
});

