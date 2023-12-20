import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import TodoList from '../Todos/List';

describe('Todo', () => {
	let todo;

	beforeEach(() => {
		todo = {
			text: 'A todo',
			done: false,
		};
	});

	test('renders todo', () => {
		// eslint-disable-next-line no-unused-vars
		const { container } = render(
			<TodoList
				todos={[todo]}
				deleteTodo={() => null}
				completeTodo={() => null}
			/>
		);

		const todoCheck = screen.getByText(todo.text, { exact: false });
		const doneCheck = screen.getByText(
			todo.done ? 'This todo is done' : 'This todo is not done',
			{ exact: false }
		);

		expect(todoCheck).toBeDefined();
		expect(doneCheck).toBeDefined();
	});
});
