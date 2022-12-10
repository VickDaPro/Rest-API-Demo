const express = require('express')
const router = express.Router()
const {getStudents, setStudent, getOneStudent, updateStudent, deleteStudent} = require("../controllers/studentController")

router.route("/").get(getStudents).post(setStudent)
router.route("/:id").get(getOneStudent).put(updateStudent).delete(deleteStudent)

module.exports = router