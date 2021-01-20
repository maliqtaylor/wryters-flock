const router = require('express').Router();
const commentsCtrl = require('../controllers/comments')
router.use(require('../config/auth'));

router.get("/entries/:id", commentsCtrl.index)
router.post("/entries/:id", checkAuth, commentsCtrl.create)
router.delete("/:entryID/:id", checkAuth, commentsCtrl.delete)
// router.put("entries/:id", commentsCtrl.update)



function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}


module.exports = router;