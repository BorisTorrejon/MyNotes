import { Router } from 'express';
import { renderTasks, createTask, renderTaskEdit, editTask, deleteTask, toggleDoneTask } from '../controllers/tasks.controller'

const router = Router();

router.get('/', renderTasks);

router.get('/about', (req, res) => {
    res.render("about");
});

router.post('/tasks/add', createTask);

router.get('/tasks/:id/edit', renderTaskEdit);

router.post('/tasks/:id/edit', editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get('/tasks/:id/toggleDone', toggleDoneTask);

export default router;