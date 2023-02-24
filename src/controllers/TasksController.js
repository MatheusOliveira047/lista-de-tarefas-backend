const Tasks = require('../models/Tasks')
const mongoose = require('mongoose')


const createTasks = async (req, res) => {
  const {
    description,
    isCompleted
  } = req.body


  const newTask = await Tasks.create({
    description,
    isCompleted,
  })


  if (!newTask) {
    res.status(422).json({ errors: ['Houve um erro, por favor tente mais tarde'] })
    return
  }

  return res.status(201).json({ newTask })
}

// get users
const allTasks = async (req, res) => {
  const tasks = await Tasks.find()

  return res.status(201).json({ tasks })
}


const deleteTasks = async (req, res) => {
  const { id } = req.params

  try {

    await Tasks.findByIdAndDelete(id)

    return res.status(200).json({ message: "Tarefa excluída com sucesso!!!" })

  } catch (error) {
    return res.status(404).json({ errors: ["Tarefa não encontrada!"] })
  }

}

const updateTasks = async (req, res) => {
  const { id } = req.params

  try {
    const {
      isCompleted
    } = req.body



    const task = await Tasks.findById({ _id: id })

    task.isCompleted = isCompleted

    task.save()

    return res.status(201).json({ message: "Tarefa concluida com sucesso!" })


  } catch (error) {
    return res.status(404).json({ errors: ['erro desconhecido'] })
  }
}

module.exports = {
  createTasks,
  allTasks,
  deleteTasks,
  updateTasks
}