const { body } = require("express-validator");

const tasksCreateValidation = () => {
  return [
    body("description")
      .isString()
      .withMessage("A descrição da tarefa é obrigatória!"),
    body("isCompleted")
      .isBoolean()
      .withMessage("a tarefa precisa começar como falsa")
    ,
  ];
};


module.exports = {
  tasksCreateValidation,
}