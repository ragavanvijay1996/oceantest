const Course = require('../models/course')




exports.newCourse = async (req, res, next) => {
    const course = await Course.create(req.body)

    res.status(201).json({ success: true, course })

}
exports.getCourse = async (req, res, next) => {
    const course = await Course.find()
    res.status(200).json({
        success: true,
        count: course.length,
        course
    })
}
exports.deleteCourse = async (req, res, next) => {
    const course = await Course.findById(req.params.id)

    await course.remove()

    res.status(200).json({
        success: true,
        message: 'course is deleted'
    })
}
exports.updateCourse = async (req, res, next) => {
    let course = await Course.findById(req.params.id)


    course = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        course
    })
}