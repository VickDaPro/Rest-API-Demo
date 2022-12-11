const express = require('express')
const router = express.Router()
const {getStudents, setStudent, getOneStudent, searchStudents, updateStudent, deleteStudent} = require("../controllers/studentController")

router.route("/").get(getStudents).post(setStudent)
router.route("/:id").get(getOneStudent).put(updateStudent).delete(deleteStudent)
router.route("/search/:key").get(searchStudents)

module.exports = router