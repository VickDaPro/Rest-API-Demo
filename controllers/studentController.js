const asyncHandler = require("express-async-handler")

// @desc GET STUDENTS
// @route GET /api/students
const getStudents = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get Students"})
})

// @desc POST STUDENTS
// @route POST /api/students
const setStudent = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }

    res.status(200).json({message: "Post Student"})
})

// @desc UPDATE STUDENTS
// @route PUT /api/students/:id
const updateStudent = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Student with id ${req.params.id}`})
})

// @desc DELETE STUDENTS
// @route DELETE /api/students/:id
const deleteStudent = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Student with id ${req.params.id}`})
})

module.exports = {
    getStudents,
    setStudent,
    updateStudent,
    deleteStudent,
}