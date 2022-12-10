const asyncHandler = require("express-async-handler")
const { remove } = require("../models/studentModel")

const Student = require("../models/studentModel")

// @desc GET STUDENTS
// @route GET /api/students
const getStudents = asyncHandler(async (req, res) => {
    const students = await Student.find()

    res.status(200).json(students)
})

// @desc POST STUDENTS
// @route POST /api/students
const setStudent = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }

    const student = await Student.create({
        text: req.body.text,
    })

    res.status(200).json(student)
})

// @desc UPDATE STUDENTS
// @route PUT /api/students/:id
const updateStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    if(!student) {
        res.status(400)
        throw new Error("Student not found")
    }

    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedStudent)
})

// @desc DELETE STUDENTS
// @route DELETE /api/students/:id
const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    if(!student) {
        res.status(400)
        throw new Error("Student not found")
    }

    await student.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getStudents,
    setStudent,
    updateStudent,
    deleteStudent,
}