const express = require('express')
const router = express.Router()

const { getStaff, deleteStaff, updateStaff, newStaff } = require('../controllers/staffController')

router.route('/staff/new').post(newStaff)
router.route('/staffs').get(getStaff)
router.route('/staff/:id').delete(deleteStaff)
router.route('/staff/:id').put(updateStaff)






module.exports = router;
