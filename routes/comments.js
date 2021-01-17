const router = require('express').Router();
const commentsCtrl = require('../controllers/comments')


router.get("/entries/:id", commentsCtrl.index)
router.post("/entries/:id", commentsCtrl.create)
// router.delete("/entries/:id", commentsCtrl.delete)
// router.put("entries/:id", commentsCtrl.update)

module.exports = router;