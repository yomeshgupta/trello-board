const Board = {
	id: 1,
	title: 'Things To Do',
	meta: {
		slug: 'mypat',
		isBookmarked: false,
		background: {
			type: 1,
			value: 'rgb(0, 121, 191)'
		}
	},
	tasks: {
		'task-1': {
			id: 'task-1',
			title: 'Change the world',
			description: ''
		},
		'task-2': {
			id: 'task-2',
			title: 'Collect Feedback',
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
			title: 'Test new features',
			description: ''
		},
		'task-6': {
			id: 'task-6',
			title: 'Buy Google',
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
	listOrder: ['list-1', 'list-2', 'list-3', 'list-4'],
	users: [
		{
			id: 1,
			name: 'Yomesh Gupta',
			image: '',
			isOwner: true
		},
		{
			id: 2,
			name: 'Ajay Mann',
			image: '',
			isOwner: false
		},
		{
			id: 3,
			name: 'Prithvi Bhola',
			image: '',
			isOwner: false
		}
	]
};

export default Board;
