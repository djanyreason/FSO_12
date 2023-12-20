const express = require('express');
const router = express.Router();
const redis = require('../redis');

/* GET todos listing. */
router.get('/', async (_, res) => {
	const added_todos = await redis.getAsync('added_todos');
	const respo = {
		added_todos: parseInt(added_todos ? added_todos : 0),
	};
	res.send(respo);
});

module.exports = router;
