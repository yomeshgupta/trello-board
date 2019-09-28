const Board = {
	id: 1,
	title: 'MyPat',
	meta: {
		slug: 'mypat',
		background: {
			type: 1,
			value: 'rgb(0, 121, 191)'
		}
	},
	tasks: {
		'task-1': {
			id: 'task-1',
			title: 'Revolutionize the Indian Education System',
			description: ''
		},
		'task-2': {
			id: 'task-2',
			title: 'Collect Feedback on current system',
			description: ''
		},
		'task-3': {
			id: 'task-3',
			title: 'Hire Yomesh Gupta',
			description: ''
		},
		'task-4': {
			id: 'task-4',
			title: 'Build new products',
			description: ''
		},
		'task-5': {
			id: 'task-5',
			title: 'MyPat new features',
			description: ''
		},
		'task-6': {
			id: 'task-6',
			title: 'Make FITJEE deal',
			description: ''
		}
	},
	lists: {
		'list-1': {
			id: 'list-1',
			title: 'Ideas',
			description: '',
			taskIds: ['task-1', 'task-2']
		},
		'list-2': {
			id: 'list-2',
			title: 'In Progress',
			description: '',
			taskIds: ['task-3', 'task-4']
		},
		'list-3': {
			id: 'list-3',
			title: 'Testing',
			description: '',
			taskIds: ['task-5']
		},
		'list-4': {
			id: 'list-4',
			title: 'Done',
			description: '',
			taskIds: ['task-6']
		}
	},
	listOrder: ['list-1', 'list-2', 'list-3', 'list-4']
};

export default Board;
