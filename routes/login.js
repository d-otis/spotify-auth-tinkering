var express = require('express')
var router = express.Router()

const my_client_id = process.env.CLIENT_ID
const redirect_uri = 'http://localhost:3000/callback'

router.get('/', function(req, res, next) {
  var scopes = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + my_client_id +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirect_uri));
})

module.exports = router;