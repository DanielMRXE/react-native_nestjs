import {Router} from 'express'
import {deleteTask, getTask, getTaskCount, saveTask, updateTask,getTasks} from '../controllers/tasks';


const router = Router()

/**
 * @swagger
 * /tasks:
 * GET:
 *  summary: Get all tasks
 */
router.get('/tasks',getTasks)

/**
 * @swagger
 * /tasks/count:
 * GET:
 *  summary: Get all tasks
 */
router.get('/tasks/count', getTaskCount)

/**
 * @swagger
 * /tasks/id:
 * GET:
 *  summary: Get all tasks
 */
router.get('/tasks/:id', getTask)

/**
 * @swagger
 * /tasks/savetask:
 * GET:
 *  summary: Get all tasks
 */
router.post('/tasks',saveTask)

/**
 * @swagger
 * /tasks/delete:
 * GET:
 *  summary: Get all tasks
 */
router.delete('/tasks/:id',deleteTask)

/**
 * @swagger
 * /tasks/update:
 * GET:
 *  summary: Get update
 */
router.put('/tasks/:id', updateTask)


export default router;