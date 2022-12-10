const mongoose = require("mongoose")

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a text value"],
        },
        father: {
            type: String,
            required: [true, "Please add a text value"],
        },
        mother: {
            type: String,
            required: [true, "Please add a text value"],
        },
        class: {
            type: String,
            required: [true, "Please add a text value"],
        },
    }
)

module.exports = mongoose.model("Student", studentSchema)