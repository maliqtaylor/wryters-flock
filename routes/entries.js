const router = require('express').Router();
const entriesCtrl = require('../controllers/entries')

// -------PUBLIC ROUTES

router.get('/', entriesCtrl.index)
router.get('/:id', entriesCtrl.show)


// ______PRIVATE ROUTES

router.use(require('../config/auth'));
router.post('/', checkAuth, entriesCtrl.new);
router.delete('/:id', checkAuth, entriesCtrl.delete);
router.put('/:id', checkAuth, entriesCtrl.update)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }
  
  module.exports = router;