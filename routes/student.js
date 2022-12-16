const express = require('express')
const router = express.Router()

const { newStudent, deleteStudent, updateStudent, getStudent } = require('../controllers/studentController')




router.route('/student/new').post(newStudent)
router.route('/student/:id').delete(deleteStudent)
router.route('/student/:id').put(updateStudent)
router.route('/students').get(getStudent)





module.exports = router;
