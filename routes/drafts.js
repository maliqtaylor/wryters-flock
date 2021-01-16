const router = require('express').Router();
const draftsCtrl = require('../controllers/drafts')

router.get("/:id", draftsCtrl.show)
router.post("/", draftsCtrl.create)
// router.delete("/entries/:id", commentsCtrl.delete)
// router.put("entries/:id", commentsCtrl.update)