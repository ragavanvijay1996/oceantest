


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