const Staff = require('../models/staff')




exports.newStaff = async (req, res, next) => {
    const staff = await Staff.create(req.body)

    res.status(201).json({ success: true, staff })

}
exports.getStaff = async (req, res, next) => {
    const staff = await Staff.find()
    res.status(200).json({
        success: true,
        count: staff.length,
        staff
    })
}
exports.deleteStaff = async (req, res, next) => {
    const staff = await Staff.findById(req.params.id)

    await staff.remove()

    res.status(200).json({
        success: true,
        message: 'staff is deleted'
    })
}
exports.updateStaff = async (req, res, next) => {
    let staff = await Staff.findById(req.params.id)


    staff = await Staff.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        staff
    })
}