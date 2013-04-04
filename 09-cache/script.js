var getTemplate = (function() {
  
  // deferredオブジェクトをキャッシュしておく変数
  var cachedDefer = null;

  return function() {
    
    // もし既にキャッシュがあればそのpromsiseを返す
    if(cachedDefer) {
      return cachedDefer.promise();
    }

    // 無かったら普通にAjaxする
    var defer = $.Deferred();
    $.ajax({
      url: 'template.txt',
      dataType: 'text'
    }).then(function(text) {
      defer.resolve(text);
    }, function() {
      defer.reject();
    });

    cachedDefer = defer; // キャッシュに保存しておく
    return defer.promise(); // promiseを返す

  };

}());

$(function() {
  $('button').click(function() {

    var name = $(this).html(); // Bob か mary か John

    // テンプレート文字列を取得
    getTemplate().then(function(templateString) {
      // NAME を 名前に置き換えてappend
      var src = templateString.replace(/NAME/, name);
      $('body').append(src);
    });

  });
});
