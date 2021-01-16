const router = require('express').Router();
const quotesCtrl = require('../controllers/quotes')

// -------PUBLIC ROUTES____________//

router.get('/', quotesCtrl.index)


// ______PRIVATE ROUTES___________//

router.use(require('../config/auth'));
router.post('/', checkAuth, quotesCtrl.new);
router.delete('/:id', checkAuth, quotesCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;