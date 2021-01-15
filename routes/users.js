const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.put('/:id', checkAuth, usersCtrl.update)
router.get('/:id', checkAuth, usersCtrl.profile )

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;