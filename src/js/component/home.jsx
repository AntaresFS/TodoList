import React, { useState } from "react";
import '../../styles/index.css'


//create your first component
function home() {
	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleKeyUp = (e) => {
		if (e.key === 'Enter' && inputValue.trim()) {
			setTasks([...tasks, inputValue]);
			setInputValue('');
		}
	};

	const handleDelete = (index) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<div className="todo-container">
			<h1 className="title">todos</h1>
			<div className="todo-list">
				<input
					type="text"
					placeholder="What needs to be done?"
					className="todo-input"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyUp={handleKeyUp}
				/>
				<ul className="todo-items">
					{tasks.length === 0 ? (
						<li className="no-tasks">No hay tareas, añadir tareas</li>
					) : (
						tasks.map((task, index) => (
							<li
								key={index}
								className="todo-item"
								onMouseEnter={(e) => e.currentTarget.classList.add('hover')}
								onMouseLeave={(e) => e.currentTarget.classList.remove('hover')}
							>
								{task}
								<button className="delete-btn" onClick={() => handleDelete(index)}>
									X
								</button>
							</li>
						))
					)}
				</ul>
				<div className="items-left">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} left</div>
			</div>
		</div>
	);
}

export default home;