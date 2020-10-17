import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  // connected() {
  //   // Called when the subscription is ready for use on the server
  // },

  // disconnected() {
  //   // Called when the subscription has been terminated by the server
  // },

  // received(data) {
  //   // Called when there's incoming data on the websocket for this channel
  // },
  // これが実行されるとコンシューマになったRoomChannel#speak({ message: message })が呼ばれる
  speak: function(message) {
    return this.perform('speak', {
      message: message
    });
  }
   // room_channel.rbでブロードキャストされたものがここに届く
   received: function(data) {
    return alert(data['message']);
  },

  $(document).on('keypress', '[data-behavior~=room_speaker]', function(event) {
    if (event.keyCode === 13) {
      chatChannel.speak(event.target.value);
      event.target.value = '';
      return event.preventDefault();
    }


});
