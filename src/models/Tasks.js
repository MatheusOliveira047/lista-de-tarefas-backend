const mongoose = require("mongoose")
const { Schema } = mongoose

const tasksSchema = new Schema({
  description: String,
  isCompleted: Boolean,
}, {
  timestamps: true
})

const Tasks = mongoose.model("Tasks", tasksSchema)

module.exports = Tasks