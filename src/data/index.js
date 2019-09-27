const Board = {
	id: 1,
	title: 'MyPat',
	meta: {
		slug: 'mypat',
		background: {
			type: 1,
			value: '#000000'
		}
	},
	tasks: {
		1: {
			id: 1,
			title: 'Revolutionize the Indian Education System',
			description: ''
		},
		2: {
			id: 2,
			title: 'Collect Feedback on current system',
			description: ''
		},
		3: {
			id: 3,
			title: 'Hire Yomesh Gupta',
			description: ''
		},
		4: {
			id: 4,
			title: 'Build new products',
			description: ''
		},
		5: {
			id: 5,
			title: 'MyPat new features',
			description: ''
		},
		6: {
			id: 6,
			title: 'Make FITJEE deal',
			description: ''
		}
	},
	lists: {
		1: {
			id: 1,
			title: 'Ideas',
			description: '',
			taskIds: [1, 2]
		},
		2: {
			id: 2,
			title: 'In Progress',
			description: '',
			taskIds: [3, 4]
		},
		3: {
			id: 3,
			title: 'Testing',
			description: '',
			taskIds: [5]
		},
		4: {
			id: 4,
			title: 'Done',
			description: '',
			taskIds: [6]
		}
	},
	listOrder: [1, 2, 3, 4]
};

export default Board;
