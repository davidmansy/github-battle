var axios = require('axios');

var id = 'YOUR_CLIENT_ID';
var sec = 'YOUR_CLIENT_SECRET';
var param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo(userName) {
  return axios.get('https://api.github.com/users/' + userName + param)
}

function getRepos (userName) {
  //Fetch usernames repos
  return axios.get('https://api.github.com/users/' + userName + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
  //Calculate all the stars that the user has based on the various repos
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count;
  }, 0);
}

function getPlayersData (player) {
  //get repos
  //get total stars
  //return an oobject with that data
  return getRepos(player.login)
  .then(getTotalStars)
  .then(function(totalStars) {
    return {
      followers: player.followers,
      totalStars: totalStars
    }
  });
}

function calculateScores (players) {
  //return array, after doing some fancy algorithms to determine the winner
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ];
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function (userName) {
      return getUserInfo(userName);
    }))
    .then(function(infos) {
      return infos.map(function(user) {
        return user.data;
      });
    })
    .catch(function(err) {
      console.warn('Error in getPlayersInfo: ' + err);
    });
  },

  battle: function(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch(function(err) {console.warn('Error in battle : ', err);});
  }
};

module.exports = helpers;