const router = require('express').Router();
const draftsCtrl = require('../controllers/drafts')

router.get("/:id", draftsCtrl.show)
router.post("/", draftsCtrl.create)
router.put("entries/:id", draftsCtrl.update)
// router.delete("/entries/:id", commentsCtrl.delete)

module.exports = router;