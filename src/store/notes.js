export default {
	state: {
		notes: [
			{
				id: 1,
				title: "First Note",
				descr: "Desc for the first note",
				date: new Date(Date.now()).toLocaleString(),
				status: "standart",
			},
			{
				id: 2,
				title: "Second Note",
				descr: "Desc for the second note",
				date: new Date(Date.now()).toLocaleString(),
				status: "standart",
			},
			{
				id: 3,
				title: "Third Note",
				descr: "Desc for the third note",
				date: new Date(Date.now()).toLocaleString(),
				status: "standart",
			},
		],
		priorityList: {
			label: "Priority",
			data: [
				{ id: 1, name: "standart", title: "стандарт" },
				{ id: 2, name: "important", title: "важно" },
				{ id: 3, name: "veryImportant", title: "очень важно" },
			]
		},
		priorityColors: {
			standart: "white",
			important: "yellow",
			veryImportant: "red",
		},
	},
	mutations: {
		addNote(state, note) {
			let { title, descr, status } = note;
			let id = Math.max(...(state.notes.map(item => item.id))) + 1
			state.notes.push({
				id,
				title,
				descr,
				date: new Date(Date.now()).toLocaleString(),
				status,
			});
		},
		deleteNote(state, id) {
			state.notes = state.notes.filter(item => item.id != id)
		},
	},
	actions: {
		addNote({ commit }, note) {
			commit('addNote', note)
		},
		deleteNote({ commit }, id) {
			commit('deleteNote', id)
		},
	},
	getters: {
		getNotes(state) {
			return state.notes
		},
		getPriorityList(state) {
			return state.priorityList
		},
		getFiltredNotes: (state) => (keyWord) => {
			if (!keyWord) {
				return state.notes
			}
			let search = keyWord.trim().toLowerCase()
			let result = state.notes.filter(function (item) {
				if (item.title.toLowerCase().indexOf(search) != -1) {
					return item
				}
			})
			return result
		},
		getColor: (state) => (status) => {
			return state.priorityColors[status]
		}
	},
}
