$(document).on('turbolinks:load', function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this); //フォームに入力した値を取得しています。
    console.log(message);
  })
});


































// function buildHTML(message){
//   var image = ( message.image ) ? `<img class="mesage__lower-info__image" src=${message.image}>` : '' ;  //画像があれば画像を表示、なければ画像は表示されない
//   var html = `<div class="message", data-message-id="${message.id}">
//                 <div class="message__upper-info">
//                   <p class="message__upper-info__talker">
//                   ${message.user_name}
//                   </p>
//                   <p class="message__upper-info__date">
//                   ${message.created_at}
//                   </p>
//                 </div>
//                 <div class="message__lower-info">
//                   <p class="message__lower-info__text">
//                   ${message.content}
//                   </p>
//                   ${image}
//                 </div>
//               </div>`
//   return html;
// }

// $('#new_message').on('submit', function(e){ //$()でid属性を指定 ボタンを押して送信するというイベントをセット
// e.preventDefault() //デフォルトのイベントの停止 ここではフォームの送信を停止させる
// var formData = new FormData(this); //フォーム要素の情報を取得する (this)はイベントが発生した要素を指す(onメソッド内のsubmitのこと)
// var url = $(this).attr('action'); //from要素内の'action'属性にあるURLを取得する
// $.ajax({
// url: url, //リクエスト先のURL： varで変数に代入した'action'属性にあるURL
// type: 'POST', //HTTP通信の種類： createアクションなので'POST'と記述
// data: formData, //送信するデータ： varで変数代入したFormDataのデータが送られる
// dataType: 'json', //受け取るデータの種類： jsonを使うので'json'と記述
// processData: false, //dataに指定したオブジェクトをクエリ文字列に変換するかどうかを設定： 他の形式でデータを送るために自動変換を行いたくない場合はfalse
// contentType: false //サーバにデータを送信する際に用いるcontent-typeヘッダの値： ここではfalse
// })
// .done(function(data){ //帰ってきたデータが受け取れた時の処理
// var html = buildHTML(data); //(data)に帰ってきたデータ(jbuilderで作成したデータ)が入っている
// $('.messages').append(html); //受け取ったHTMLを'.messages'クラスの一番最後に追加する
// $('form')[0].reset(); //フォームの内容をリセットする
// $('input').prop('disabled', false) //一度押すと押せなくなる送信ボタンを連続で押せるようにしている
// $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight},50); //メッセージ送信後、最下部(送信したメッセージのところ)まで自動スクロールする
// })
// .fail(function(){ //帰ってきたデータが受け取れなかった時の処理
// alert ('メッセージ送信に失敗しました');
// })
// })