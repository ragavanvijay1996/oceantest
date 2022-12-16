const express = require('express')
const router = express.Router()
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

const { getForms, newForm, getsingleForm, updateForm, deleteForm, newUser, getUsers, getDepartments, newDepartment, getFormData, newFormData, deleteDepartment, updateDepartment, deleteFormData, newRole, getRole, newTeam, getTeam, newApproval, getApproval, updateApproval, updateRole, updateFormData, deleteRole, deleteTeam } = require('../controllers/formController')




router.route('/forms').get(getForms)
router.route('/formData').get(getFormData)
router.route('/formData/:id').delete(deleteFormData)
router.route('/formData/:id').put(updateFormData)
router.route('/departments').get(getDepartments)
router.route('/form/new').post(newForm)
router.route('/formData/new').post(newFormData)
router.route('/department/new').post(newDepartment)
router.route('/department/:id').delete(deleteDepartment)
router.route('/department/:id').put(updateDepartment)
router.route('/form/:id').get(getsingleForm)
router.route('/form/:id').put(updateForm)
router.route('/form/:id').delete(deleteForm)
router.route('/role/new').post(isAuthenticatedUser, authorizeRoles('admin'), newRole)
router.route('/roles').get(getRole)
router.route('/role/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateRole)
router.route('/role/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteRole)
router.route('/team/new').post(newTeam)
router.route('/teams').get(getTeam)
router.route('/team/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteTeam)
router.route('/approval/new').post(isAuthenticatedUser, authorizeRoles('admin'), newApproval)
router.route('/approval').get(isAuthenticatedUser, authorizeRoles('admin'), getApproval)
router.route('/approval/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateApproval)




module.exports = router;