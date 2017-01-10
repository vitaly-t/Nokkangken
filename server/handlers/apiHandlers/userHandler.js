var db = require('../../../database').db;

//to-do, add error handling
exports.getMatches = (req, res) => {
  db.users.matches({facebookId: +req.params.facebookId, eventTime: +req.params.time})
   .then(data=>res.send(data));
};

exports.getUser = (req, res) => {
  db.users.getUser({facebookId: +req.params.facebookId})
    .then(data=>res.send(data));
};

exports.addUser = (req, res) => {
  db.users.addUser({facebookId: +req.body.facebookId, name: req.body.name, email: req.body.email, bio: req.body.bio, picture: req.body.picture})
    .then(data=> res.status(201).send(data))
    .catch(error=> res.status(409).send(error));
};
