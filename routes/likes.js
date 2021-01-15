const router = require('express').Router();
const likesCtrl = require('../controllers/likes')


/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
// router.use(require("../config/auth"));
router.post('/entries/:id',  likesCtrl.new);
router.put('/entries/:id',  likesCtrl.update);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;