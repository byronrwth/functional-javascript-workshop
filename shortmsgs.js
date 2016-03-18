function getShortMessages(messages) {
  // some objects has .message
  function msg(x) {
    return x.message ;
  }
  function firstf(msg) {
    return msg;
  }
  var newmsgs = messages.map(msg) ;
  return newmsgs.filter(function(i) { return i.length < 50; });
  //return newmsgs;
}

module.exports = getShortMessages