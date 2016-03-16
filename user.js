function checkUsersValid(goodUsers) {

    function checkAvailability(arr, val) {
        return arr.some(function(arrVal) {
            return val === arrVal;
        });
    }

  return function allUsersValid(submittedUsers) {
    return submittedUsers.every( x => checkAvailability(goodUsers,x) ) ;
  };
}

/* official solution :

module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  }
}

*/

module.exports = checkUsersValid