var exampleConfig = require('./config');
var fs = require('fs');
var zd = require('node-zendesk');

var client = zd.createClient({
  username:  exampleConfig.auth.username,
  token:     exampleConfig.auth.token,
  remoteUri: exampleConfig.auth.remoteUri
});
client.users.auth(function (err, req, result) {
  if (err) {
    console.log(err );
    return;
  }
  console.log(JSON.stringify(result.verified, null, 2, true));
});
var ticket = {
  "ticket":
    {
      "subject":"My printer is on fire!",
      "comment": {
        "body": "The smoke is very colorful."
      }
    }
  };

client.tickets.create(ticket,  function(err, req, result) {
  if (err) return handleError(err);
  console.log(JSON.stringify(result, null, 2, true));
});

function handleError(err) {
    console.log(err);
    process.exit(-1);
}
// var client = zd.createClient({
//   username:  exampleConfig.auth.username,
//   token:     exampleConfig.auth.token,
//   remoteUri: exampleConfig.auth.remoteUri
// });

// var user = {
//   "user": {
//     "name": "Foo Bar",
//     "lastname":"sdsafsd",
//     "email": "FooBarssww@example.org",
//   }
// };
//
// client.users.create(user, function (err, req, result) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(JSON.stringify(result, null, 2, true));
// });