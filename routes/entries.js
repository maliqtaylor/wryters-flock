const router = require('express').Router();
const entriesCtrl = require('../controllers/entries')

// -------PUBLIC ROUTES____________//

router.get('/', entriesCtrl.index)
router.get('/:id', entriesCtrl.show)


// ______PRIVATE ROUTES___________//

router.use(require('../config/auth'));
router.post('/',  entriesCtrl.new);
router.delete('/:id', entriesCtrl.delete);
router.put('/:id',  entriesCtrl.update)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}
  
module.exports = router;