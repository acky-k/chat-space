$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class=".chat-main__messages-post">
          <div class=".chat-main__messages-post-box">
            <div class=".chat-main__messages-post-box-name">
              ${message.user_name}
            </div>
            <div class=".chat-main__messages-post-box-date">
              ${message.created_at}
            </div>
          </div>
          <div class=".chat-main__messages-text">
            <p class=".chat-main__messages-text-content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class=".chat-main__messages-post">
          <div class=".chat-main__messages-post-box">
            <div class=".chat-main__messages-post-box-name">
              ${message.user_name}
            </div>
            <div class=".chat-main__messages-post-box-date">
              ${message.created_at}
            </div>
          </div>
          <div class=".chat-main__messages-text">
            <p class=".chat-main__messages-text-content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__messages').append(html);
      $('form')[0].reset();
      $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
      $('.main-form__new-message-submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  })
});