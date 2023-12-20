const express = require('express');
const { Todo } = require('../mongo');
const router = express.Router();
const redis = require('../redis');

/* GET todos listing. */
router.get('/', async (_, res) => {
	const todos = await Todo.find({});
	res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
	const todo = await Todo.create({
		text: req.body.text,
		done: false,
	});
	res.send(todo);

	const counter = await redis.getAsync('added_todos');
	await redis.setAsync('added_todos', parseInt(counter ? counter : 0) + 1);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
	const { id } = req.params;
	try {
		req.todo = await Todo.findById(id);
		if (!req.todo) return res.sendStatus(404);

		next();
	} catch (error) {
		return res.sendStatus(400).json(error).end();
	}
};

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
	await req.todo.delete();
	res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
	return res.send(req.todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
	try {
		req.todo.done = req.body.done;

		req.todo.save();

		res.json(req.todo);
	} catch (error) {
		res.sendStatus(500).end();
	}
});

router.use('/:id', findByIdMiddleware, singleRouter);

module.exports = router;
