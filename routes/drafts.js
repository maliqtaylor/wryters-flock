const router = require('express').Router();
const draftsCtrl = require('../controllers/drafts')
// -------PUBLIC ROUTES____________//


// ______PRIVATE ROUTES___________//
router.use(require('../config/auth'));
router.get("/:id", checkAuth, draftsCtrl.show)
router.post("/", checkAuth, draftsCtrl.create)
router.put("entries/:id", checkAuth, draftsCtrl.update)
// router.delete("/entries/:id", commentsCtrl.delete)

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;