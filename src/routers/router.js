const express = require('express')
const router = express()

// tasks
router.use("/api/tasks", require('./TasksRoutes'))

// teste
router.get('/', (req, res) => { res.status(200).json({ msg: "Deu certo" }) })

module.exports = router;