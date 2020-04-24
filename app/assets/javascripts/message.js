$(function(){
  function buildHTML(message){
    if (message.image) {
      var html =
       `<div class="chat-main__messages-post" data-message-id=${message.id}>
          <div class="chat-main__messages-post-box">
            <div class="chat-main__messages-post-box-name">
              ${message.user_name}
            </div>
            <div class="chat-main__messages-post-box-date">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__messages-text">
            <p class="chat-main__messages-text-content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class="chat-main__messages-post" data-message-id=${message.id}>
          <div class="chat-main__messages-post-box">
            <div class="chat-main__messages-post-box-name">
              ${message.user_name}
            </div>
            <div class="chat-main__messages-post-box-date">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__messages-text">
            <p class="chat-main__messages-text-content">
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
  
  var reloadMessages = function() {
    var last_message_id = $('.chat-main__messages-post:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
       insertHTML += buildHTML(message)
      })
      $('.chat-main__messages').append(insertHTML);
      $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
     }
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});