const Student = require('../models/student')





exports.newStudent = async (req, res, next) => {
    const student = await Student.create(req.body)
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' })
    }

    const file = req.files.file
    file.mv(`frontend/public/uploads/${file.name}`, err => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }
        res.status(201).json({ success: true, student, fileName: file.name, filePath: `uploads/${file.name}` })
    })
    // res.status(201).json({ success: true, student })


}
exports.getStudent = async (req, res, next) => {
    const student = await Student.find()
    res.status(200).json({
        success: true,
        count: student.length,
        student
    })
}
exports.deleteStudent = async (req, res, next) => {
    const student = await Student.findById(req.params.id)

    await student.remove()

    res.status(200).json({
        success: true,
        message: 'Student is deleted'
    })
}
exports.updateStudent = async (req, res, next) => {
    let student = await Student.findById(req.params.id)


    student = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        student
    })
}