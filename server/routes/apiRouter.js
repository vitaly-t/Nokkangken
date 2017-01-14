var router = require('express').Router();
var userHandler = require('../handlers/apiHandlers/userHandler.js');
var responseHandler = require('../handlers/apiHandlers/responseHandler.js');

//user endpoints
//gets unvoted possible matches for a specific time
router.get('/user/possibles/:userId/:time', userHandler.getMatches);
//gets all unvoted possible matches
router.get('/user/possibles/:userId', userHandler.getAllMatches);
// router.post('/user/possibles/', userHandler.postMatches);
router.get('/user/:facebookId', userHandler.getUser);
router.post('/user', userHandler.addUser);
router.put('/user', userHandler.updateUser);
router.post('/user/possibleEvent', userHandler.addPossibleEvent);

router.post('/response', responseHandler.submitResponse);


module.exports = router;
