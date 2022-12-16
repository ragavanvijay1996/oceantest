const Department = require('../models/department')
const Form = require('../models/form')
const FormData = require('../models/formData')
const Role = require('../models/role')
const Team = require('../models/team')
const Approval = require('../models/approval')









exports.newFormData = async (req, res, next) => {
    const newFormData = await FormData.create(req.body)

    res.status(201).json({ success: true, newFormData })

}
exports.getFormData = async (req, res, next) => {
    const formData = await FormData.find()
    res.status(200).json({
        success: true,
        count: formData.length,
        formData
    })
}
exports.deleteFormData = async (req, res, next) => {
    const formData = await FormData.findById(req.params.id)

    await formData.remove()

    res.status(200).json({
        success: true,
        message: 'Department is deleted'
    })
}
exports.updateFormData = async (req, res, next) => {
    let formData = await FormData.findById(req.params.id)


    formData = await FormData.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        formData
    })
}
exports.newDepartment = async (req, res, next) => {
    const newDepartment = await Department.create(req.body)

    res.status(201).json({ success: true, newDepartment })

}
exports.getDepartments = async (req, res, next) => {
    const departments = await Department.find()
    res.status(200).json({
        success: true,
        count: departments.length,
        departments
    })
}
exports.deleteDepartment = async (req, res, next) => {
    const department = await Department.findById(req.params.id)

    await department.remove()

    res.status(200).json({
        success: true,
        message: 'Department is deleted'
    })
}
exports.updateDepartment = async (req, res, next) => {
    let department = await Department.findById(req.params.id)


    department = await Department.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        department
    })
}

exports.newRole = async (req, res, next) => {
    const newRole = await Role.create(req.body)

    res.status(201).json({ success: true, newRole })

}
exports.getRole = async (req, res, next) => {
    const role = await Role.find()
    res.status(200).json({
        success: true,
        count: role.length,
        role
    })
}
exports.updateRole = async (req, res, next) => {
    let role = await Role.findById(req.params.id)


    role = await Role.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        role
    })
}
exports.deleteRole = async (req, res, next) => {
    const role = await Role.findById(req.params.id)

    await role.remove()

    res.status(200).json({
        success: true,
        message: 'Role is deleted'
    })
}

exports.newTeam = async (req, res, next) => {
    const newTeam = await Team.create(req.body)

    res.status(201).json({ success: true, newTeam })

}
exports.getTeam = async (req, res, next) => {
    const team = await Team.find()
    res.status(200).json({
        success: true,
        count: team.length,
        team
    })
}
exports.deleteTeam = async (req, res, next) => {
    const team = await Team.findById(req.params.id)

    await team.remove()

    res.status(200).json({
        success: true,
        message: 'Team is deleted'
    })
}

exports.newApproval = async (req, res, next) => {
    const newApproval = await Approval.create(req.body)

    res.status(201).json({ success: true, newApproval })

}
exports.getApproval = async (req, res, next) => {
    const approval = await Approval.find()
    res.status(200).json({
        success: true,
        count: approval.length,
        approval
    })
}
exports.updateApproval = async (req, res, next) => {
    let approval = await Approval.findById(req.params.id)


    approval = await Approval.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        approval
    })
}







exports.newForm = async (req, res, next) => {
    const newForm = await Form.create(req.body)

    res.status(201).json({ success: true, newForm })

}

exports.getForms = async (req, res, next) => {
    const forms = await Form.find()
    res.status(200).json({
        success: true,
        count: forms.length,
        forms
    })
}
exports.getsingleForm = async (req, res, next) => {
    const Form = await Form.findById(req.params.id)
    res.status(200).json({
        success: true,
        Form
    })
}
exports.updateForm = async (req, res, next) => {
    let form = await Form.findById(req.params.id)


    form = await Form.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        form
    })
}

exports.deleteForm = async (req, res, next) => {
    const form = await Form.findById(req.params.id)

    await form.remove()

    res.status(200).json({
        success: true,
        message: 'Form is deleted'
    })
}