const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, completeTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middlewares/auth');

router.use(protect);

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .put(updateTask)
  .delete(deleteTask);

router.put('/:id/complete', completeTask);

module.exports = router;
