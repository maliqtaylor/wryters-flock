const router = require('express').Router();
const commentsCtrl = require('../controllers/comments')


router.get("/entries/:id", commentsCtrl.index)
router.post("/entries/:id", checkAuth, commentsCtrl.create)
// router.delete("/entries/:id", commentsCtrl.delete)
// router.put("entries/:id", commentsCtrl.update)


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}


module.exports = router;