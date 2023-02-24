const router = require('express').Router()

//controllers
const {
  createTasks,
  allTasks,
  deleteTasks,
  updateTasks
} = require('../controllers/TasksController')

// midlewares 
const validate = require('../middlewares/handleValidation')

const { tasksCreateValidation } = require("../middlewares/TasksValidation")

router.get("/", allTasks)
router.post("/create", tasksCreateValidation(), validate, createTasks);
router.delete('/delete/:id', deleteTasks)
router.patch('/update/:id', updateTasks)


module.exports = router