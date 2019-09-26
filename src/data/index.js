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
	lists: [
		{
			id: 1,
			title: 'Ideas',
			description: '',
			cards: [
				{
					id: 1,
					title: 'Revolutionize the Indian Education System',
					description: ''
				},
				{
					id: 2,
					title: 'Collect Feedback on current system',
					description: ''
				}
			]
		},
		{
			id: 2,
			title: 'In Progress',
			description: '',
			cards: [
				{
					id: 1,
					title: 'Hire Yomesh Gupta',
					description: ''
				},
				{
					id: 2,
					title: 'Build new products',
					description: ''
				}
			]
		},
		{
			id: 3,
			title: 'Testing',
			description: '',
			cards: [
				{
					id: 1,
					title: 'MyPat new features',
					description: ''
				}
			]
		},
		{
			id: 4,
			title: 'Done',
			description: '',
			cards: [
				{
					id: 1,
					title: 'Find market fit',
					description: ''
				},
				{
					id: 2,
					title: 'Send this test to Yomesh Gupta',
					description: ''
				}
			]
		}
	]
};

export default Board;
