const express = require('express')
const router = express.Router()

const { getCourse, deleteCourse, updateCourse, newCourse } = require('../controllers/courseController')


router.route('/course/new').post(newCourse)
router.route('/courses').get(getCourse)
router.route('/course/:id').delete(deleteCourse)
router.route('/course/:id').put(updateCourse)





module.exports = router;
